const express = require("express");

const app = express();

const api = require("./api/api");

app.use("/api", api);

const port = process.env.WAR_MACHINES_PORT || 3000;
app.listen(port, () => console.log(`War machines is running under port ${port}`));
