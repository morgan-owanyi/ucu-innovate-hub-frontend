function ProjectCard({ project }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description.substring(0, 100)}...</p>
        <a href={`/projects/${project.id}`} className="btn btn-primary">View More</a>
      </div>
    </div>
  );
}

export default ProjectCard;