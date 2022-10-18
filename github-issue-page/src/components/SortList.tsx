import styled from "styled-components";
import { useContext } from "react";

import { CheckIcon } from "@primer/octicons-react";
import { SelectContext } from "../utils/SelectContext";

type DisplayProps = {
  display: string;
};
const Container = styled.div`
  position: relative;
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
const LabelsList = styled.div<DisplayProps>`
  z-index: 100;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-size: 12px;
  color: #24292f;
  border: 1px solid #d0d7de;
  margin-top: 4px;
  margin-bottom: 20px;
  background-clip: padding-box;
  line-height: 1.5;
  box-shadow: 0 8px 24px rgb(140, 149, 159, 20%);
  position: absolute;
  right: 0px;
  border-radius: 6px;
  display: ${(props) => props.display};
`;
const SortTitle = styled.div`
  padding: 8px 10px;
  line-height: 16px;
  border-bottom: 1px solid hsla(210, 18%, 87%, 1);
  font-weight: 600;
`;
const SortListMenu = styled.div`
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
const OutSideWrapper = styled.div<DisplayProps>`
  display: ${(props) => props.display};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
`;

export default function SortList() {
  const [selectedSort, setSelectedSort] = useContext(SelectContext).sort;

  return (
    <Container>
      <Labels onClick={() => setSelectedSort(!selectedSort)}>Sort</Labels>
      <LabelsList display={selectedSort ? "block" : "none"}>
        <SortTitle>Sort</SortTitle>
        <SortListMenu>
          <SortLink href="#/">
            <CheckIcon size={16} />
            <SortText>Alphabetically</SortText>
          </SortLink>
          <SortLink href="#/">
            <SortText>Reverse alphabetically</SortText>
          </SortLink>
          <SortLink href="#/">
            <SortText>Most issues</SortText>
          </SortLink>
          <SortLink href="#/">
            <SortText>Fewest issues</SortText>
          </SortLink>
        </SortListMenu>
      </LabelsList>
      <OutSideWrapper
        display={selectedSort ? "block" : "none"}
        onClick={() => setSelectedSort(!selectedSort)}
      />
    </Container>
  );
}
