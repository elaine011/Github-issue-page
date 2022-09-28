import { IssueOpenedIcon } from "@primer/octicons-react";

export default function NoIssue() {
  return (
    <div>
      <div>
        <IssueOpenedIcon size={24} />
      </div>
      <h1>There aren't any open issues.</h1>
      <div>
        You could search <a>all of GitHub</a> or try an <a>advanced search</a>.
      </div>
    </div>
  );
}
