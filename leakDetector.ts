import { isPromptSafe } from "../core/security.js";

export function detectLeak(text: string) {
  return isPromptSafe(text) ? "clean" : "blocked";
}
