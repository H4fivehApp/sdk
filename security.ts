export function isPromptSafe(input: string) {
  // placeholder logic
  return !input.toLowerCase().includes("reveal system prompt");
}
