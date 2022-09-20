import styled from "styled-components";

import Edit from "./Edit";
import Delete from "./Delete";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  margin-top: 20px;
  font-size: 14px;
`;
const LabelsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  padding: 16px;
  border: 1px solid #d0d7de;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #f6f8fa;
`;
const Labels = styled.div`
  &::after {
    display: inline-block;
    border: 4px solid;
    vertical-align: -2px;
    content: "";
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    margin-left: 4px;
  }
`;
const H3 = styled.h3`
  font-weight: 600;
`;
const LabelNums = styled.span`
  margin-right: 4px;
`;
const LabelList = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  border: 1px solid #d0d7de;
  border-top: none;
  color: #57606a;

  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;
const TagWrap = styled.div`
  width: 24.99999997%;
`;
const Tag = styled.a`
  text-decoration: none;
  background-color: rgb(215, 58, 74);
  color: rgb(255, 255, 255);
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  border-radius: 2em;
`;
const Description = styled.span`
  width: 33.33333332%;
`;
const State = styled.span`
  width: 24.99999999%;
`;
const Revise = styled.div`
  width: 16.66666666%;
  display: flex;
  justify-content: flex-end;
`;

export default function IssuesContent() {
  return (
    <>
      <Container>
        <LabelsHeader>
          <H3>
            <LabelNums>12</LabelNums>
            labels
          </H3>
          <Labels>Sort</Labels>
        </LabelsHeader>
        <LabelList>
          <TagWrap>
            <Tag href="#/">bug</Tag>
          </TagWrap>
          <Description>Something isn't working</Description>
          <State>2 open issues and pull requests</State>
          <Revise>
            <Edit />
            <Delete>Delete</Delete>
          </Revise>
        </LabelList>
      </Container>
    </>
  );
}
