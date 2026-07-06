import { defineAgent } from "eve";

export default defineAgent({
  description:
    "Design detailed backend implementation blueprints, folder structures, database models, controller routes, service layers, and auth flows based on an architecture document.",
  model: "anthropic/claude-sonnet-5",
});
