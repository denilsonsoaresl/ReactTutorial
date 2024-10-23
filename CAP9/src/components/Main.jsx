import Project from './Project';

export default function Main({ selectedProject }) {
  return (
    <div className="main-content">
      {selectedProject ? (
        <Project project={selectedProject} />
      ) : (
        <>
          <h1>No Project Selected</h1>
          <p>Select a project or get started with a new one</p>
          <button>Create new project</button>
        </>
      )}
    </div>
  );
}
