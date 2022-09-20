import styled from "styled-components";
import { MarkGithubIcon } from "@primer/octicons-react";

const Container = styled.div`
  padding: 0 16px;
  margin-top: 40px;
  font-size: 12px;
`;
const FooterContent = styled.div`
  padding-top: 40px;
  padding-bottom: 8px;
  border-top: 1px solid #d0d7de;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1011px) {
    display: flex;
    flex-direction: column;
  }
`;
const Nav = styled.nav`
  width: 60%;
  height: 26px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1011px) {
    width: 80%;
    min-width: 70%;
    display: flex;
  }
`;
const FooterLists = styled.ul`
  display: flex;
  color: #0969da;
  align-items: flex-start;
  width: 85%;
  justify-content: space-between;

  @media screen and (max-width: 1011px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: start;
  }
`;
const FooterList = styled.li`
  @media screen and (max-width: 1011px) {
    flex: 1;
    line-height: 1.5;
  }
`;
const CopyRight = styled.div`
  display: flex;
  align-items: center;
  color: #57606a;
  width: 16.66666666%;

  @media screen and (max-width: 1011px) {
    order: 2;
    line-height: 1.5;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 16px;
  }
`;
const Logo = styled(MarkGithubIcon)`
  margin-right: 8px;
`;

export default function Footer() {
  return (
    <Container>
      <FooterContent>
        <CopyRight>
          <Logo size={24} fill="#6e7781" />
          <span>© 2022 GitHub, Inc.</span>
        </CopyRight>
        <Nav>
          <FooterLists>
            <FooterList>Terms</FooterList>
            <FooterList>Privacy</FooterList>
            <FooterList>Security</FooterList>
            <FooterList>Status</FooterList>
            <FooterList>Docs</FooterList>
            <FooterList>Contact GitHub</FooterList>
            <FooterList>Pricing</FooterList>
            <FooterList>API</FooterList>
            <FooterList>Trining</FooterList>
            <FooterList>Blog</FooterList>
            <FooterList>About</FooterList>
          </FooterLists>
        </Nav>
      </FooterContent>
    </Container>
  );
}
