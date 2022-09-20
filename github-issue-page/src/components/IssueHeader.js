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

const Container = styled.div`
  background-color: #f6f8fa;
  min-height: 96px;
  padding-top: 16px;
`;
const Header = styled.section`
  display: flex;
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
  box-shadow: inset 0 -1px 0 hsla(210, 18%, 87%, 1);
  overflow-x: auto;
  justify-content: start;
  max-width: 882px;
`;
const RepoProjectLink = styled.a`
  padding: 0 8px;
`;
const RepoProjectList = styled.li`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  white-space: nowrap;
`;

export default function IssueHeader() {
  return (
    <>
      <Container>
        <Header>
          <div>
            <RepoIcon size={16} fill="#57606a" />
          </div>
          <User>elaine011</User>
          <Seperate>/</Seperate>
          <strong>
            <Repo>github-issue-page</Repo>
          </strong>
          <Private>Public</Private>
        </Header>
        <nav>
          <RepoProject>
            <RepoProjectList>
              <RepoProjectLink>
                <CodeIcon size={16} fill="#57606a" />
              </RepoProjectLink>
              Code
            </RepoProjectList>
            <RepoProjectList>
              <RepoProjectLink>
                <IssueOpenedIcon size={16} fill="#57606a" />
              </RepoProjectLink>
              Issues
              <span>3</span>
            </RepoProjectList>
            <RepoProjectList>
              <RepoProjectLink>
                <GitPullRequestIcon size={16} fill="#57606a" />
              </RepoProjectLink>
              Pull requests
            </RepoProjectList>
            <RepoProjectList>
              <RepoProjectLink>
                <PlayIcon size={16} fill="#57606a" />
              </RepoProjectLink>
              Actions
            </RepoProjectList>
            <RepoProjectList>
              <RepoProjectLink>
                <TableIcon size={16} fill="#57606a" />
              </RepoProjectLink>
              Projects
            </RepoProjectList>
            <RepoProjectList>
              <RepoProjectLink>
                <BookIcon size={16} fill="#57606a" />
              </RepoProjectLink>
              Wiki
            </RepoProjectList>
            <RepoProjectList>
              <RepoProjectLink>
                <ShieldIcon size={16} fill="#57606a" />
              </RepoProjectLink>
              Security
            </RepoProjectList>
            <RepoProjectList>
              <RepoProjectLink>
                <GraphIcon size={16} fill="#57606a" />
              </RepoProjectLink>
              Insights
            </RepoProjectList>
            <RepoProjectList>
              <RepoProjectLink>
                <GearIcon size={16} fill="#57606a" />
              </RepoProjectLink>
              Settings
            </RepoProjectList>
          </RepoProject>
        </nav>
      </Container>
      <div>
        <div>
          <nav>
            <a href="#/">
              <TagIcon size={16} />
            </a>
            <a href="#/">
              <MilestoneIcon size={16} />
            </a>
          </nav>
          <div>
            <SearchIcon size={16} />
            <input></input>
          </div>
          <button>New label</button>
        </div>
      </div>
    </>
  );
}