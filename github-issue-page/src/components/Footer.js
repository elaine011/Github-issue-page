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
  width: 64%;
  height: 26px;
`;
const FooterLists = styled.ul`
  display: flex;
  color: #0969da;
  align-items: center;
  justify-content: space-between;
`;
const CopyRight = styled.div`
  display: flex;
  align-items: center;
  color: #57606a;
  width: 16.66666666%;

  @media screen and (max-width: 1011px) {
    order: 2;
    line-height: 1.5;
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
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
            <li>Status</li>
            <li>Docs</li>
            <li>Contact GitHub</li>
            <li>Pricing</li>
            <li>API</li>
            <li>Trining</li>
            <li>Blog</li>
            <li>About</li>
          </FooterLists>
        </Nav>
      </FooterContent>
    </Container>
  );
}
