import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/Header.css';

const Header = ({setIsModalOpen}) => {
  let navigate  = useNavigate();
  const handleOnClick = () => {
    navigate('/signin')
  };

  return (
    <div className="header">
      <div className="right-items">
        <div>
          <a href="https://www.google.cn/imghp?hl=en&ogbl" target="_top" className="first-link">
            Image 
          </a>
        </div>
        <div>
          <span>
            <div className="icon-wrapper">
              <a className="primary" aria-label="Google apps" aria-expanded="false" role="button" tabIndex="0" onClick={() => setIsModalOpen(prev => !prev)}>
                <svg focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
              </a>
            </div>
          </span>
          <a className="signIn" onClick={handleOnClick} target="_top">Sign in</a>
        </div>
      </div>
    </div>
  )
}

export default Header;
