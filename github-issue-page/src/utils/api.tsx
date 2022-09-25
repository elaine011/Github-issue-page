import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "",
});
const api = {
  githubHostname: "https://api.github.com",
  async getListIssues() {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = JSON.parse(localStorage.getItem("loginToken"));
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/issues`,
      {
        headers: new Headers({
          Accept: "application/vnd.github+json",
          Authorization: `Bearer `,
        }),
      }
    );
    return await response.json();
  },
  async getLabels() {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = JSON.parse(localStorage.getItem("loginToken"));
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
    await octokit.request("POST /repos/{owner}/{repo}/labels", {
      owner: data.owner,
      repo: data.repo,
      name: data.name,
      description: data.description,
      color: data.color,
    });
  },
  async updateLabels(data) {
    await octokit.request("PATCH /repos/{owner}/{repo}/labels/{name}", {
      owner: data.owner,
      repo: data.repo,
      name: data.name,
      new_name: data.new_name,
      description: data.description,
      color: data.color,
    });
  },
  async deleteLabels(data) {
    await octokit.request("DELETE /repos/{owner}/{repo}/labels/{name}", {
      owner: data.owner,
      repo: data.repo,
      name: data.labelName,
    });
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
