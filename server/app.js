const express = require("express");

const app = express();

const api = require("./api/api");
const graphql = require("./graphql");

app.use("/api", api);
app.use("/graphql", graphql);

const port = process.env.WAR_MACHINES_PORT || 3000;
app.listen(port, () => console.log(`War machines is running under port ${port}`));
