import { useState } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import LoginHeader from "../../components/LoginHeader";
import RepoHeader from "../../components/RepoHeader";
import { store } from "../../redux/store";
import api from "../../utils/api";
import { IssueContext } from "../../utils/SelectContext";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function NewIssue() {
  const [token, setToken] = useState("");
  const [labelQuery, setLabelQuery] = useState([]);
  const [searchQuery, setSearchQuery] = useState(["is:issue is:open"]);
  const [inputValue, setInputValue] = useState({});
  const [query, setQuery] = useState({
    owner: "elaine011",
    repo: "test-issue",
    perPage: 10,
    page: 1,
  });
  const Navigate = useNavigate();

  const userInfo = {
    owner: "elaine011",
    repo: "test-issue",
    title: inputValue["title"],
    body: inputValue["body"],
    assignees: inputValue["assignees"],
    labels: inputValue["labels"],
  };

  async function createIssue() {
    const res = await api.createIssue(userInfo);
    if (res) Navigate("/");
  }

  const handleSubmitBtn = () => {
    if (inputValue["title"] && inputValue["title"].length > 0) {
      return true;
    } else return false;
  };

  return (
    <>
      <LoginHeader setTokenFn={setToken} />
      <RepoHeader />
      <IssueContext.Provider
        value={{
          label: [labelQuery, setLabelQuery],
          query: [query, setQuery],
          searchQuery: [searchQuery, setSearchQuery],
          inputValue: [inputValue, setInputValue],
          createIssue,
          handleSubmitBtn,
        }}
      >
        <Provider store={store}>
          <div className="max-w-[1280px] px-4 md:mt-6 md:flex md:w-full md:px-6 xl:mx-auto">
            <Content />
            <Sidebar />
          </div>
        </Provider>
      </IssueContext.Provider>
      <Footer />
    </>
  );
}
