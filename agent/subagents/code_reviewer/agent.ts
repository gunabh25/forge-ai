import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Perform comprehensive reviews of generated source code to verify quality, architectural adherence, security, performance, standards, and error handling.",
  model: "anthropic/claude-sonnet-5",
});
