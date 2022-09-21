import styled from "styled-components";
import { useState } from "react";
import { KebabHorizontalIcon, CheckIcon } from "@primer/octicons-react";

import Edit from "./Edit";
import Delete from "./Delete";

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
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #f6f8fa;
`;
const Labels = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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
  flex-wrap: wrap;
  justify-content: space-between;

  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
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

  &:hover {
    background-color: #0969da;
    color: #fff;
  }
`;
const SortText = styled.span`
  position: absolute;
  left: 30px;
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
  display: ${(props) => props.display};

  @media screen and (max-width: 1011.9px) {
    display: block;
  }
  @media screen and (max-width: 767.9px) {
    display: none;
  }
`;
const State = styled.span`
  display: ${(props) => props.display};

  width: 24.99999999%;
  &:hover {
    cursor: pointer;
    color: #0969da;
  }
  @media screen and (max-width: 1011.9px) {
    display: block;
  }
  @media screen and (max-width: 767.9px) {
    display: none;
  }
`;
const ReviseSection = styled.div`
  @media screen and (max-width: 1011.9px) {
    width: 16.66666666%;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
  @media screen and (max-width: 767.9px) {
    width: 88%;
    display: flex;
    justify-content: flex-end;
  }
`;
const ReviseBtn = styled.button`
  display: none;

  @media screen and (max-width: 1011.9px) {
    display: block;
    border-radius: 6px;
    border: 1px solid rgba(27, 31, 60, 0.15);
    padding: 3px 12px;
    background-color: ${(props) => props.selected};

    &:hover {
      background-color: #0969da;
    }
  }
`;
const MenuBtn = styled(KebabHorizontalIcon)`
  @media screen and (max-width: 1011.9px) {
    fill: ${(props) => props.selected};
    &:hover {
      fill: #fff;
    }
  }
`;
const ReviseMenu = styled.div`
  display: none;

  @media screen and (max-width: 1011.9px) {
    width: 158px;
    margin-top: 2px;
    padding: 0 4px;
    line-height: 1.5;
    position: absolute;
    font-size: 12px;
    top: 100%;
    display: ${(props) => props.display};
  }
`;
const ReviseMenuContainer = styled.div`
  @media screen and (max-width: 1011.9px) {
    z-index: 100;
    width: 158px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #24292f;
    border-color: #d0d7de;
    margin-top: 2px;
    padding: 0 4px;
    line-height: 1.5;
    box-shadow: 0 8px 24px rgba(140, 149, 159, 20%);
    border-radius: 6px;

    &::after {
      top: -12px;
      right: 10px;
      left: auto;
      border: 7px solid transparent;
      position: absolute;
      display: inline-block;
      border-bottom-color: #fff;
      content: "";
    }
  }
`;
const ReviseMenuBtn = styled.button`
  justify-content: flex-end;

  &:hover {
    background-color: #0969da;
    color: #fff;
  }

  @media screen and (max-width: 1011.9px) {
    text-align: start;
    background-color: transparent;
    border: none;
    padding: 4px 8px 4px 16px;
  }
`;

export default function IssuesContent({
  selectedSort,
  setSelectedSort,
  selectedEditBtn,
  setSelectedEditBtn,
  mobileEditBtn,
  setMobileEditBtn,
}) {
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
                  {/* <CheckIcon size={16} /> */}
                  <SortText>Reverse alphabetically</SortText>
                </SortLink>
                <SortLink href="#/">
                  {/* <CheckIcon size={16} /> */}
                  <SortText>Most issues</SortText>
                </SortLink>
                <SortLink href="#/">
                  {/* <CheckIcon size={16} /> */}
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
          <Description display={selectedEditBtn ? "none" : "block"}>
            Something isn't working
          </Description>
          <State display={selectedEditBtn ? "none" : "block"}>
            2 open issues and pull requests
          </State>
          <Edit
            selectedEditBtn={selectedEditBtn}
            setSelectedEditBtn={setSelectedEditBtn}
          />
          <Delete selectedEditBtn={selectedEditBtn} />
          <ReviseSection>
            <ReviseBtn
              onClick={() => setSelectedEditBtn(!selectedEditBtn)}
              selected={selectedEditBtn ? "#0969da" : "none"}
            >
              <MenuBtn
                size={16}
                selected={selectedEditBtn ? "#fff" : "#57606a"}
              />
            </ReviseBtn>
            <ReviseMenu display={selectedEditBtn ? "block" : "none"}>
              <ReviseMenuContainer>
                <ReviseMenuBtn>Edit</ReviseMenuBtn>
                <ReviseMenuBtn>Delete</ReviseMenuBtn>
              </ReviseMenuContainer>
            </ReviseMenu>
          </ReviseSection>
        </LabelList>
      </Container>
    </>
  );
}
