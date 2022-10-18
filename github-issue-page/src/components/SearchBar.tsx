import styled from "styled-components";

import { SearchIcon } from "@primer/octicons-react";

const LabelSearch = styled.input`
  width: 320px;
  height: 30px;
  padding: 5px 12px 5px 32px;
  color: #57606a;
  background-color: #f6f8fa;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
`;
const Container = styled.div`
  position: relative;
  margin-left: 8px;

  @media screen and (max-width: 767px) {
    margin-top: 16px;
    margin-left: 0;
  }
`;
const Search = styled(SearchIcon)`
  position: absolute;
  top: 0.5em;
  left: 0.5em;
`;

export default function SearchBar(inputValue) {
  inputValue = "";
  return (
    <Container>
      <Search size={16} fill="#57606a" />
      <LabelSearch
        type="text"
        placeholder="Search all labels"
        defaultValue={inputValue}
      />
    </Container>
  );
}
