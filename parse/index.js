const express = require("express");
const ParseServer = require("parse-server").ParseServer;
const ParseDashboard = require("parse-dashboard");
require("dotenv").config();

const app = express();

async function startServer() {
  const server = new ParseServer({
    databaseURI: "mongodb://127.0.0.1:27017/ECOM_DevOps_Ticketing",
    cloud: "./cloud/main.js",
    appId: "ECOM_DevOps_Ticketing",
    masterKey: "myMasterKey",
    appName: "ECOM_DevOps_Ticketing",
    fileKey: "optionalFileKey",
    verifyUserEmails: false,
    preventLoginWithUnverifiedEmail: false,
    serverURL: "http://localhost:5000/parse",
    publicServerURL: "http://localhost:5000/parse",
    fileKey: "optionalFileKey",
  });

  const dashboard = new ParseDashboard({
    apps: [
      {
        serverURL: "http://localhost:5000/parse",
        appId: "ECOM_DevOps_Ticketing",
        masterKey: "myMasterKey",
        appName: "ECOM_DevOps_Ticketing",
      },
    ],
    users: [
      {
        user: "admin",
        pass: "admin",
      },
    ],
  });

  await server.start();

  app.use("/parse", server.app);
  app.use("/dashboard", dashboard);

  app.listen(5000, function () {
    console.log("Parse Server running on http://localhost:5000/parse");
  });
}

startServer().catch((error) => {
  console.error("Error starting Parse Server:", error);
});
