import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
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

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const Seperate = styled.span`
  margin: 0 4px;
`;
const Repo = styled.span`
  margin-right: 8px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
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
  max-width: 900px;
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
  padding: 0 2px;
  cursor: pointer;

  &:nth-child(2) {
    border-bottom: 2px solid #fd8c73;
  }
  &:hover {
    background-color: rgba(208, 215, 222, 0.32);
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

export default function RepoHeader() {
  const Navigate = useNavigate();

  return (
    <>
      <Container>
        <Header>
          <div>
            <RepoIcon size={16} fill="#57606a" />
          </div>
          <User>elaine011</User>
          <Seperate>/</Seperate>
          <Strong>
            <Repo>test-issue</Repo>
          </Strong>
          <Private>Public</Private>
        </Header>
        <RepoProjectNav>
          <RepoProject>
            <RepoProjectList>
              <RepoProjectLink>
                <CodeIcon size={16} fill="#57606a" />
              </RepoProjectLink>
              Code
            </RepoProjectList>
            <RepoProjectList
              onClick={() => {
                Navigate("/issues");
              }}
            >
              <RepoProjectLink>
                <IssueOpenedIcon size={16} fill="#57606a" />
              </RepoProjectLink>
              Issues
              <IssuesNumber>3</IssuesNumber>
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
        </RepoProjectNav>
      </Container>
    </>
  );
}
