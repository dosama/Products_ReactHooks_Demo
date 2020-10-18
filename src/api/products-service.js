import Config from '../config';

let productService = {};
const API =  `${Config.api.URL}/products`;

productService.getProducts = () => {
    return fetch({
      method: 'GET',
      url: API,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  productService.filterProducts = (department,promotion) => {
    return fetch({
      method: 'GET',
      url: `${API}/department/${department}/promotion/${promotion}`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };
  

 export default productService;