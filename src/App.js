import React from 'react';
import './App.css';
import Products from './components/products/Products';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (

  <div  className="App">
    <Header></Header>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-3 col-lg-2">
   <Sidebar></Sidebar>
    </div>
   <div className="col-md-9 col-lg-10">
   <main className="ml-sm-auto px-md-4">
     <Products></Products>
       </main>
 
   </div>
  </div>
</div>

 </div>

 );
}

export default App;
