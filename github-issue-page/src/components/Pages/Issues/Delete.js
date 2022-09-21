import styled from "styled-components";

const Container = styled.div`
  margin-left: ${(props) => props.margin};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1011.9px) {
    display: none;
  }
`;

export default function Delete({ selectedEditBtn }) {
  const handleDelete = () => {
    alert(
      "Are you sure? Deleting a label will remove it from all issues and pull requests"
    );
  };
  return (
    <Container
      margin={selectedEditBtn ? "auto" : "16px"}
      onClick={handleDelete}
    >
      Delete
    </Container>
  );
}
