import { useContext } from "react";
import { IssueContext } from "../../utils/SelectContext";

export default function SubmitBtn() {
  const handleSubmitBtn = useContext(IssueContext)["handleSubmitBtn"];

  return (
    <button
      className={`w-full rounded-md border border-solid border-[rgba(27,31,36,0.15)] px-4 py-[5px] text-center text-[14px] shadow-[0_1px_0_rgba(27,31,36,0.1),inset_0_1px_0_rgba(255,255,255,0.03)] ${
        handleSubmitBtn()
          ? "bg-[#2da44e] text-[#fff]"
          : "bg-[#94d3a2] text-[rgba(255,255,255,0.8)]"
      }`}
      disabled={!handleSubmitBtn()}
    >
      Submit new issue
    </button>
  );
}
