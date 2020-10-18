import React from 'react';
import './Products.css';

function Products() {
  return (
  <div  className="Products">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Products</h1>
        </div>
    <div className="pt-3 pb-2 mb-3 border-bottom">
  
    
         
          <form className="row">
         
          <div className="form-group col-md-4">
    <label for="departments">Departments</label>
    <select className="form-control" id="departments">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group col-md-4">
    <label for="promotions">Promotions</label>
    <select className="form-control" id="promotions">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="col-md-4 filter">
  <button type="button" className="btn btn-sm btn-primary">Filter</button>
  </div>
     
           
        </form>
        
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Promotion</th>
              <th>Discounted Price</th>
              <th>Active</th>
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
   
 </div>

 );
}

export default Products;
