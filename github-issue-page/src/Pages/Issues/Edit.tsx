import styled from "styled-components";
import { SyncIcon } from "@primer/octicons-react";
import { useContext, useRef, useState, useEffect } from "react";

import { SelectContext } from "../../utils/SelectContext";

type OrderProps = {
  order: number;
  width: string;
};
type DisplayProps = {
  display: string;
};
type backgroundColorProps = {
  backgroundColor: string;
};
const Container = styled.div<OrderProps>`
  margin-left: 16px;
  order: ${(props) => props.order};
  width: ${(props) => props.width};
  margin-left: auto;
`;
const Title = styled.span<DisplayProps>`
  cursor: pointer;
  display: ${(props) => props.display};

  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 1011.9px) {
    display: none;
  }
`;
const EditContainer = styled.div<DisplayProps>`
  display: ${(props) => props.display};
`;
const EditMenu = styled.div`
  display: flex;
  color: #24292f;
  margin-top: 8px;

  @media screen and (max-width: 767.9px) {
    display: flex;
    flex-direction: column;
  }
`;
const LabelName = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 20.99999999%;

  @media screen and (max-width: 767.9px) {
    width: 100%;
  }
`;
const Description = styled(LabelName)`
  width: 30.33333332%;
  @media screen and (max-width: 1011.9px) {
    width: 20.33333332%;
  }
  @media screen and (max-width: 767.9px) {
    width: 100%;
  }
`;
const ColorBox = styled(LabelName)`
  width: 16.66666666%;
  @media screen and (max-width: 767.9px) {
    width: 100%;
  }
`;

const Color = styled.div`
  display: flex;
  position: relative;
`;
const ColorBtn = styled.button<backgroundColorProps>`
  padding: 0 7px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => "#" + props.backgroundColor};
  cursor: pointer;
  height: 29px;
  margin-top: 8px;
  margin-right: 8px;
`;
const CheckBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
  margin-left: auto;
  width: 24.99999999%;
`;
const Input = styled.input`
  margin-top: 8px;
  background-color: #f6f8fa;
  padding: 5px 12px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
`;
const ColorInput = styled(Input)`
  @media screen and (max-width: 1011.9px) {
    width: 60%;
  }
  @media screen and (max-width: 767.9px) {
    width: 100%;
  }
`;
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
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
`;
const Cancel = styled.button`
  padding: 5px 16px;
  border: none;
  border-radius: 6px;
  background-color: #f6f8fa;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(27, 31, 36, 0.15);
  cursor: pointer;
  height: 29px;
  margin-top: 8px;
  margin-right: 8px;
  align-self: flex-end;
  font-weight: 500;
`;
const Change = styled(Cancel)`
  background-color: #2da44e;
  color: #fff;
  margin-right: 0px;
  white-space: nowrap;
`;

export default function Edit({
  selectedMobileEditBtn,
  setSelectedMobileEditBtn,
  color,
  setColor,
  handleColor,
}) {
  const ButtonColor = {
    darkColors: [
      "#B60205",
      "#D93F0B",
      "#FBCA04",
      "#0E8A16",
      "#006B75",
      "#1D76DB",
      "#0052CC",
      "#5319E7",
    ],
    lightColors: [
      "#E99695",
      "#F9D0C4",
      "#FEF2C0",
      "#C2E0C6",
      "#BFDADC",
      "#C5DEF5",
      "#BFD4F2",
      "#D4C5F9",
    ],
  };

  const [inputFocus, setInputFocus] = useState<Boolean>(false);

  return (
    <Container
      order={selectedMobileEditBtn ? 1 : 0}
      width={selectedMobileEditBtn ? "100%" : "none"}
    >
      <Title
        onClick={() => setSelectedMobileEditBtn(!selectedMobileEditBtn)}
        display={selectedMobileEditBtn ? "none" : "block"}
      >
        Edit
      </Title>

      <EditContainer display={selectedMobileEditBtn ? "block" : "none"}>
        <EditMenu>
          <LabelName>
            <span>Label name</span>
            <Input
              type="text"
              defaultValue="bug"
              name="label[name]"
              data-maxlength="50"
              pattern="^(?!(\.|\.\.)$).*$"
              placeholder="Label name"
              required
            />
          </LabelName>
          <Description>
            <span>Description</span>
            <Input
              type="text"
              defaultValue="Something isn't working"
              name="label[description]"
              maxLength={100}
              placeholder="Description (optional)"
            />
          </Description>
          <ColorBox>
            <span>Color</span>
            <Color>
              <ColorBtn
                onClick={() => {
                  setColor(handleColor());
                }}
                backgroundColor={color}
              >
                <SyncIcon size={16} fill="#fff" />
              </ColorBtn>
              <ColorInput
                type="text"
                defaultValue={`#${color}`}
                value={`#${color}`}
                name="label[color]"
                maxLength={7}
                pattern="#?([a-fA-F0-9]{6})"
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
              />
              <ColorMenu display={inputFocus ? "block" : "none"}>
                <p>Choose from default colors:</p>
                <ColorMenuContainer>
                  {ButtonColor.darkColors.map((item) => (
                    <ColorMenuBtn backgroundColor={item}></ColorMenuBtn>
                  ))}
                </ColorMenuContainer>
                <ColorMenuContainer>
                  {ButtonColor.lightColors.map((item) => (
                    <ColorMenuBtn backgroundColor={item}></ColorMenuBtn>
                  ))}
                </ColorMenuContainer>
              </ColorMenu>
            </Color>
          </ColorBox>
          <CheckBtn>
            <Cancel
              onClick={() => setSelectedMobileEditBtn(!selectedMobileEditBtn)}
            >
              Cancel
            </Cancel>
            <Change>Save changes</Change>
          </CheckBtn>
        </EditMenu>
      </EditContainer>
    </Container>
  );
}
