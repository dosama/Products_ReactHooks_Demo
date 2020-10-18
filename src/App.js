import React from 'react';
import './App.css';
import * as Icon from 'react-feather';


function App() {
  return (

  <div  className="App">

   <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Products Demo</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
  <ul className="navbar-nav px-3">
    <li className="nav-item text-nowrap">
      {/* <a className="nav-link" href="#">Sign out</a> */}
    </li>
  </ul>
</header>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-3 col-lg-2">
    <nav id="sidebarMenu" className="d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <span className="feather"><Icon.Home /></span>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
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
        </ul>
   </div>
    </nav>

    </div>
   <div className="col-md-9 col-lg-10">
   <main className="ml-sm-auto px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group mr-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>sit</td>
            </tr>
   </tbody>         
        </table>
      </div>
    </main>
 
   </div>
  </div>
</div>

 </div>

 );
}

export default App;
