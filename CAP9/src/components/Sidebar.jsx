import Project from './Project';

export default function Sidebar({ projects }) {
  return (
    <div className="sidebar">
      <h2>YOUR PROJECTS</h2>
      <button>+ Add Project</button>

      {projects.length > 0 ? (
        projects.map((project) => (
          <Project key={project.id} project={project} />
        ))
      ) : (
        <p>No projects yet</p>
      )}
    </div>
  );
}
