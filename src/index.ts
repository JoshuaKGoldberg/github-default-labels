export interface GitHubDefaultLabel {
	color: string;
	description: string;
	name: string;
}

export const githubDefaultLabels = [
	{
		color: "d73a4a",
		description: "Indicates an unexpected problem or unintended behavior",
		name: "bug",
	},
	{
		color: "0075ca",
		description:
			"Indicates a need for improvements or additions to documentation",
		name: "documentation",
	},
	{
		color: "cfd3d7",
		description: "Indicates similar issues, pull requests, or discussions",
		name: "duplicate",
	},
	{
		color: "a2eeef",
		description: "Indicates new feature requests",
		name: "enhancement",
	},
	{
		color: "7057ff",
		description: "Indicates a good issue for first-time contributors",
		name: "good first issue",
	},
	{
		color: "008672",
		description:
			"Indicates that a maintainer wants help on an issue or pull request",
		name: "help wanted",
	},
	{
		color: "e4e669",
		description:
			"Indicates that an issue, pull request, or discussion is no longer relevant",
		name: "invalid",
	},
	{
		color: "d876e3",
		description:
			"Indicates that an issue, pull request, or discussion needs more information",
		name: "question",
	},
	{
		color: "ffffff",
		description:
			"Indicates that work won't continue on an issue, pull request, or discussion",
		name: "wontfix",
	},
] satisfies GitHubDefaultLabel[];
