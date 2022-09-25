import styled from "styled-components";
import { SyncIcon } from "@primer/octicons-react";
import { useContext, useState } from "react";

import { SelectContext } from "../../utils/SelectContext";
import api from "../../utils/api";
import ColorMenuBar from "../../components/ColorMenu";

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
  handleColor,
  inputColor,
  setInputColor,
  inputTagName,
  setInputTagName,
  lightOrDark,
  LabelTagColor,
  LableTagName,
  LabelDesc,
}) {
  const [inputFocus, setInputFocus] = useState<Boolean>(false);
  const [inputDes, setInputDes] = useState("");
  const token = JSON.parse(localStorage.getItem("loginToken"));
  const [labels, setLabels] = useContext(SelectContext).labels;
  const updateInfo = {
    owner: "elaine011",
    repo: "test-issue",
    userToken: token,
    name: LableTagName,
    description: inputDes,
    color: inputColor,
    new_name: inputTagName,
  };

  async function updateLabels() {
    await api.updateLabels(updateInfo);
    setSelectedMobileEditBtn(false);
  }

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
              defaultValue={LableTagName}
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
              defaultValue={LabelDesc}
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
                <SyncIcon size={16} fill={lightOrDark(inputColor)} />
              </ColorBtn>
              <ColorInput
                type="text"
                defaultValue={"#" + `${LabelTagColor}`}
                value={"#" + `${inputColor}`}
                name="label[color]"
                maxLength={7}
                pattern="#?([a-fA-F0-9]{6})"
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                onChange={(e) => setInputColor(e.target.value)}
              />
              <ColorMenuBar
                inputFocus={inputFocus}
                setInputColor={setInputColor}
              />
            </Color>
          </ColorBox>
          <CheckBtn>
            <Cancel
              onClick={() => setSelectedMobileEditBtn(!selectedMobileEditBtn)}
            >
              Cancel
            </Cancel>
            <Change onClick={updateLabels}>Save changes</Change>
          </CheckBtn>
        </EditMenu>
      </EditContainer>
    </Container>
  );
}
