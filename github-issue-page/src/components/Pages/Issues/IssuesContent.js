import styled from "styled-components";
import { useState } from "react";
import { KebabHorizontalIcon, CheckIcon } from "@primer/octicons-react";

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
  cursor: pointer;
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
  &:active {
    text-decoration: underline;
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
const LabelsList = styled.div`
  z-index: 99;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-size: 12px;
  color: #24292f;
  border-color: #d0d7de;
  margin-top: 4px;
  margin-bottom: 20px;
  background-clip: padding-box;
  line-height: 1.5;
  box-shadow: 0 8px 24px rgb(140, 149, 159, 20%);
  position: absolute;
  right: 40px;
  border-radius: 6px;
  display: ${(props) => props.display};
`;
const SortTitle = styled.div`
  padding: 8px 10px;
  line-height: 16px;
  border-bottom: 1px solid hsla(210, 18%, 87%, 1);
  font-weight: 600;
`;
const SortList = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;
const SortLink = styled.a`
  text-decoration: none;
  color: #24292f;
  padding: 8px;
  height: 32px;
  width: 100%;
  border-bottom: 1px solid hsla(210, 18%, 87%, 1);
`;
const SortText = styled.span`
  padding-left: 8px;
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ReviseBtn = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    border-radius: 6px;
    border: 1px solid rgba(27, 31, 60, 0.15);
    padding: 3px 12px;
    float: right;
  }
`;

export default function IssuesContent() {
  const [selectedSort, setSelectedSort] = useState(false);
  return (
    <>
      <Container>
        <LabelsHeader>
          <H3>
            <LabelNums>12</LabelNums>
            labels
          </H3>
          <div>
            <Labels onClick={() => setSelectedSort(!selectedSort)}>Sort</Labels>
            <LabelsList display={selectedSort ? "block" : "none"}>
              <SortTitle>Sort</SortTitle>
              <SortList>
                <SortLink href="#/">
                  <CheckIcon size={16} />
                  <SortText>Alphabetically</SortText>
                </SortLink>
                <SortLink href="#/">
                  <CheckIcon size={16} />
                  <SortText>Reverse alphabetically</SortText>
                </SortLink>
                <SortLink href="#/">
                  <CheckIcon size={16} />
                  <SortText>Most issues</SortText>
                </SortLink>
                <SortLink href="#/">
                  <CheckIcon size={16} />
                  <SortText>Fewest issues</SortText>
                </SortLink>
              </SortList>
            </LabelsList>
          </div>
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
          <ReviseBtn>
            <KebabHorizontalIcon size={16} fill="#57606a" />
          </ReviseBtn>
        </LabelList>
      </Container>
    </>
  );
}
