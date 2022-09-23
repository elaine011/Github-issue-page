import styled from "styled-components";

const TagWrap = styled.div`
  width: 24.99999997%;
`;

type TagProps = {
  bac: string;
};

const Tag = styled.a<TagProps>`
  text-decoration: none;
  background-color: ${(props) => "#" + props.bac};
  color: rgb(255, 255, 255);
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  border-radius: 2em;
`;

export default function LabelTag({ tagName, backgroundColor }) {
  return (
    <TagWrap>
      <Tag href="#/" bac={backgroundColor}>
        {tagName}
      </Tag>
    </TagWrap>
  );
}
