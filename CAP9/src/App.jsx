import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import './index.css'; 
import Principal from './components/Principal.jsx';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function addProject(name) {
    const newProject = {
      id: projects.length + 1,
      name,
      date_of_creation: new Date().toLocaleDateString(),
    };
    setProjects([...projects, newProject]);
  }

  return (
    <div className="app-container">
      <Sidebar 
        projects={projects} 
        onAddProject={addProject} 
        onSelectProject={setSelectedProject}
      />
      <Principal 
        onAddProject={addProject}
        selectedProject={selectedProject}
      />
    </div>
  );
}

export default App;
