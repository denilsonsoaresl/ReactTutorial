import Project from './Project';
import ProjectForm from './ProjectForm';
import noProjectImage from '../assets/no-projects.png';

export default function Principal({ view, setView, selectedProject, onAddProject, onEditProject }) {
  return (
    <div className="main-content">
      {view === "home" && (
        <>
          {/*adicionar imagem aqui*/}
          <img src={noProjectImage} alt="No project selected" style={{ width: '60px', marginBottom: '20px' }} />
          <h1>No Project Selected</h1>
          <p>Select a project or get started with a new one</p>
          <button onClick={() => setView("create")}>Create new project</button>
        </>
      )}

      {view === "create" && (
        <ProjectForm 
          onSubmit={(projectDetails) => {
            onAddProject(projectDetails);
            setView("view");
          }}
        />
      )}

      {view === "edit" && selectedProject && (
        <ProjectForm 
          project={selectedProject}
          onSubmit={(updatedProject) => {
            onEditProject(updatedProject);
            setView("view");
          }}
        />
      )}

      {view === "view" && selectedProject && (
        <>
          <Project project={selectedProject} />
          <button onClick={() => setView("edit")}>Edit Project</button>
        </>
      )}
    </div>
  );
}
