import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Write clean, modular, production-ready source code based on a backend implementation blueprint and proposed folder structure.",
  model: "anthropic/claude-sonnet-5",
});
