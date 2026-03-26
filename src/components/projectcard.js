function ProjectCard({ project }) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-bold">{project.title}</h5>
        <p className="card-text text-muted">
          {project.description.substring(0, 100)}...
        </p>
      </div>
      <div className="card-footer bg-white border-0">
        <button className="btn btn-outline-primary w-100">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;