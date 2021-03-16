"use strict";

const lively = require("lively-cli"), ///
      express = require("express");

const { createLiveReloadHandler } = lively;

const server = express(), ///
      staticRouter = express.static("."),
      liveReloadHandler = createLiveReloadHandler("./example.js");

server.use(staticRouter);

server.get("/live-reload", liveReloadHandler);

server.listen(8888);
