import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

// Hero Section Component
function Hero() {
  return (
    <div className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="fw-bold">Welcome to UCU Innovation Hub</h1>
        <p className="lead">
          Discover, share, and grow innovative ideas within the university.
        </p>
        <a href="/submit" className="btn btn-light btn-lg mt-3">
          Submit Your Idea
        </a>
      </div>
    </div>
  );
}

function Home() {

  // Temporary dummy data (replace with API later)
  const projects = [
    {
      id: 1,
      title: "Smart Waste Management System",
      description: "A system that improves waste collection and recycling using IoT and data analytics."
    },
    {
      id: 2,
      title: "Campus Food Delivery App",
      description: "An app that allows students to order food from nearby restaurants within campus."
    },
    {
      id: 3,
      title: "Hostel Finder Platform",
      description: "A platform to help students easily locate and book hostels around the university."
    }
  ];

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