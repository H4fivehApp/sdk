import { env } from "../config/env.js";

export function tokenInfo() {
  return {
    name: env.token,
    purpose: "Backs ZeroLeaks"
  };
}
