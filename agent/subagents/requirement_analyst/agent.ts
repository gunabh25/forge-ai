import { defineAgent } from "eve";

export default defineAgent({
  description:
"Analyze business requirements and generate structured project documentation including functional requirements, non-functional requirements, assumptions, risks, constraints, and engineering tasks.",
  model: "anthropic/claude-sonnet-5",
});
