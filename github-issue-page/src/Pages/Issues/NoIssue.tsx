import { IssueOpenedIcon } from "@primer/octicons-react";

export default function NoIssue() {
  return (
    <div className="mx-auto flex flex-col items-center border border-solid border-primary-border py-[80px] px-10 text-center lg:mx-auto lg:max-w-[1280px]">
      <div>
        <IssueOpenedIcon size={24} />
      </div>
      <h1 className="py-6 text-[24px] font-semibold	">
        No results matched your search.
      </h1>
      <div>
        You could search <a className="text-[#0969da]">all of GitHub</a> or try
        an <a className="text-[#0969da]">advanced search</a>.
      </div>
    </div>
  );
}
