import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Review system architecture, backend implementation blueprints, generated source code, and deployment blueprints from a security perspective to produce security assessment reports.",
  model: "anthropic/claude-sonnet-5",
});
