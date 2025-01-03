import styled from "styled-components";

type DisplayProps = {
  display: string;
};
type backgroundColorProps = {
  backgroundColor: string;
};
const ColorMenu = styled.div<DisplayProps>`
  display: ${(props) => props.display};
  &::after {
    top: -12.7px;
    left: 10px;
    right: auto;
    border: 7px solid transparent;
    position: absolute;
    display: inline-block;
    border-bottom-color: #fff;
    content: "";
  }
  &::before {
    top: -14px;
    left: 10px;
    right: auto;
    border: 7px solid transparent;
    position: absolute;
    display: inline-block;
    border-bottom-color: #d0d7de;
    content: "";
  }

  z-index: 100;
  position: absolute;
  background-color: #fff;
  border: 1px solid #d0d7de;
  box-shadow: 0 8px 24px rgba(140, 149, 159, 20%);
  top: 100%;
  left: 20%;
  width: 16em;
  border-radius: 6px;
  padding: 8px;
  margin-right: auto;

  @media screen and (max-width: 767.9px) {
    top: 42px;
    left: 7%;

    &::after {
      content: none;
    }
    &::before {
      content: none;
    }
  }
`;
const ColorMenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;
const ColorMenuBtn = styled.button<backgroundColorProps>`
  width: 24px;
  height: 24px;
  border-color: transparent;
  border-radius: 6px;
  background-color: ${(props) => "#" + props.backgroundColor};
  cursor: pointer;
`;
export default function ColorMenuBar({ inputFocus, setInputColor }) {
  const ButtonColor = {
    darkColors: [
      "B60205",
      "D93F0B",
      "FBCA04",
      "0E8A16",
      "006B75",
      "1D76DB",
      "0052CC",
      "5319E7",
    ],
    lightColors: [
      "E99695",
      "F9D0C4",
      "FEF2C0",
      "C2E0C6",
      "BFDADC",
      "C5DEF5",
      "BFD4F2",
      "D4C5F9",
    ],
  };

  return (
    <>
      <ColorMenu display={inputFocus ? "block" : "none"}>
        <p>Choose from default colors:</p>
        <ColorMenuContainer>
          {ButtonColor.darkColors.map((item) => (
            <ColorMenuBtn
              backgroundColor={item}
              onMouseDown={() => setInputColor(item)}
            ></ColorMenuBtn>
          ))}
        </ColorMenuContainer>
        <ColorMenuContainer>
          {ButtonColor.lightColors.map((item) => (
            <ColorMenuBtn
              backgroundColor={item}
              onMouseDown={() => setInputColor(item)}
            ></ColorMenuBtn>
          ))}
        </ColorMenuContainer>
      </ColorMenu>
    </>
  );
}
