import styled from "styled-components";
import { SyncIcon } from "@primer/octicons-react";
import { useContext } from "react";

import { SelectContext } from "../../utils/SelectContext";

type OrderProps = {
  order: number;
  width: string;
};
type DisplayProps = {
  display: string;
};
const Container = styled.div<OrderProps>`
  margin-left: 16px;
  order: ${(props) => props.order};
  width: ${(props) => props.width};
  margin-left: auto;

  @media screen and (max-width: 1011.9px) {
    display: none;
  }
`;
const Title = styled.span<DisplayProps>`
  cursor: pointer;
  display: ${(props) => props.display};

  &:hover {
    text-decoration: underline;
  }
`;
const EditContainer = styled.div<DisplayProps>`
  display: ${(props) => props.display};
`;
const EditMenu = styled.div`
  display: flex;
  color: #24292f;
  margin-top: 8px;
`;
const LabelName = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 20.99999999%;
`;
const Description = styled(LabelName)`
  width: 30.33333332%;
`;
const ColorBox = styled(LabelName)`
  width: 16.66666666%;
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
`;
const Input = styled.input`
  margin-top: 8px;
  background-color: #f6f8fa;
  padding: 5px 12px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
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
`;

export default function Edit({ selectedEditBtn, setSelectedEditBtn }) {
  return (
    <Container
      order={selectedEditBtn ? 1 : 0}
      width={selectedEditBtn ? "100%" : "none"}
    >
      <Title
        onClick={() => setSelectedEditBtn(!selectedEditBtn)}
        display={selectedEditBtn ? "none" : "block"}
      >
        Edit
      </Title>

      <form>
        <EditContainer display={selectedEditBtn ? "block" : "none"}>
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
                <ColorBtn>
                  <SyncIcon size={16} fill="#fff" />
                </ColorBtn>
                <Input
                  type="text"
                  defaultValue="#d73a4a"
                  name="label[color]"
                  maxLength={7}
                  pattern="#?([a-fA-F0-9]{6})"
                />
              </Color>
            </ColorBox>
            <CheckBtn>
              <Cancel onClick={() => setSelectedEditBtn(!selectedEditBtn)}>
                Cancel
              </Cancel>
              <Change>Save changes</Change>
            </CheckBtn>
          </EditMenu>
        </EditContainer>
      </form>
    </Container>
  );
}
