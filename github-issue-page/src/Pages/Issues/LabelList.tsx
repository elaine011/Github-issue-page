import styled from "styled-components";
import { KebabHorizontalIcon } from "@primer/octicons-react";
import { useContext, useState } from "react";

import LabelTag from "../../components/LabelTag";
import Edit from "./Edit";
import Delete from "./Delete";

type SelectedProps = {
  selected: string;
};
type DisplayProps = {
  display: string;
};
const List = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  border: 1px solid #d0d7de;
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
const Description = styled.span<DisplayProps>`
  width: 33.33333332%;
  display: ${(props) => props.display};

  @media screen and (max-width: 1011.9px) {
    display: block;
  }
  @media screen and (max-width: 767.9px) {
    display: none;
  }
`;
const State = styled.span<DisplayProps>`
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
const ReviseBtn = styled.button<SelectedProps>`
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
const MenuBtn = styled(KebabHorizontalIcon)<SelectedProps>`
  @media screen and (max-width: 1011.9px) {
    fill: ${(props) => props.selected};
    &:hover {
      fill: #fff;
    }
  }
`;
const ReviseMenu = styled.div<DisplayProps>`
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
    z-index: 100;
  }
`;
const ReviseMenuContainer = styled.div`
  @media screen and (max-width: 1011.9px) {
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
export default function LabelList({
  defaultLabelTag,
  defaultDesc,
  defaultState,
}) {
  const [selectedEditBtn, setSelectedEditBtn] = useState<Boolean>(false);

  return (
    <List>
      <LabelTag
        tagName={defaultLabelTag.tagName}
        backgroundColor={defaultLabelTag.backgroundColor}
      />
      <Description display={selectedEditBtn ? "none" : "block"}>
        {defaultDesc.description}
      </Description>
      <State display={selectedEditBtn ? "none" : "block"}>
        {defaultState.state}
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
          <MenuBtn size={16} selected={selectedEditBtn ? "#fff" : "#57606a"} />
        </ReviseBtn>
        <ReviseMenu display={selectedEditBtn ? "block" : "none"}>
          <ReviseMenuContainer>
            <ReviseMenuBtn>Edit</ReviseMenuBtn>
            <ReviseMenuBtn>Delete</ReviseMenuBtn>
          </ReviseMenuContainer>
        </ReviseMenu>
      </ReviseSection>
    </List>
  );
}
