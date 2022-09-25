import { useContext, useState } from "react";
import styled from "styled-components";
import { SyncIcon } from "@primer/octicons-react";

import { SelectContext } from "../../utils/SelectContext";
import LabelTag from "../../components/LabelTag";
import api from "../../utils/api";

type DisplayProps = {
  display: string;
};
type backgroundColorProps = {
  backgroundColor: string;
};

const Container = styled.div<DisplayProps>`
  padding: 0 24px;
  display: ${(props) => props.display};
`;
const CreateLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 24px;
  padding: 16px;
  border: 1px solid #d0d7de;
  background-color: #f6f8fa;
  border-radius: 6px;
  font-weight: 600;
`;
const EditMenu = styled.div`
  display: flex;
  color: #24292f;
  margin-top: 8px;

  @media screen and (max-width: 767px) {
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

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const Description = styled(LabelName)`
  width: 20.99999999%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const ColorBox = styled(LabelName)`
  width: 16.66666666%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Color = styled.div`
  display: flex;
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
  white-space: nowrap;

  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    margin-left: 0;
  }
`;
const Input = styled.input`
  margin-top: 8px;
  background-color: #f6f8fa;
  padding: 5px 12px;
  border: 1px solid #d0d7de;
  border-radius: 6px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const ColorInput = styled(Input)`
  width: 60%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
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
const Submit = styled(Cancel)`
  background-color: #2da44e;
  color: #fff;
  margin-right: 0px;

  @media screen and (max-width: 767px) {
    order: -1;
    margin-right: 8px;
  }
`;

export default function NewLabel() {
  const [createLabel, setCreateLabel] = useContext(SelectContext).create;
  const token = JSON.parse(localStorage.getItem("loginToken"));
  const [inputTagName, setInputTagName] = useState("");
  const [inputDes, setInputDes] = useState("");
  const [inputColor, setInputColor] = useState(`d73a4a`);
  const [inputFocus, setInputFocus] = useState<Boolean>(false);
  const [labels, setLabels] = useContext(SelectContext).labels;

  const createInfo = {
    owner: "elaine011",
    repo: "test-issue",
    userToken: token,
    name: inputTagName,
    description: inputDes,
    color: inputColor,
  };

  async function getLabels() {
    await api.createLabels(createInfo);
    setCreateLabel(false);
    const data = await api.getLabels();
    setLabels(data);
  }

  const lightOrDark = (bgcolor = "000080") => {
    const r = parseInt(bgcolor.slice(0, 2), 16);
    const g = parseInt(bgcolor.slice(2, 4), 16);
    const b = parseInt(bgcolor.slice(4, 6), 16);
    const hsp = r * 0.3 + g * 0.6 + b * 0.1;
    if (hsp > 127.5) {
      return "black";
    } else {
      return "white";
    }
  };
  const handleColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    while (randomColor.length < 6) randomColor = handleColor();
    return randomColor;
  };

  return (
    <Container display={createLabel ? "block" : "none"}>
      <CreateLabel>
        <LabelTag
          tagName={"Label preview"}
          backgroundColor={inputColor}
          lightOrDark={lightOrDark}
          inputTagName={"Label preview"}
        />

        <EditMenu>
          <LabelName>
            <span>Label name</span>
            <Input
              type="text"
              name="label[name]"
              data-maxlength="50"
              pattern="^(?!(\.|\.\.)$).*$"
              placeholder="Label name"
              onChange={(e) => setInputTagName(e.target.value)}
              required
            />
          </LabelName>
          <Description>
            <span>Description</span>
            <Input
              type="text"
              name="label[description]"
              maxLength={100}
              placeholder="Description (optional)"
              onChange={(e) => setInputDes(e.target.value)}
            />
          </Description>
          <ColorBox>
            <span>Color</span>
            <Color>
              <ColorBtn
                onClick={() => {
                  setInputColor(handleColor());
                }}
                backgroundColor={inputColor}
              >
                <SyncIcon size={16} fill="#fff" />
              </ColorBtn>
              <ColorInput
                type="text"
                defaultValue={`#d73a4a`}
                value={"#" + inputColor}
                name="label[color]"
                maxLength={7}
                pattern="#?([a-fA-F0-9]{6})"
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                onChange={(e) => setInputColor(e.target.value)}
              />
            </Color>
          </ColorBox>
          <CheckBtn>
            <Cancel onClick={() => setCreateLabel(false)}>Cancel</Cancel>
            <Submit onClick={getLabels}>Create label</Submit>
          </CheckBtn>
        </EditMenu>
      </CreateLabel>
    </Container>
  );
}
