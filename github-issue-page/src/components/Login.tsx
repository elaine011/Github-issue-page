import { useState, useEffect } from "react";
import styled from "styled-components";
import { MarkGithubIcon } from "@primer/octicons-react";

import { supabase } from "../utils/client";

const Header = styled.header`
  background-color: #24292f;
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`;
const SignInBtn = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

function Login() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState();

  useEffect(() => {
    /* when the app loads, check to see if the user is signed in */
    checkUser();
    /* check user on OAuth redirect */
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  }, []);
  async function checkUser() {
    /* if a user is signed in, update local state */
    const user = supabase.auth.user();
    setUser(user);
  }
  async function signInWithGithub() {
    /* authenticate with GitHub */
    await supabase.auth.signIn({
      provider: "github",
    });
  }

  const session = supabase.auth.session();
  // console.log(session.provider_token);

  async function signOut() {
    /* sign the user out */
    await supabase.auth.signOut();
    setUser(null);
  }

  if (user) {
    return (
      <Header>
        <MarkGithubIcon size={32} fill={"#fff"} />
        <SignInBtn onClick={signOut}>Sign out</SignInBtn>
      </Header>
    );
  }
  return (
    <Header>
      <MarkGithubIcon size={32} fill={"#fff"} />
      <SignInBtn onClick={signInWithGithub}>Sign in</SignInBtn>
    </Header>
  );
}

export default Login;
