import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { searchproduct } from '../actions/productActions';
import { Link } from 'react-router-dom';
import Product from '../components/Product'

function SearchScreen(props) {
    console.log(props.location.search)
    const qty =1;
    const productsearch=useSelector((state)=>state.productsearch);
    const{search}=productsearch;
    const dispatch = useDispatch();
    const Brands=props.location.search ?props.location.search.split("=")[1] : '' ;
    const handleAddToCart = (id) => {
        props.history.push('/cart/'+id+'?qty=' +qty);    
        console.log();   
    };
    console.log(Brands);
    useEffect(()=>{
        dispatch((searchproduct(Brands)));
    
        return()=>{
          //
        }
      },[Brands])
    return (       
            <ul className="products animated wow slideInLeft" data-wow-delay=".5s">
        {search.map((product) => (
            <Product key={product.id} product={product}></Product> 
            ))
        }
            </ul>
       
    )
}

export default SearchScreen
