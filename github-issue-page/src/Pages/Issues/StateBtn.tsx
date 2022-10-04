import { CheckIcon, IssueOpenedIcon } from "@primer/octicons-react";
import { useContext } from "react";
import { IssueContext } from "../../utils/SelectContext";

export default function StateBtn() {
  const [query, setQuery] = useContext(IssueContext)["query"];

  return (
    <div className="order-last mb-4 lg:hidden">
      <a
        href="#/"
        onClick={() => setQuery({ owner: "elaine011", repo: "test-issue" })}
      >
        <IssueOpenedIcon size={16} className="mr-1" />
        <span className="font-semibold text-primary-text">Open</span>
      </a>
      <a
        href="#/"
        className="ml-2.5"
        onClick={() => setQuery({ ...query, state: "closed" })}
      >
        <CheckIcon size={16} className="mr-1 fill-fg-muted" />
        <span className="text-fg-muted hover:text-primary-text">Closed</span>
      </a>
    </div>
  );
}
