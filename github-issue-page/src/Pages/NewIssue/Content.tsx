import { useContext, useRef, useState } from "react";
import {
  ChevronUpIcon,
  TypographyIcon,
  ChevronDownIcon,
  QuoteIcon,
  CodeIcon,
  LinkIcon,
  MentionIcon,
  ImageIcon,
  CrossReferenceIcon,
  ReplyIcon,
  HeadingIcon,
  BoldIcon,
  ItalicIcon,
  ListUnorderedIcon,
  ListOrderedIcon,
  TasklistIcon,
  InfoIcon,
  MarkdownIcon,
} from "@primer/octicons-react";
import SubmitBtn from "./SubmitBtn";
import { IssueContext } from "../../utils/SelectContext";
import { marked } from "marked";
import "../../utils/prose.css";
import storage from "../../utils/firebase";
import { ref, uploadBytes } from "firebase/storage";
import TextareaMarkdown, {
  TextareaMarkdownRef,
} from "textarea-markdown-editor";
export default function Content() {
  const [isDisplayWrite, setIsDisplayWrite] = useState(false);
  const [isDisplayMarkdown, setIsDisplayMarkdown] = useState(false);
  const [isFocusTextArea, setIsFocusTextArea] = useState(false);
  const textAreaRef = useRef<TextareaMarkdownRef>(null);
  const [inputValue, setInputValue] = useContext(IssueContext)["inputValue"];
  const markdownIcon = [
    [
      <QuoteIcon size={16} className="octicon octicon-block-quotes" />,
      <CodeIcon size={16} />,
      <LinkIcon size={16} />,
    ],
    [
      <MentionIcon size={16} />,
      <ImageIcon size={16} />,
      <CrossReferenceIcon size={16} />,
      <ReplyIcon size={16} />,
    ],
    [
      <HeadingIcon size={16} className="octicon octicon-h3" />,
      <BoldIcon size={16} />,
      <ItalicIcon size={16} />,
    ],
    [
      <ListUnorderedIcon
        size={16}
        className="octicon octicon-unordered-list"
      />,
      <ListOrderedIcon size={16} className="octicon octicon-ordered-list" />,
      <TasklistIcon size={16} />,
    ],
  ];
  const renderer = {
    listitem(text: string, booleantask: boolean, checked: boolean) {
      if (checked !== undefined) {
        return `<li class='check'>${text}</li>`;
      }
      return `<li>${text}</li>`;
    },
    paragraph(text: string) {
      const mentionText = text.match(/^\@/g);
      const hashText = text.match(/^\#/g);
      if (hashText) {
        return `<button class="hash">${text}</button>`;
      }
      return `<button ${mentionText ? "class=mention" : null}>${text}</button>`;
    },
  };
  marked.use({ renderer });
  const handleUpload = async (e) => {
    if (e.target.files[0] == null) return;

    // Sending File to Firebase Storage
    const storageRef = ref(storage, `images/${e.target.files[0].name}`);

    try {
      await uploadBytes(storageRef, e.target.files[0]);
      alert("Successfully uploaded picture!");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="md:flex-auto">
      <div className="hidden md:float-left md:block">
        <img
          src="https://avatars.githubusercontent.com/u/70333832?s=80&v=4"
          className="w-10 rounded-[50%] shadow-[0_0_0_1px_rgba(27,31,36,0.15)]"
        />
      </div>
      <div className="md:relative md:ml-[56px]">
        <div className="md:rounded-md md:border md:border-[#d0d7de] md:bg-[#fff] md:before:absolute md:before:top-[11px] md:before:right-[100%] md:before:border-[7px] md:before:border-solid md:before:border-transparent md:before:border-r-[#d0d7de] md:after:absolute md:after:top-[11px] md:after:right-[100%] md:after:left-[-13px] md:after:border-[7px] md:after:border-solid md:after:border-transparent md:after:border-r-white">
          <div className="mb-4 mt-6 md:mt-0 md:mb-0 md:p-2">
            <input
              className="w-full rounded-md border border-solid border-[#d0d7de] bg-[#f6f8fa] px-3 py-[5px] text-base leading-5 text-[#24292f] shadow-[inset_0_1px_0_rgba(208,215,222,0.2)] focus:border focus:border-solid focus:border-[#0969da] focus:bg-white focus:shadow-innerblue focus:outline-none"
              type="text"
              placeholder="Title"
              onChange={(e) =>
                setInputValue({ ...inputValue, title: e.target.value })
              }
              value={inputValue?.title}
              required
            />
          </div>
          <div className="lg:flex lg:justify-between lg:border-b lg:border-solid lg:border-b-[#d0d7de]">
            <div className="mb-2 w-full text-[14px] md:m-2 md:mb-[-1px] md:w-auto">
              <button
                className={`w-2/4 border border-solid border-[#d0d7de] px-10 py-2 text-[#57606a] md:mt-[1px] md:w-auto md:rounded-t-md md:border-b md:border-b-white md:px-4 md:py-2 ${
                  isDisplayWrite
                    ? "bg-[#f6f8fa] md:border-0 md:border-b-0 md:bg-white"
                    : "border-b-0 bg-[#fff]"
                }`}
                onClick={() => setIsDisplayWrite(false)}
              >
                Write
              </button>
              <button
                className={`w-2/4 border border-l-0 border-solid border-[#d0d7de] px-10 py-2 text-[#57606a] md:w-auto md:rounded-t-md md:bg-[#fff] md:px-4 md:py-2 ${
                  isDisplayWrite
                    ? "border-b-0 border-[#d0d7de] bg-[#fff] md:border md:border-b-white"
                    : "bg-[#f6f8fa] md:border-none"
                }`}
                onClick={() => setIsDisplayWrite(true)}
              >
                Preview
              </button>
            </div>
            <div
              className={`flex flex-wrap px-2 pt-2 text-[#57606a] md:border-t md:border-t-[#d0d7de] lg:border-t-0 ${
                isDisplayWrite ? "hidden" : ""
              }`}
            >
              <div
                className="ml-[5px] mr-1 flex-auto cursor-pointer px-1 py-2 hover:text-[#0969da] md:hidden"
                onClick={() => setIsDisplayMarkdown(!isDisplayMarkdown)}
              >
                <TypographyIcon size={16} className="mr-1" />
                {isDisplayMarkdown ? (
                  <ChevronDownIcon size={16} />
                ) : (
                  <ChevronUpIcon size={16} />
                )}
              </div>
              <div className="flex">
                {markdownIcon[2].map((item, index) => (
                  <div
                    className="ml-[5px] hidden cursor-pointer p-2 first-of-type:pl-1 hover:text-[#0969da] md:block md:p-1"
                    key={index}
                    onClick={() =>
                      textAreaRef.current?.trigger(
                        `${item.props.className.split("octicon octicon-")[1]}`
                      )
                    }
                  >
                    {item}
                  </div>
                ))}
                {markdownIcon[0].map((item, index) => (
                  <div
                    className="ml-[5px] cursor-pointer p-2 first-of-type:pl-[5px] hover:text-[#0969da] md:p-1"
                    key={index}
                    onClick={() =>
                      textAreaRef.current?.trigger(
                        `${item.props.className.split("octicon octicon-")[1]}`
                      )
                    }
                  >
                    {item}
                  </div>
                ))}
                {markdownIcon[3].map((item, index) => (
                  <div
                    className="ml-[5px] hidden cursor-pointer p-2 hover:text-[#0969da] md:block md:p-1"
                    key={index}
                    onClick={() =>
                      textAreaRef.current?.trigger(
                        `${item.props.className.split("octicon octicon-")[1]}`
                      )
                    }
                  >
                    {item}
                  </div>
                ))}
                {markdownIcon[1].map((item, index) => (
                  <div
                    className={`mx-1 cursor-pointer p-2 hover:text-[#0969da] md:p-1 ${
                      item.props.className === "octicon octicon-image"
                        ? "md:hidden"
                        : ""
                    }`}
                    key={index}
                    onClick={() =>
                      textAreaRef.current?.trigger(
                        `${item.props.className.split("octicon octicon-")[1]}`
                      )
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>
              {isDisplayMarkdown && (
                <div className="flex w-full md:hidden">
                  {markdownIcon[2].map((item, index) => (
                    <div
                      className="ml-[5px] cursor-pointer p-2 first-of-type:pl-1 hover:text-[#0969da]"
                      key={index}
                      onClick={() =>
                        textAreaRef.current?.trigger(
                          `${item.props.className.split("octicon octicon-")[1]}`
                        )
                      }
                    >
                      {item}
                    </div>
                  ))}
                  {markdownIcon[3].map((item, index) => (
                    <div
                      className="ml-[5px] cursor-pointer p-2 hover:text-[#0969da]"
                      key={index}
                      onClick={() =>
                        textAreaRef.current?.trigger(
                          `${item.props.className.split("octicon octicon-")[1]}`
                        )
                      }
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="py-2 md:mx-2">
            {isDisplayWrite ? (
              <div
                className="prose min-h-[200px] border-b border-solid border-[#d0d7de] p-2 pt-0 text-[14px] text-[#24292f]"
                dangerouslySetInnerHTML={{
                  __html: marked(inputValue?.body ?? ""),
                }}
              >
                {/* <p>Noting to preview</p> */}
              </div>
            ) : (
              <div
                className={`md:group md:relative md:rounded-md md:border-[2px] md:border-solid  md:bg-[#f6f8fa] ${
                  isFocusTextArea
                    ? "md:border-[#0969da] md:shadow-innerblue"
                    : "md:border-[#d0d7de]"
                }`}
                onFocus={() => setIsFocusTextArea(true)}
                onBlur={() => setIsFocusTextArea(false)}
              >
                <TextareaMarkdown
                  className="min-h-[200px] w-full rounded-md border border-solid border-[#d0d7de] bg-[#f6f8fa] p-2 text-[14px] focus:border-solid focus:border-[#0969da] focus:bg-white focus:shadow-innerblue focus:outline-none md:flex md:rounded-b-none md:border-0 md:bg-[#f6f8fa] md:focus:border-0 md:focus:shadow-none"
                  placeholder="Leave a comment"
                  ref={textAreaRef}
                  value={inputValue?.body}
                  onChange={(e) =>
                    setInputValue({ ...inputValue, body: e.target.value })
                  }
                />
                <label
                  className={`hidden md:flex md:cursor-pointer md:items-center md:rounded-b-md md:border-t md:border-dashed md:bg-[#f6f8fa] md:text-[#57606a] ${
                    isFocusTextArea
                      ? "md:border-t-[#0969da]"
                      : "md:border-t-[#d0d7de]"
                  }`}
                >
                  <input
                    className="border-b-[#d0d7de] md:block md:w-full md:border md:border-solid md:opacity-[0.01]"
                    type="file"
                    accept=".gif,.jpeg,.jpg,.mov,.mp4,.png,.svg,.webm,.csv,.docx,.fodg,.fodp,.fods,.fodt,.gz,.log,.md,.odf,.odg,.odp,.ods,.odt,.pdf,.pptx,.tgz,.txt,.xls,.xlsx,.zip"
                    onChange={handleUpload}
                  />
                  <span className="md:absolute md:bottom-0 md:px-[10px] md:py-[7px] md:text-[13px]">
                    Attach files by dragging & dropping, selecting or pasting
                    them.
                  </span>
                  <a className="pr-[10px]">
                    <MarkdownIcon size={16} />
                  </a>
                </label>
              </div>
            )}
          </div>
          <div className="hidden md:m-2 md:mt-0 md:flex md:items-center md:justify-between">
            <a
              href="https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
              className="flex flex-auto text-[12px] text-[#57606a] hover:text-[#0969da] md:items-center"
            >
              <MarkdownIcon size={16} />
              <span className="md:ml-1 md:text-center">
                Styling with Markdown is supported
              </span>
            </a>
            <div>
              <SubmitBtn />
            </div>
          </div>
        </div>
        <div className="my-2 text-[12px] text-[#57606a]">
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
    </div>
  );
}
