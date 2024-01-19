import React, { useState } from 'react';
import illustration from '../assets/illustration.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { tabTitle } from '../helper';

function Home(props) {
  tabTitle("Todo App")

  const [activeLink, setActiveLink] = useState('login');
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    navigate(link === 'login' ? '/login' : '/register');
  };

  return (
    <div className='container-fluid h-100'>
      <div className="row h-100">
        <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center bg-primary text-white flex-column">

          <h1 className='display-5 title text-uppercase text-center'>An App to <br /> make your life<br />
            <span className='display-1'>easy</span>
          </h1>

          <img className='img-fluid mt-3'src={illustration} alt="illustration"/>
        </div>
        <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center">
          <div className="card auth-card">
            <div className="card-header bg-transparent border-0 d-flex text-center p-0">
              <Link
                className={`w-50 py-3 ${activeLink === 'login' ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                to="/login"
                onClick={() => handleLinkClick('login')}
              >
                Login
              </Link>
              <Link
                className={`w-50 py-3 ${activeLink === 'register' ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                to="/register"
                onClick={() => handleLinkClick('register')}
              >
                Register
              </Link>
            </div>

            <div className="card-body">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
