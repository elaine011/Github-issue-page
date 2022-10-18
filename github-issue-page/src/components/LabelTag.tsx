import styled from "styled-components";

const TagWrap = styled.div`
  width: 24.99999997%;
`;

type TagProps = {
  backgroundColor: string;
  color: string;
};

const Tag = styled.div<TagProps>`
  text-decoration: none;
  background-color: ${(props) => "#" + props.backgroundColor};
  color: ${(props) => props.color};
  padding: 0px 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  border-radius: 2em;
  display: inline-block;
  white-space: nowrap;
`;

export default function LabelTag({
  tagName,
  backgroundColor,
  lightOrDark,
  inputTagName,
}) {
  return (
    <TagWrap>
      <Tag
        backgroundColor={backgroundColor}
        color={lightOrDark(backgroundColor)}
      >
        {inputTagName == "" ? tagName : inputTagName}
      </Tag>
    </TagWrap>
  );
}
