import { useContext } from "react";
import { handleCreateTime } from "../../utils/handleTime";
import { IssueContext } from "../../utils/SelectContext";
import Comment from "./Comment";

export default function TimeLine() {
  const [timelineData, setTimelineData] =
    useContext(IssueContext)["timelineData"];
  const [issueCommentsData, setIssueCommentsData] =
    useContext(IssueContext)["issueCommentsData"];
  return (
    <>
      {issueCommentsData && (
        <>
          <Comment
            author={undefined}
            authorComment={true}
            actor={issueCommentsData.user.login}
            body={issueCommentsData?.body}
            createdTime={handleCreateTime(issueCommentsData.created_at)}
            owner={issueCommentsData.author_association}
            actorImg={issueCommentsData.user.avatar_url}
            reactions={issueCommentsData.reactions}
            commentId={issueCommentsData.id}
          />

          {timelineData &&
            timelineData?.map((item) =>
              item?.event === "commented" ? (
                <Comment
                  author={issueCommentsData.user.login}
                  authorComment={false}
                  actor={item.actor.login}
                  body={item?.body}
                  createdTime={handleCreateTime(item.created_at)}
                  owner={item.author_association}
                  actorImg={item.actor.avatar_url}
                  reactions={item.reactions}
                  commentId={item.id}
                  key={item.id}
                />
              ) : (
                <></>
              )
            )}
        </>
      )}
    </>
  );
}
