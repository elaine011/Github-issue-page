import IssueHeader from "./IssueHeader";
import Login from "../../Login";
import IssuesContent from "./IssuesContent";
import Footer from "../../Footer";

export default function Issues() {
  return (
    <>
      <Login />
      <IssueHeader />
      <IssuesContent />
      <Footer />
    </>
  );
}
