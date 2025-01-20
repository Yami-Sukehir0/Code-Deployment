require("dotenv").config(); // it is the environment file which determines the port from which files are listened
const express = require("express"); //imports all of the dependencies available in the express package
const app = express(); //stores the function in the variable to use whenever required
const port = 3000; // defining a port number of our choice .

const githubdata = {
  login: "Yami-Sukehir0",
  id: 123927382,
  node_id: "U_kgDOB2L7Vg",
  avatar_url: "https://avatars.githubusercontent.com/u/123927382?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Yami-Sukehir0",
  html_url: "https://github.com/Yami-Sukehir0",
  followers_url: "https://api.github.com/users/Yami-Sukehir0/followers",
  following_url:
    "https://api.github.com/users/Yami-Sukehir0/following{/other_user}",
  gists_url: "https://api.github.com/users/Yami-Sukehir0/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Yami-Sukehir0/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Yami-Sukehir0/subscriptions",
  organizations_url: "https://api.github.com/users/Yami-Sukehir0/orgs",
  repos_url: "https://api.github.com/users/Yami-Sukehir0/repos",
  events_url: "https://api.github.com/users/Yami-Sukehir0/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Yami-Sukehir0/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 1,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-01-30T06:22:00Z",
  updated_at: "2025-01-19T16:15:12Z",
};
// using app variable to initialize a get request to the server
app.get("/", (req, res) => {
  //listen from the home route(/) .
  res.send("Hello World!"); // return a response the request via res keyword
});

app.get("/instagram", (req, res) => {
  res.send("ziya_nissar");
});

app.get("/login", (req, res) => {
  res.send("This is the log");
});
app.get("/github", (req, res) => {
  res.json(githubdata);
});
// app is used to make it listen on the port
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
