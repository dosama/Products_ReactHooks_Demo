import React ,{useState, useEffect}from 'react';
import productService from '../../api/products-service';
import Autosuggest from 'react-autosuggest';
import './Search.css';
import productSearchEvent from '../events/product-search-event';

function Search() {
    const [suggestions, setSuggestions] = useState([]);
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        if(products.length == 0)
        {
            productService.getProducts()
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
        }
    
    }, [products]);

    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : products.filter(product =>
            product.name.toLowerCase().slice(0, inputLength) === inputValue
        );
      };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);
const onChange = (event, { newValue }) => {
    setValue(newValue);
    console.log(newValue);
    const selectedProduct = products.find((i)=> i.name == newValue);
    console.log(selectedProduct);

    productSearchEvent.productSearchCompletedEvent(selectedProduct?selectedProduct.id:'');

  
  };

const inputProps = {
    placeholder: 'Search',
    value,
    onChange: onChange
  };
 
  return (
  <div  className="Search w-100">
     
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
 

 </div>

 );
}

export default Search;
