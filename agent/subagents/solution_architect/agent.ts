import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Design the software architecture, select technologies, design database schemas and REST APIs, and outline scalability decisions based on a requirements document.",
  model: "anthropic/claude-sonnet-5",
});
