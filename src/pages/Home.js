import { useEffect, useState } from 'react';
import { getProjects } from '../api/api';
import ProjectCard from '../components/projectcard.js';
import Navbar from '../components/navbar.js';

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="mb-4">Latest Innovations</h1>
        <div className="row">
          {projects.map(p => (
            <div className="col-md-4 mb-4" key={p.id}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;