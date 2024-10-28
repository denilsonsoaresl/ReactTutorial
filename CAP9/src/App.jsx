import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Principal from './components/Principal.jsx';
import './index.css'; 

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [view, setView] = useState("home"); // "home", "create", "edit", "view"

  function addProject(projectDetails) {
    const newProject = {
      id: projects.length + 1,
      ...projectDetails,
      date_of_creation: new Date().toLocaleDateString(),
    };
    setProjects([...projects, newProject]);
    setSelectedProject(newProject);
    setView("view");
  }

  function selectProject(project) {
    setSelectedProject(project);
    setView("view");
  }

  function handleEditProject(updatedProject) {
    setProjects(projects.map(proj => proj.id === updatedProject.id ? updatedProject : proj));
    setSelectedProject(updatedProject);
    setView("view");
  }

  function handleAddProjectClick() {
    setSelectedProject(null);
    setView("create");
  }
  function handleHome() {
    setSelectedProject(null);
    setView("home");
  }

  return (
    <div className="app-container">
      <Sidebar 
        projects={projects} 
        onSelectProject={selectProject}
        onAddProjectClick={handleAddProjectClick}
        onHome={handleHome}
      />
      <Principal 
        view={view}
        setView={setView}
        selectedProject={selectedProject}
        onAddProject={addProject}
        onEditProject={handleEditProject}
      />
    </div>
  );
}

export default App;
