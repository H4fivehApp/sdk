import express from "express";
import { env } from "../config/env.js";
import { tokenInfo } from "../core/token.js";

export function boot() {
  const app = express();

  app.get("/", (_, res) => {
    res.json({
      project: tokenInfo()
    });
  });

  app.listen(env.port, () =>
    console.log(`API running on :${env.port}`)
  );
}
