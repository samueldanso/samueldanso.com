import { allProjects } from "content-collections";
import Link from "next/link";

export default function ProjectsPage() {
  // Sort projects by the sort field
  const sortedProjects = allProjects.sort((a, b) => a.sort - b.sort);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="pt-[180px] pb-[90px]">
        <div className="mb-6">
          <Link
            href="/"
            className="text-muted-foreground font-medium text-sm no-underline hover:underline"
          >
            <span className="text-muted-foreground/60">~</span> Home
          </Link>
        </div>
        <h1 className="font-display text-2xl mb-1">Projects</h1>
        <p className="text-muted-foreground">Collection of projects.</p>
      </section>

      {/* List Section */}
      <ul className="list-none space-y-2">
        {sortedProjects.map((project) => (
          <li
            key={project._meta.path}
            className="flex items-center gap-2 group"
          >
            <Link
              href={`/projects/${project._meta.path}`}
              className="text-foreground font-medium no-underline overflow-hidden text-ellipsis whitespace-nowrap flex-shrink-[1] transition-all duration-200 group-hover:pl-1"
            >
              {project.title}
            </Link>
            <div className="min-w-[20px] flex-grow border-b border-dashed border-border transition-colors duration-200 group-hover:border-muted-foreground/30 h-[1px]" />
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-muted-foreground/60 text-xs font-normal flex-shrink-0 whitespace-nowrap">
                {project.status}
              </span>
            </div>
          </li>
        ))}

        {sortedProjects.length === 0 && (
          <li className="text-center py-12 text-muted-foreground">
            <p>No projects yet. Check back soon!</p>
          </li>
        )}
      </ul>
    </div>
  );
}
