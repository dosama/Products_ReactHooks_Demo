import React, { useEffect, useState } from 'react';
import prouctService from '../../api/products-service';
import departmentService from '../../api/departments-service';
import promotionService from '../../api/promotions-service';
import './Products.css';
import productService from '../../api/products-service';

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, (page_number) * page_size);
}

function Products() {
    const [products, setProducts] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [department, setDepartment] = useState(-1);
    const [promotion, setPromotion] = useState(-1);
    useEffect(() => {
        if(!products)
        {
            prouctService.getProducts()
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
        }
    }, [products]);

    useEffect(() => {

        departmentService.getDepartments()
            .then(res => setDepartments(res.data))
            .catch(err => console.log(err));

    }, [departments]);

    useEffect(() => {

        promotionService.getPromotions()
            .then(res => setPromotions(res.data))
            .catch(err => console.log(err));

    }, [promotions]);

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    };
    const handlePromotionChange = (e) => {
        setPromotion(e.target.value);
    };
    
    const applyFilter = () => {
            prouctService.filterProducts(department,promotion)
                .then(res => setProducts([...res.data]))
                .catch(err => console.log(err));
        };
    return (
        <div className="Products">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Products</h1>
            </div>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <form className="row">

                    <div className="form-group col-md-4">
                        <label htmlFor="departments">Departments</label>
                        <select className="form-control" id="departments"
                            value={department}
                            onChange={handleDepartmentChange}  >
                            <option key='0' value='-1' ></option>
                            {departments.map((department) => <option key={department.id} value={department.id}>{department.name}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="promotions">Promotions</label>
                        <select className="form-control" id="promotions" value={promotion}
                            onChange={handlePromotionChange} >
                            <option key='0' value='-1' ></option>
                            {promotions.map((promo) => <option key={promo.id} value={promo.id}>{promo.code}</option>)}

                        </select>
                    </div>
                    <div className="col-md-4 filter">
                        <button type="button" className="btn btn-sm btn-primary" onClick={applyFilter}>Filter</button>
                    </div>


                </form>

            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Department</th>
                            <th>Promotion</th>
                            <th>Discount</th>
                            <th>Discounted Price</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map((product) =>
                            <tr key={product.id}>
                                < td > {product.name} </td>
                                < td > {product.price} </td>
                                < td > {product.departmentName} </td>
                                < td > {product.promotionCode} </td>
                                < td >  {product.promotionDiscount > 0 ? `${product.promotionDiscount} %` : ''}   </td>
                                < td > {product.promoDiscounedPrice > 0 ? `${product.promoDiscounedPrice} $` : ''}  </td>
                                < td > {product.isPromoActive == null ? '' : product.isPromoActive.toString()} </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default Products;
