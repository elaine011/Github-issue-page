let token;

const api = {
  OAuthHostname: "https://github.com/login/oauth",
  githubHostname: "https://api.github.com",
  async getLoginCode() {
    const response = await fetch(`${this.OAuthHostname}/authorize`);
    return await response.json();
  },
  async getAccessToken(code) {
    const client_id = "e6aa5b4f42aeefb5b861";
    const client_secret = "3655d4e368d66951624fcf01a787bd43fccddbf9";
    const response = await fetch(
      `${this.OAuthHostname}/access_token?client_id=${client_id}&client_secret=${client_secret}&${code}`,
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
  async getListIssues() {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/issues`,
      {
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
      }
    );
    return await response.json();
  },
  async getLabels() {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/labels`,
      {
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
      }
    );
    return await response.json();
  },
  async createLabels(data) {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/labels`,
      {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
        method: "POST",
      }
    );
    return await response.json();
  },
  async updateLabels(data, labelName) {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/labels/${labelName}`,
      {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
        method: "PATCH",
      }
    );
    return await response.json();
  },
  async deleteLabels(data, labelName) {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/labels/${labelName}`,
      {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
        method: "DELETE",
      }
    );
    return await response.json();
  },
  async getFilters(filters) {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/issues?${filters}=${owner}`,
      {
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
        method: "GET",
      }
    );
    return await response.json();
  },
  async getSort(sort, direction) {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/issues?sort=${sort}-${direction}`,
      {
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
        method: "GET",
      }
    );
    return await response.json();
  },
  async getAnIssues(issue_number) {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/issues/${issue_number}`,
      {
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
      }
    );
    return await response.json();
  },
  async getListComments() {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/issues/comments`,
      {
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
      }
    );
    return await response.json();
  },
  async createIssue(data) {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/issues/`,
      {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
        method: "POST",
      }
    );
    return await response.json();
  },
  async createComment(data, issue_number) {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/issues/${issue_number}/comments`,
      {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
        method: "POST",
      }
    );
    return await response.json();
  },
  async updateComment(data, comment_id) {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = "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";
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/issues/comments/${comment_id}`,
      {
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubToken}`,
        }),
        method: "PATCH",
      }
    );
    return await response.json();
  },
};
export default api;
