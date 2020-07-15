import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faAddressCard,
  faAddressBook,
  faTasks,
  faHandsHelping,
  faQuestionCircle,
  faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/dyi.png';
import { Link } from 'react-router-dom';
//import { Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark w-100">
      <Link className="navbar-link" to="/">
        <img src={logo} alt="logo..." style={{ width: '150px' }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/"> 
              <FontAwesomeIcon icon={faHome} />
              &nbsp; Home 
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">
              <FontAwesomeIcon icon={faAddressCard} />
              &nbsp; About 
            </Link>
          </li>
          <li className='nav-item'>
						<Link className='nav-link active' to='/Programs'>
							<FontAwesomeIcon icon={faTasks} />
							&nbsp; Programs
						</Link>
					</li>
          <li className='nav-item'>
						<Link className='nav-link active' to='/mentor'>
							<FontAwesomeIcon icon={faHandsHelping} />
							&nbsp; Become a Mentor
						</Link>
            <Link className='nav-link' to='/Mentorform'>
							{/* <FontAwesomeIcon icon={faQuestionCircle} /> */}
							
						</Link>
					</li>
					<li className='nav-item'>
						{/* <Link className='nav-link' to='/Resources'>
							<FontAwesomeIcon icon={faQuestionCircle} />
							&nbsp; Resources
						</Link> */}
					</li>
          <li className="nav-item">
            <Link className="nav-link active" to="/contact">
              <FontAwesomeIcon icon={faAddressBook} />
              &nbsp; Contact
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link active dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
                <FontAwesomeIcon icon={faWindowRestore} />
                &nbsp; Level 2
            </Link>
            <div
              className="dropdown-menu bg-dark"
              aria-labelledby="navbarDropdown">
              <Link className="nav-link" to='/L2LandingPage'>
               L2 Landing Page
              </Link>
              <Link className='nav-link' to='/Resources'>
							{/* <FontAwesomeIcon icon={faQuestionCircle} /> */}
							
						</Link>
              {/* <div className="dropdown-divider"></div> */}
              {/* <Link className="dropdown-item text-white" href="#">
                Videos
              </Link> */}
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
          <Link className="nav-link" to="/login">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit">
              Login
            </button>
          </Link>
          <Link className="nav-link" to="/bookshelf">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit">
            Sign Up
              </button> 
            </Link>
          </form>
      </div>
    </nav>
  );
};

export default Navbar;
