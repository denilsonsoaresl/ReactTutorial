import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Main from './components/Main.jsx';
import './index.css'; 

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div className="app-container">  {/* Contêiner pai com display flex */}
      <Sidebar projects={projects} />
      <Main projects={projects} />
    </div>
  );
}

export default App;
