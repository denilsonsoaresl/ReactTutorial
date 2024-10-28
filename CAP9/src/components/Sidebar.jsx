import { useState } from 'react';

export default function Sidebar({ projects, onAddProject, onSelectProject }) {
  const [newProjectName, setNewProjectName] = useState('');
  const [showInput, setShowInput] = useState(false);

  function handleAddProject() {
    if (newProjectName.trim()) {
      onAddProject(newProjectName);
      setNewProjectName(''); // Limpar o campo após adicionar
      setShowInput(false); // Esconder o campo de input
    }
  }

  return (
    <div className="sidebar">
      <h2>YOUR PROJECTS</h2>
      {showInput ? (
        <div>
          <input 
            type="text" 
            value={newProjectName} 
            onChange={(e) => setNewProjectName(e.target.value)} 
            placeholder="Project name"
          />
          <button onClick={handleAddProject}>Add</button>
        </div>
      ) : (
        <button onClick={() => setShowInput(true)}>+ Add Project</button>
      )}

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
