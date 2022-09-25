import styled from "styled-components";
import { useContext } from "react";

import { SelectContext } from "../../utils/SelectContext";
import SortList from "../../components/SortList";
import LabelList from "./LabelList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  font-size: 14px;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 24px;
`;
const LabelsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  padding: 16px;
  border: 1px solid #d0d7de;
  border-bottom: transparent;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #f6f8fa;
`;

const H3 = styled.h3`
  font-weight: 600;
`;
const LabelNums = styled.span`
  margin-right: 4px;
`;

export default function IssuesContent() {
  // const defaultLabelTag = {
  //   tagName: "bug",
  //   backgroundColor: "rgb(215, 58, 74)",
  // };
  // const defaultDesc = {
  //   description: "Something isn't working",
  // };
  const defaultState = {
    state: "2 open issues and pull requests",
  };
  // const userInfo = {
  //   owner: "elaine011",
  //   repo: "test-issue",
  // };
  const [labels, setLabels] = useContext(SelectContext).labels;

  // const data = useGetLabelsQuery(userInfo);

  return (
    <>
      <Container>
        <LabelsHeader>
          <H3>
            <LabelNums>{labels && labels.length}</LabelNums>
            labels
          </H3>
          <SortList />
        </LabelsHeader>
        {labels &&
          labels.map((item, index) => {
            return (
              <LabelList
                LabelTagColor={item.color}
                LableTagName={item.name}
                LabelDesc={item.description}
                defaultState={defaultState}
              />
            );
          })}
      </Container>
    </>
  );
}
