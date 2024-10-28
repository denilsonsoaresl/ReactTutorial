import { useState, useEffect } from 'react';

export default function ProjectForm({ project, onSubmit }) {
  const [name, setName] = useState(project ? project.name : '');
  const [description, setDescription] = useState(project ? project.description : '');

  useEffect(() => {
    if (project) {
      setName(project.name);
      setDescription(project.description || '');
    }
  }, [project]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ id: project?.id, name, description });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{project ? "Edit Project" : "New Project"}</h2>
      <div>
        <label>Project Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Description</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <button type="submit">{project ? "Save Changes" : "Add Project"}</button>
    </form>
  );
}
