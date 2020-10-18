import React from 'react';
import './Sidebar.css';
import * as Icon from 'react-feather';

function Sidebar() {
  return (
  <div  className="Sidebar">
    <nav id="sidebarMenu" className="d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <span className="feather"><Icon.ShoppingCart /></span>
              Products
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
            <span className="feather"><Icon.File /></span>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <span className="feather"><Icon.ShoppingCart /></span>
            
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <span className="feather"><Icon.Users /></span>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <span className="feather"><Icon.BarChart2 /></span>
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <span className="feather"><Icon.Layers /></span>
              Integrations
            </a>
          </li>
        */}
         </ul>
   </div>
    </nav>

 </div>

 );
}

export default Sidebar;
