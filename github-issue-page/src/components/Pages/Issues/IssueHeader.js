import styled from "styled-components";
import {
  TagIcon,
  MilestoneIcon,
  SearchIcon,
  RepoIcon,
  CodeIcon,
  IssueOpenedIcon,
  GitPullRequestIcon,
  PlayIcon,
  TableIcon,
  BookIcon,
  ShieldIcon,
  GraphIcon,
  GearIcon,
} from "@primer/octicons-react";
import RepoHeader from "../../RepoHeader";

const Container = styled.div`
  background-color: #f6f8fa;
  min-height: 96px;
  padding-top: 16px;
`;
const Header = styled.section`
  display: flex;
  align-items: center;
  height: 32px;
  font-size: 20px;
  padding: 0 32px;
  margin-bottom: 16px;
  color: #0969da;
  line-height: 30px;
  cursor: pointer;
`;
const User = styled.span`
  margin-left: 8px;
`;
const Seperate = styled.span`
  margin: 0 4px;
`;
const Repo = styled.span`
  margin-right: 8px;
`;
const Strong = styled.strong`
  font-weight: 600;
`;
const Private = styled.span`
  border: 1px solid #d0d7de;
  font-size: 12px;
  color: #57606a;
  padding: 0 7px;
  height: 18px;
  border-radius: 2em;
  display: flex;
  align-items: center;
`;
const RepoProject = styled.ul`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 32px;
  font-size: 14px;
  color: #57606a;
  gap: 8px;
  line-height: 1.5;
  overflow-x: auto;
  justify-content: start;
  max-width: 882px;
  position: relative;
`;
const RepoProjectNav = styled.nav`
  width: 100%;
  box-shadow: inset 0 -1px 0 hsla(210, 18%, 87%, 1);
`;
const RepoProjectLink = styled.a`
  padding: 0 8px;
`;
const RepoProjectList = styled.li`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  white-space: nowrap;
  height: 100%;
  align-items: center;

  &:nth-child(2) {
    border-bottom: 2px solid #fd8c73;
  }
`;
const IssuesNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  background-color: rgba(175, 184, 193, 0.2);
  color: #24292f;
  border-radius: 1em;
  min-width: 20px;
  font-size: 12px;
`;
const LabelsContainer = styled.div`
  margin-top: 24px;
  padding: 0 24px;
  display: flex;
  align-items: center;
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

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
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
  margin-left: auto;
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
