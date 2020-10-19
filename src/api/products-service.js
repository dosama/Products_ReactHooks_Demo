import Config from '../config';
import axios from 'axios';

let productService = {};
const API =  `${Config.api.URL}products`;

productService.getProducts = () => {
    return axios.get(API);
  };

  productService.filterProducts = (department,promotion) => {
    return axios.get(`${API}/department/${department}/promotion/${promotion}`);
  };
  

 export default productService;