import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import db from "../Database";
import "./index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as client from "../Login/client";
import { search } from "../Header/client";
function Header() {
  const { observationId } = useParams();
  const observation = db.observations.find(
    (obs) => obs.id === parseInt(observationId)
  );
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const signout = async () => {
    try {
      await client.signout();
      navigate("/Login");
    } catch (err) {
      console.error(err);
      alert("Failed to sign out.");
    }
  };
  const { id } = useParams();

  const findUserById = async (id) => {
    console.log("id :", id);
    const user = await client.findUserById(id);
    console.log("user:", user);
    setAccount(user);
  };
  useEffect(() => {
    // Check if user information is stored in local storage
    const storedAccount = localStorage.getItem("current_user");
    if (storedAccount) {
      setAccount(JSON.parse(storedAccount));
    }
  }, []);

  const [query, setQuery] = useState("");
  useEffect(() => {
    //search(observation.common_name).then((results) => setQuery(results));
  }, []);

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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate("/Results/" + query);
                }
              }}
            />
            <button
              className="btn btn-outline-light"
              type="button"
              onClick={() => {
                navigate("/Results/" + query);
              }}
            >
              <AiOutlineSearch />
            </button>
          </form>

          <ul className="navbar-nav nav-link ms-2 mb-2 mb-lg-0 ">
            {account ? (
              <li className="nav-item">
                <button
                  className="btn btn-outline-light nav-link"
                  onClick={signout}
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <li className="nav-item remove-link">
                <Link className="nav-link" to={`/Login`}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
