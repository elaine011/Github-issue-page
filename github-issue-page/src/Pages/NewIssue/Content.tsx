import { InfoIcon } from "@primer/octicons-react";
import AuthorImg from "../../components/AuthorImg";
import TextArea from "../../components/TextArea";
export default function Content({ newComment }) {
  return (
    <div className="md:flex-auto">
      {newComment && (
        <div
          className="mb-4 border-t-2 border-solid border-[#d0d7de] md:ml-[56px]"
          id="comment-box"
        ></div>
      )}
      <AuthorImg />
      <TextArea newComment={newComment} />
      <div
        className={`my-2 text-[12px] text-[#57606a] ${
          newComment ? "mt-4" : ""
        }`}
      >
        <InfoIcon size={16} className="mr-1" />
        <span>
          Remember, contributions to this repository should follow our &nbsp;
        </span>
        <a
          href="https://docs.github.com/articles/github-community-guidelines"
          className="cursor-pointer text-[#0969da] hover:underline"
        >
          GitHub Community Guidelines.
        </a>
      </div>
    </div>
  );
}
