import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
   const [click, setClick] = useState(false);
   

   const handClick = () => setClick (!click);
   const closeMobileMenu = () => setClick (false);

    return (
        <>
        <nav className='navbar'>
          <div className='navbar-container'>
              <Link to='BRECHOLAND/' className='navbar-logo'>
                  BRECHOLAND <i className='fab fa-typo3'/>
                  </Link>

                      <ul className= {click ? 'nav-manu active' : 'nav-manu'}>
                      <li className='nav-item'>
                      <Link to='/HOME' className='nav-links' onClick={closeMobileMenu}>
                        HOME
                      </Link>
                      </li>

                      <li className='nav-item'>
                      <Link to='SHOP' className='nav-links' onClick={closeMobileMenu}>
                        SHOP
                      </Link>
                      </li>

                      <li className='nav-item'>
                      <Link to='/SING IN' className='nav-links' onClick={closeMobileMenu}>
                        SING IN
                          </Link>
                          </li>
                          

                      </ul>
                     
                      

            </div>
            </nav>   
        </>
    )
}

export default Navbar
