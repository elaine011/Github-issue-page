import { IssueOpenedIcon } from "@primer/octicons-react";

export default function Header() {
  return (
    <div>
      <div>
        <IssueOpenedIcon size={16} />
      </div>
      <div>
        <div>
          <span>markdown</span>
          <span>#43</span>
        </div>
        <div>elaine011 opened this this issue 5 days ago · 6 comments</div>
      </div>
    </div>
  );
}
