import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Design comprehensive software testing strategies, including unit, integration, API, performance, load, stress, and end-to-end test scenarios, and produce QA reports.",
  model: "anthropic/claude-sonnet-5",
});
