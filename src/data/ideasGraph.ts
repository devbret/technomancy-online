export type IdeaNode = {
  id: string;
  label: string;
  description: string;
  url?: string;
  tags: string[];
  type?: "concept" | "resource" | "observation" | "idea";
};

export const ideaNodes: IdeaNode[] = [
  {
    id: "language",
    label: "Language",
    description:
      "A system of symbols that enables compression, coordination, and shared meaning.",
    url: "https://en.wikipedia.org/wiki/Language",
    tags: ["communication", "symbols"],
    type: "concept",
  },
  {
    id: "pkm",
    label: "Personal Knowledge Management",
    description:
      "Practices and tools for collecting, connecting, and revisiting knowledge over time.",
    url: "https://en.wikipedia.org/wiki/Personal_knowledge_management",
    tags: ["writing", "learning", "tools"],
    type: "resource",
  },
];
