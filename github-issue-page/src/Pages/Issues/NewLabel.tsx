import { useContext } from "react";
import styled from "styled-components";
import { SyncIcon } from "@primer/octicons-react";

import { SelectContext } from "../../utils/SelectContext";
import LabelTag from "../../components/LabelTag";

type DisplayProps = {
  display: string;
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
const ColorBtn = styled.button`
  padding: 0 7px;
  border: none;
  border-radius: 6px;
  background-color: #d73a4a;
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
  background-color: #94d3a2;
  color: #fff;
  margin-right: 0px;

  @media screen and (max-width: 767px) {
    order: -1;
    margin-right: 8px;
  }
`;

export default function NewLabel() {
  const [createLabel, setCreateLabel] = useContext(SelectContext).create;
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

  return (
    <Container display={createLabel ? "block" : "none"}>
      <CreateLabel>
        <LabelTag
          tagName={"Label preview"}
          backgroundColor={"rgb(215, 58, 74)"}
          lightOrDark={lightOrDark}
          inputTagName={"Label preview"}
        />
        <form>
          <EditMenu>
            <LabelName>
              <span>Label name</span>
              <Input
                type="text"
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
                name="label[description]"
                maxLength={100}
                placeholder="Description (optional)"
              />
            </Description>
            <ColorBox>
              <span>Color</span>
              <Color>
                <ColorBtn>
                  <SyncIcon size={16} fill="#fff" />
                </ColorBtn>
                <ColorInput
                  type="text"
                  defaultValue="#d73a4a"
                  name="label[color]"
                  maxLength={7}
                  pattern="#?([a-fA-F0-9]{6})"
                />
              </Color>
            </ColorBox>
            <CheckBtn>
              <Cancel onClick={() => setCreateLabel(!createLabel)}>
                Cancel
              </Cancel>
              <Submit disabled>Create label</Submit>
            </CheckBtn>
          </EditMenu>
        </form>
      </CreateLabel>
    </Container>
  );
}
