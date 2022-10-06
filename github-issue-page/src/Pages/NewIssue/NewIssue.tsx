import { useState } from "react";
import { Provider } from "react-redux";
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

  const userInfo = {
    owner: "elaine011",
    repo: "test-issue",
    title: inputValue["title"],
    body: inputValue["body"],
    assignees: inputValue["assignees"],
    labels: inputValue["labels"],
  };

  async function createIssue() {
    await api.createIssue(userInfo);
  }

  const handleSubmitBtn = () => {
    if (inputValue["title"] && inputValue["title"].length > 0) {
      return "bg-[#2da44e] text-[#fff]";
    } else return "bg-[#94d3a2] text-[rgba(255,255,255,0.8)]";
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
