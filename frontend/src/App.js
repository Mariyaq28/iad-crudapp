import "./App.css";
import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaProjectDiagram } from "react-icons/fa";


const API_URL = "https://iad-crudapp-production-585d.up.railway.app";


function App() {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState("");
    const [error, setError] = useState("");
    const [refreshMessage, setRefreshMessage] = useState(false); // Added missing state

    //fetchProjects
    const fetchProjects = async () => {
    try {
        const storedProjects = localStorage.getItem("projects");

        if (storedProjects) {
            setProjects(JSON.parse(storedProjects));  // Load from Local Storage
        } else {
            setProjects([]);  // If no data found, set empty
        }
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
};

   const addProject = () => {
    if (newProject.trim().length < 3) {
        setError("Project name must be at least 3 characters");
        return;
    }

    const newProjectObj = { id: Date.now(), name: newProject.trim() };  // Unique ID
    const updatedProjects = [...projects, newProjectObj];

    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));  // Save to Local Storage

    setNewProject("");  
    setError("");  
};

const deleteProject = (id) => {
    const updatedProjects = projects.filter((proj) => proj.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));  // Update Local Storage
};


    const refreshProjects = async () => {
        await fetchProjects();
        setError("");   // Removed `await` (not needed)
        setNewProject("");   // Removed `await` (not needed)
        setRefreshMessage(true); // Show refresh message

        // Hide the message after 3 seconds
        setTimeout(() => {
            setRefreshMessage(false);
        }, 3000);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addProject();
        }
    };

useEffect(() => {
    fetchProjects();
}, []);
    
    return (
        <div className="App">
            <header className="App-header">
            <h1>
  <FaProjectDiagram /> CRUD APP
</h1>

                <h2>Total Projects: <span className="count">{projects.length}</span></h2>

                {/* Input text box */}
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter project name..."
                        value={newProject}
                        onChange={(e) => setNewProject(e.target.value)}
                        onKeyDown={handleKeyPress} // Pressing Enter adds project
                        className="project-input"
                    />
                </div>

                {/* Buttons (Add Project & Refresh Projects) */}
                <div className="button-container">
                    <button onClick={addProject} className="add-btn">➕ Add Project</button> 
                    <button onClick={refreshProjects} className="refresh-btn">🔄 Refresh Projects</button>
                </div>

                {error && <p className="error">{error}</p>}
                {refreshMessage && <p className="refresh-message">Projects list refreshed</p>} {/* Added success message */}

                <div className="project-list">
                    {projects.length === 0 ? (
                        <p>No projects found.</p>
                    ) : (
                        projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <span>{project.name}</span>
                                <button onClick={() => deleteProject(project.id)} className="delete-btn">❌</button>
                            </div>
                        ))
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
