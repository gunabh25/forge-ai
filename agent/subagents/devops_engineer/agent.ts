import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Design production deployment blueprints, including Docker configurations, CI/CD pipelines, security, and cloud infrastructure.",
  model: "anthropic/claude-sonnet-5",
});
