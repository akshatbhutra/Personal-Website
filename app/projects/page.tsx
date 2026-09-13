export const metadata = {
  title: "Projects — Akshat Bhutra",
};

type Project = {
  name: string;
  description: string;
  url?: string;
};

const projects: Project[] = [
  {
    name: "Example Project",
    description:
      "A short description of what this project does and why it exists. Swap this out for your real work.",
    url: "https://github.com/YOUR-USERNAME/example-project",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="font-display font-medium text-3xl mb-8">Projects</h1>
      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.name} className="border-b border-line pb-8">
            <h2 className="font-medium text-lg mb-1">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  className="link-underline text-ink"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h2>
            <p className="text-muted">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
