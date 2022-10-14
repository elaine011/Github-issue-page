import { Octokit } from "octokit";
const auth = JSON.parse(localStorage.getItem("loginToken")) ?? "";

const octokit = new Octokit({
  auth: auth,
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
          owner: "elaine011",
          repo: "test-issue",
          query: data,
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
  },
  async getListComments(data) {
    const res = await octokit.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}",
      {
        owner: data.owner,
        repo: data.repo,
        issue_number: data.issue_number,
      }
    );
    return res.data;
  },
  async createIssue(data) {
    const res = await octokit.request("POST /repos/{owner}/{repo}/issues", {
      owner: data.owner,
      repo: data.repo,
      title: data.title,
      body: data.body,
      assignees: data?.assignees,
      labels: data?.labels,
    });
    return res;
  },
  async updateIssue(data) {
    await octokit.request("PATCH /repos/{owner}/{repo}/issues/{issue_number}", {
      headers: {
        "if-none-match": "",
      },
      owner: data.owner,
      repo: data.repo,
      issue_number: data.issue_number,
      title: data?.title,
      body: data?.body,
      assignees: data?.assignees,
      state: data?.state,
      labels: data?.labels,
    });
  },
  async createComment(data) {
    await octokit.request(
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
      {
        headers: {
          "if-none-match": "",
        },
        owner: data.owner,
        repo: data.repo,
        issue_number: data.issue_number,
        body: data.body,
      }
    );
  },
  async updateComment(data) {
    const res = await octokit.request(
      "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}",
      {
        headers: {
          "if-none-match": "",
        },
        owner: data.owner,
        repo: data.repo,
        comment_id: data.commentId,
        body: data.body,
      }
    );
    return res.data;
  },
  async deleteComment(data) {
    const res = await octokit.request(
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
      {
        headers: {
          "if-none-match": "",
        },
        owner: data.owner,
        repo: data.repo,
        comment_id: data.commentId,
        body: data.body,
      }
    );
    return res.data;
  },
  async getTimeline(data) {
    const res = await octokit.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline?per_page={per_page}",
      {
        owner: data.owner,
        repo: data.repo,
        issue_number: data.issue_number,
        per_page: 100,
      }
    );
    return res.data;
  },
};
export default api;
