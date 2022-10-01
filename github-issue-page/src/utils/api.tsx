import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REACT_APP_PASSWORD,
});
const getOctokit = new Octokit();

const api = {
  githubHostname: "https://api.github.com",
  async getListIssues(data) {
    try {
      const response = await getOctokit.request(
        "GET /repos/{owner}/{repo}/issues?per_page={perPage}&page={page}",
        {
          owner: data.owner,
          repo: data.repo,
          state: data?.state,
          assignee: data?.assignee,
          sort: data?.sort,
          created: data?.created,
          mentioned: data?.mentioned,
          labels: data?.label,
          perPage: data?.perPage,
          page: data?.page,
        }
      );
      return response.data;
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
  },
  async getSearch(data) {
    try {
      const response = await getOctokit.request(
        "GET /search/issues?q=repo:{owner}/{repo} {query}",
        {
          owner: data.owner,
          repo: data.repo,
          query: data.query,
        }
      );
      return response.data;
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
  },
  async getLabels() {
    const owner = "elaine011";
    const repo = "test-issue";
    const githubToken = localStorage.getItem("loginToken");
    const response = await fetch(
      `${this.githubHostname}/repos/${owner}/${repo}/labels`,
      {
        headers: new Headers({
          Accept: "application/vnd.github+json",
        }),
      }
    );
    return await response.json();
  },
  async getAssignees(data) {
    const response = await getOctokit.request(
      "GET /repos/{owner}/{repo}/assignees",
      {
        owner: data.owner,
        repo: data.repo,
      }
    );
    return response.data;
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
      auth: process.env.REACT_APP_PASSWORD,
      name: data.labelName,
    });
    console.log(process.env.REACT_APP_PASSWORD);
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
