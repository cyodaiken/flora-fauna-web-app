import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
// import { BsFillPersonFill } from "react-icons/bs";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg wd-header">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="Images/myEcologist.svg" height="27" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler wd-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <RxHamburgerMenu />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Explore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Community</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Taxa Info</a></li>
                                <li><a className="dropdown-item" href="#">Places</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Help</a></li>
                            </ul>
                        </li>
                        {/* 
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <BsFillPersonFill /> 
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Login</a></li>
                                <li><a className="dropdown-item" href="#">Sign Up</a></li>
                            </ul>
                        </li> */}

                    </ul>

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit"><AiOutlineSearch /></button>
                    </form>





                    {/* <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <BsFillPersonFill />
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Login</a></li>
                                <li><a className="dropdown-item" href="#">Sign Up</a></li>
                            </ul>
                        </li>
                    </ul> */}

                    <ul className="navbar-nav ms-2 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Login</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );

}
export default Header;