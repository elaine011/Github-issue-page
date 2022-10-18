import { useContext } from "react";
import styled from "styled-components";

import { SelectContext } from "../../utils/SelectContext";

type MarginProps = {
  margin: string;
};
const Container = styled.div<MarginProps>`
  margin-left: ${(props) => props.margin};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1011.9px) {
    display: none;
  }
`;

export default function Delete({ selectedMobileEditBtn, onClick }) {
  return (
    <Container
      margin={selectedMobileEditBtn ? "auto" : "16px"}
      onClick={onClick}
    >
      Delete
    </Container>
  );
}
