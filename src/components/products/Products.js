import React, { useEffect, useState } from 'react';
import productService from '../../api/products-service';
import departmentService from '../../api/departments-service';
import promotionService from '../../api/promotions-service';
import './Products.css';
import ReactPaginate from 'react-paginate';
import productSearchEvent from '../events/product-search-event';


function Products() {
    const [products, setProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [department, setDepartment] = useState(-1);
    const [promotion, setPromotion] = useState(-1);
    const [pagination, setPagination] = useState({ offset: 0, perPage: 5, currentPage: 0, pageCount: 0 });
    
    productSearchEvent
      .on('productSearchCompleted', selectedProductValue => {
      
        const displayedProducts = selectedProductValue ? products.filter(product => product.id == selectedProductValue): products;
        setDisplayedProducts(displayedProducts);
        paginate(displayedProducts);
         
      } );
    
      const paginate = (data) => {
        setDisplayedProducts(data.slice(pagination.offset, pagination.offset + pagination.perPage));
        setPagination({ ...pagination, pageCount: Number(Math.ceil((data.length) / (pagination.perPage))) });

    }
    const loadProducts = () => {
        productService.getProducts()
            .then(res => {
                setProducts(res.data);
                paginate(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        if (products.length > 0) {
            paginate(products);
        }
        else {
            loadProducts();
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
       
        productService.filterProducts(department, promotion)
            .then(res => {
                setProducts([...res.data]);
                paginate(res.data);
            })
            .catch(err => console.log(err));
    };

    const handlePageChange = (e) => {
        const selectedPage = e.selected;
        setPagination({
            ...pagination,
            offset: selectedPage * pagination.perPage,
            currentPage: selectedPage
        });

        loadProducts();
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

                        {displayedProducts.map((product) =>
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
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pagination.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>

        </div>

    );
}

export default Products;
