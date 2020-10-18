import React, { useState } from 'react';
import './Products.css';

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, (page_number) * page_size);
}

function Products() {
    const [ products, setProducts ] = useState([{ "id": "MdsYZcOZsI1AcwGh5a2W", "name": "product6", "price": 60, "departmentId": "ZvPs3SjXoTPwZrbkCgpy", "departmentName": "R/D", "promotionId": "wFQx2qCKE5smIODZsHrU", "promotionCode": "PROMO1", "promoDiscounedPrice": 12, "isPromoActive": true }]);
    const [ departments, setDepartments ] = useState([{ "id": "2CpPHQp8gyx1iI9Q7sPd", "name": "HR" }]);
    const [ promotions, setPromotions ] = useState([{ "id": "YBXYj6hpCqnbw45tNLtX", "code": "PROMO2", "discount": 30, "active": false }]);

    return (
        <div className="Products">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Products</h1>
            </div>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <form className="row">

                    <div className="form-group col-md-4">
                        <label for="departments">Departments</label>
                        <select className="form-control" id="departments">
                            {departments.map((department) => <option key={department.id} value={department.id}>{department.name}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="promotions">Promotions</label>
                        <select className="form-control" id="promotions">
                        {promotions.map((promo) => <option key={promo.id} value={promo.id}>{promo.code}</option>)}
                        
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
                        
                        {products.map((product)=> 
                                 <tr> 
                                    < td > {  product.name  } </td> 
                                    < td > {  product.price  } </td> 
                                    < td > {  product.promotionCode  } </td> 
                                    < td > {  product.promoDiscounedPrice  } $ </td> 
                                    < td > {  `${product.isPromoActive}` } </td> 
                                    </tr>
                                    ) }
                        
                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default Products;
