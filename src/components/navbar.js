import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          UCU Innovation Hub
        </Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/submit">Submit</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light ms-2" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
          <Link className="btn btn-outline-light ms-2" to="/register">
               Register
           </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;