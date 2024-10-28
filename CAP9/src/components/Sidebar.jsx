export default function Sidebar({ projects, onSelectProject, onAddProjectClick, onHome }) {
  return (
    <div className="sidebar">
      <h2>YOUR PROJECTS</h2>

      <button onClick={onHome}>Home</button>
      <button onClick={onAddProjectClick}>+ Add Project</button>

      {projects.length > 0 ? (
        projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => onSelectProject(project)}
          >
            {project.name}
          </div>
        ))
      ) : (
        <p>No projects yet</p>
      )}
    </div>
  );
}