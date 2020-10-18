import React from 'react';
import Search from '../search/Search';
import './Header.css';

function Header() {
  return (
  <div  className="Header">
   <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Products Demo</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
<Search></Search>
 <ul className="navbar-nav px-3">
    <li className="nav-item text-nowrap">
      {/* <a className="nav-link" href="#">Sign out</a> */}
    </li>
  </ul>
</header>

 </div>

 );
}

export default Header;
