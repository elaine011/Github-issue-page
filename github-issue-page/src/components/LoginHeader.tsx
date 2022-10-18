import { useState, useEffect } from "react";
import styled from "styled-components";
import { MarkGithubIcon } from "@primer/octicons-react";

import { supabase } from "../utils/client";
import { useNavigate } from "react-router-dom";

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

export default function LoginHeader({ userData, setUserData, setToken }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    const token = supabase.auth.session();

    setUser(user);
    setToken(token?.provider_token);
    setUserData({
      ...userData,
      userName: user?.user_metadata.user_name,
      token: token?.provider_token,
    });
  }

  async function signInWithGithub() {
    /* authenticate with GitHub */

    await supabase.auth.signIn(
      {
        provider: "github",
      },
      {
        scopes: "repo gist notifications",
      }
    );
    supabase.auth.session();
  }

  const testuser = JSON.parse(localStorage.getItem("supabase.auth.token"));

  if (testuser) {
    const token = testuser.currentSession.provider_token;
    window.localStorage.setItem(
      "loginToken",
      JSON.stringify(testuser.currentSession.provider_token)
    );
  }

  async function signOut() {
    /* sign the user out */
    await supabase.auth.signOut();
    setUser(null);
  }

  if (user) {
    return (
      <Header>
        <MarkGithubIcon size={32} fill={"#fff"} />
        <SignInBtn
          onClick={() => {
            signOut();
            navigate("/");
            setToken();
            setUserData({});
          }}
        >
          Sign out
        </SignInBtn>
      </Header>
    );
  }
  return (
    <Header>
      <MarkGithubIcon size={32} fill={"#fff"} />
      <SignInBtn
        onClick={() => {
          signInWithGithub();
        }}
      >
        Sign in
      </SignInBtn>
    </Header>
  );
}
