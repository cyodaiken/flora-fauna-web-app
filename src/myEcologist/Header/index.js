import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg wd-header">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="Images/myEcologist.svg"
            height="27"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler wd-icon"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <RxHamburgerMenu />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Explore">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Community">
                Community
              </a>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              <AiOutlineSearch />
            </button>
          </form>

          <ul className="navbar-nav  nav-link ms-2 mb-2 mb-lg-0 ">
            <li className="nav-item remove-link">
              <Link className="nav-link" to={`/Login`}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
