import { Octokit } from "octokit";
const auth = JSON.parse(localStorage.getItem("loginToken")) ?? "";
const userData = JSON.parse(localStorage.getItem("userData")) ?? "";

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
          headers: {
            "if-none-match": "",
          },
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
  async getRepo(data) {
    const res = await getOctokit.request("GET /user/repos", {
      headers: {
        authorization: `Bearer ${data}`,
      },
    });
    return res.data;
  },
  async getSearch(data) {
    try {
      const response = await getOctokit.request(
        "GET /search/issues?q=repo:{owner}/{repo} {query}",
        {
          headers: {
            "if-none-match": "",
          },
          owner: userData.userName,
          repo: userData.repo,
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
  async getLabels(data) {
    const response = await fetch(
      `https://api.github.com/repos/${data.userName}/${data.repo}/labels`,
      {
        headers: new Headers({
          Authorization: `Bearer ${data.token}`,
        }),
      }
    );
    return await response.json();
  },
  async getAssignees(data) {
    const response = await getOctokit.request(
      "GET /repos/{owner}/{repo}/assignees",
      {
        headers: {
          "if-none-match": "",
        },
        owner: data.owner,
        repo: data.repo,
      }
    );
    return response.data;
  },
  async createLabels(data) {
    await getOctokit.request("POST /repos/{owner}/{repo}/labels", {
      headers: {
        "if-none-match": "",
        authorization: `Bearer ${data.userToken}`,
      },
      owner: data.owner,
      repo: data.repo,
      name: data.name,
      description: data.description,
      color: data.color,
    });
  },
  async updateLabels(data) {
    await getOctokit.request("PATCH /repos/{owner}/{repo}/labels/{name}", {
      headers: {
        authorization: `Bearer ${data.userToken}`,
      },
      owner: data.owner,
      repo: data.repo,
      name: data.name,
      new_name: data.new_name,
      description: data.description,
      color: data.color,
    });
  },
  async deleteLabels(data) {
    await getOctokit.request("DELETE /repos/{owner}/{repo}/labels/{name}", {
      headers: {
        authorization: `Bearer ${data.userToken}`,
      },
      owner: data.owner,
      repo: data.repo,
      auth: process.env.REACT_APP_PASSWORD,
      name: data.labelName,
    });
  },
  async getListComments(data) {
    const res = await getOctokit.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}",
      {
        headers: {
          "if-none-match": "",
          authorization: `Bearer ${data.token}`,
        },
        owner: data.owner,
        repo: data.repo,
        issue_number: data.issue_number,
      }
    );
    return res.data;
  },
  async getListCommentsReactions(data) {
    const res = await getOctokit.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
      {
        headers: {
          "if-none-match": "",
          authorization: `Bearer ${data.token}`,
        },
        owner: data.owner,
        repo: data.repo,
        issue_number: data.issue_number,
      }
    );
    return res.data;
  },
  async createissueCommentReactions(data) {
    const res = await getOctokit.request(
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
      {
        headers: {
          authorization: `Bearer ${data.token}`,
        },
        owner: data.owner,
        repo: data.repo,
        issue_number: data.issue_number,
        content: data.reaction,
      }
    );
    return res.data;
  },
  async createListCommentsReactions(data) {
    await getOctokit.request(
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
      {
        headers: {
          authorization: `Bearer ${data.token}`,
        },
        owner: data.owner,
        repo: data.repo,
        comment_id: data.commentId,
        content: data.reaction,
      }
    );
  },
  async createIssue(data) {
    const res = await getOctokit.request("POST /repos/{owner}/{repo}/issues", {
      headers: {
        authorization: `Bearer ${data.token}`,
      },
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
    await getOctokit.request(
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
      {
        headers: {
          "if-none-match": "",
          authorization: `Bearer ${data.token}`,
        },
        owner: data.owner,
        repo: data.repo,
        issue_number: data.issue_number,
        title: data?.title,
        body: data?.body,
        assignees: data?.assignees,
        state: data?.state,
        state_reason: data?.stateReason,
        labels: data?.labels,
      }
    );
  },
  async createComment(data) {
    await getOctokit.request(
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
      {
        headers: {
          "if-none-match": "",
          authorization: `Bearer ${data.token}`,
        },
        owner: data.owner,
        repo: data.repo,
        issue_number: data.issue_number,
        body: data.body,
      }
    );
  },
  async updateComment(data) {
    const res = await getOctokit.request(
      "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}",
      {
        headers: {
          "if-none-match": "",
          authorization: `Bearer ${data.token}`,
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
    const res = await getOctokit.request(
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
      {
        headers: {
          "if-none-match": "",
          authorization: `Bearer ${data.token}`,
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
    const res = await getOctokit.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline?per_page={per_page}",
      {
        headers: {
          "if-none-match": "",
          authorization: `Bearer ${data.token}`,
        },
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
