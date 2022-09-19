let token;

const api = {
  OAuthHostname: "https://github.com/login/oauth",
  githubHostname: "https://api.github.com",
  async getLoginCode() {
    const response = await fetch(`${this.OAuthHostname}/authorize`);
    return await response.json();
  },
  async getAccessToken(code) {
    const response = await fetch(
      `${this.OAuthHostname}/access_token?client_id=e6aa5b4f42aeefb5b861&client_secret=3655d4e368d66951624fcf01a787bd43fccddbf9&${code}`,
      {
        mode: "no-cors",
        method: "POST",
        Accept: "application/json",
      }
    );
    token = await response.json();
    return await token;
  },
  async accessLogin() {
    const response =
      token ??
      (await fetch(`${this.githubHostname}/user`, {
        Authorization: `Bearer ${token}`,
      }));
    return await response.json();
  },
  async getIssue() {
    const response = await fetch(
      `${this.githubHostname}/repos/elaine011/test-issue/issues/1/labels`
    );
    return await response.json();
  },
};
export default api;
