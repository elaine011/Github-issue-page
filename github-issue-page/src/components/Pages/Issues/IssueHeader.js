import styled from "styled-components";
import { TagIcon, MilestoneIcon, SearchIcon } from "@primer/octicons-react";
import RepoHeader from "../../RepoHeader";

const LabelsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 24px;
  padding: 0 24px;
  position: relative;
`;
const LabelsBtn = styled.a`
  display: flex;
  text-decoration: none;
  color: #24292f;
  justify-content: center;
  align-items: center;
  padding: 5px 16px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 1px solid #0969da;
  background-color: #0969da;
  color: #fff;
`;
const MilestonesBtn = styled.a`
  display: flex;
  text-decoration: none;
  color: #24292f;
  justify-content: center;
  align-items: center;
  padding: 5px 16px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid #d0d7de;
  border-left: none;
`;
const LabelNav = styled.nav`
  display: flex;
  min-width: 215px;
  line-height: 20px;
  font-weight: 500;
  font-size: 14px;
`;
const LabelsText = styled.span`
  margin-left: 3px;
`;
const LabelSearch = styled.input`
  width: 320px;
  height: 30px;
  padding: 5px 12px 5px 32px;
  color: #57606a;
  background-color: #f6f8fa;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
`;
const SearchBar = styled.div`
  position: relative;
  margin-left: 8px;

  @media screen and (max-width: 767px) {
    margin-top: 16px;
    margin-left: 0;
  }
`;
const Search = styled(SearchIcon)`
  position: absolute;
  top: 9px;
  left: 8px;
`;
const LabelandSearch = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const NewLabelBtn = styled.button`
  background-color: #2da44e;
  color: #fff;
  height: 30px;
  border: 1px solid rgba(27, 31, 36, 0.15);
  border-radius: 6px;
  padding: 5px 16px;
  position: absolute;
  right: 24px;
  margin-right: auto;
  font-size: 14px;
  box-shadow: 0 1px 0 rgba(27, 31, 36, 0.1);
  cursor: pointer;
`;

export default function IssueHeader() {
  return (
    <>
      <RepoHeader />
      <LabelsContainer>
        <LabelandSearch>
          <LabelNav>
            <LabelsBtn href="#/">
              <TagIcon size={16} />
              <LabelsText>Labels</LabelsText>
            </LabelsBtn>
            <MilestonesBtn href="#/">
              <MilestoneIcon size={16} />
              <LabelsText>Milestones</LabelsText>
            </MilestonesBtn>
          </LabelNav>
          <SearchBar>
            <Search size={16} fill="#57606a" />
            <LabelSearch type="text" placeholder="Search all labels" />
          </SearchBar>
        </LabelandSearch>
        <NewLabelBtn>New label</NewLabelBtn>
      </LabelsContainer>
    </>
  );
}
