import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav>
        <Link to="/">Home</Link> | <Link to="/signup">signup</Link> |
        <Link to="/">Home</Link> | <Link to="/login ">login</Link> |
        <Link to="/">Home</Link> |{" "}
        <Link to="/ingredients new ">ingredients new</Link> |
        <Link to="/">Home</Link> | <Link to="/login ">login</Link> |
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
