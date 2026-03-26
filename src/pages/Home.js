import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import Register from './Register';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';
import { useEffect, useState } from 'react';
import { getProjects } from '../api/api';


// Hero Section Component
function Hero() {
  return (
    <div className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="fw-bold">Welcome to UCU Innovation Hub</h1>
        <p className="lead">
          Discover, share, and grow innovative ideas within the university.
        </p>

        <div className="mt-4">
          <Link to="/submit" className="btn btn-light btn-lg me-2">
            Submit Idea
          </Link>

          <Link to="/register" className="btn btn-outline-light btn-lg">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

function Home() {

  // Temporary dummy data (replace with API later)
   const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
      });
  }, []);


  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="container my-5">
        <h2 className="mb-4 fw-bold">Latest Innovations</h2>

        <div className="row">
          {projects.map((project) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;