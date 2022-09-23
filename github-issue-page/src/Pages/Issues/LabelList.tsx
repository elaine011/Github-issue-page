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
type WrapProps = {
  flexWrap: string;
};
const List = styled.div<WrapProps>`
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

  @media screen and (max-width: 1011.9px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 767.9px) {
    flex-wrap: nowrap;
    flex-wrap: ${(props) => props.flexWrap};
  }
`;
const Description = styled.span<DisplayProps>`
  width: 33.33333332%;
  display: ${(props) => props.display};

  @media screen and (max-width: 1011.9px) {
    display: ${(props) => props.display};
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
    display: ${(props) => props.display};
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
    cursor: pointer;

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
    border: 1px solid #d0d7de;
    margin-top: 2px;
    line-height: 1.5;
    box-shadow: 0 8px 24px rgba(140, 149, 159, 20%);
    border-radius: 6px;
    padding-top: 4px;
    padding-bottom: 4px;

    &::after {
      top: -10.7px;
      right: 10px;
      left: auto;
      border: 7px solid transparent;
      position: absolute;
      display: inline-block;
      border-bottom-color: #fff;
      content: "";
    }
    &::before {
      top: -12px;
      right: 10px;
      left: auto;
      border: 7px solid transparent;
      position: absolute;
      display: inline-block;
      border-bottom-color: #d0d7de;
      content: "";
    }
  }
`;
const ReviseMenuBtn = styled.button<DisplayProps>`
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
    display: ${(props) => props.display};
    justify-content: flex-end;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    cursor: pointer;
  }
`;
const DeleteBtn = styled.button`
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
    cursor: pointer;
  }
`;

export default function LabelList({
  defaultLabelTag,
  defaultDesc,
  defaultState,
}) {
  const [selectedEditBtn, setSelectedEditBtn] = useState<Boolean>(false);
  const [selectedMobileEditBtn, setSelectedMobileEditBtn] =
    useState<Boolean>(false);
  const [color, setColor] = useState("d73a4a");

  const handleColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const handleDelete = () => {
    alert(
      "Are you sure? Deleting a label will remove it from all issues and pull requests"
    );
  };

  return (
    <List flexWrap={selectedEditBtn ? "nowrap" : "wrap"}>
      <LabelTag tagName={defaultLabelTag.tagName} backgroundColor={color} />
      <Description
        display={selectedMobileEditBtn || selectedEditBtn ? "none" : "block"}
      >
        {defaultDesc.description}
      </Description>
      <State
        display={selectedMobileEditBtn || selectedEditBtn ? "none" : "block"}
      >
        {defaultState.state}
      </State>
      <Edit
        selectedMobileEditBtn={selectedMobileEditBtn}
        setSelectedMobileEditBtn={setSelectedMobileEditBtn}
        color={color}
        setColor={setColor}
        handleColor={handleColor}
      />
      <Delete
        selectedMobileEditBtn={selectedMobileEditBtn}
        onClick={handleDelete}
      />

      <ReviseSection>
        <ReviseBtn
          onClick={() => setSelectedMobileEditBtn(true)}
          selected={selectedMobileEditBtn ? "#0969da" : "none"}
        >
          <MenuBtn
            size={16}
            selected={selectedMobileEditBtn ? "#fff" : "#57606a"}
          />
        </ReviseBtn>
        <ReviseMenu display={selectedMobileEditBtn ? "block" : "none"}>
          <ReviseMenuContainer>
            <ReviseMenuBtn
              onClick={() => setSelectedEditBtn(true)}
              display={selectedEditBtn ? "block" : "none"}
            >
              Edit
            </ReviseMenuBtn>
            <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
          </ReviseMenuContainer>
        </ReviseMenu>
      </ReviseSection>
    </List>
  );
}
