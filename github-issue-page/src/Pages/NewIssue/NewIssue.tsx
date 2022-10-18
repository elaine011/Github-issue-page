import { useContext, useState } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer";
import RepoHeader from "../../components/RepoHeader";
import { store } from "../../redux/store";
import api from "../../utils/api";
import { IssueContext } from "../../utils/SelectContext";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function NewIssue() {
  const [userData, setUserData] = useContext(IssueContext)["userData"];
  const [labelQuery, setLabelQuery] = useState([]);
  const [searchQuery, setSearchQuery] = useState(["is:issue is:open"]);
  const [inputValue, setInputValue] = useState({ title: "" });
  const [issueCommentsData, setIssueCommentsData] = useState(null);
  const [editData, setEditData] = useState();
  const [query, setQuery] = useState({
    owner: userData.userName,
    repo: userData.repo,
    perPage: 10,
    page: 1,
  });
  const [listContent, setListContent] = useState({
    assignees: [],
    labels: [],
  });
  const Navigate = useNavigate();
  const userInfo = {
    owner: userData.userName,
    repo: userData.repo,
    title: inputValue["title"],
    body: inputValue["body"],
    assignees: inputValue["assignees"],
    labels: inputValue["labels"],
  };

  async function createIssue() {
    const res = await api.createIssue(userInfo);
    if (res) Navigate("/issues");
  }

  const handleSubmitBtn = () => {
    if (inputValue["title"] && inputValue["title"].length > 0) {
      return true;
    } else return false;
  };

  async function getSideBarApi() {
    const assigneesData = await api.getAssignees(userInfo);
    const labelsData = await api.getLabels(userData);
    setListContent({
      ...listContent,
      assignees: assigneesData,
      labels: labelsData,
    });
  }

  return (
    <>
      <RepoHeader />
      <IssueContext.Provider
        value={{
          label: [labelQuery, setLabelQuery],
          query: [query, setQuery],
          searchQuery: [searchQuery, setSearchQuery],
          inputValue: [inputValue, setInputValue],
          createIssue,
          handleSubmitBtn,
          issueCommentsData: [issueCommentsData, setIssueCommentsData],
          editData: [editData, setEditData],
          userData: [userData, setUserData],
        }}
      >
        <Provider store={store}>
          <div className="max-w-[1280px] px-4 md:mt-6 md:flex md:w-full md:px-6 xl:mx-auto">
            <Content newComment={false} />
            <Sidebar
              newComment={false}
              getSideBarApi={getSideBarApi}
              listContent={listContent}
            />
          </div>
        </Provider>
      </IssueContext.Provider>
      <Footer />
    </>
  );
}
