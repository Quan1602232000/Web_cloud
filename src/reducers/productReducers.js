
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_COUNT_REQUEST,
    PRODUCT_COUNT_SUCCESS,
    PRODUCT_COUNT_FAIL,
    PRODUCT_SEARCH_REQUEST,
    PRODUCT_SEARCH_SUCCESS,
    PRODUCT_SEARCH_FAIL
} from '../constants/productConstants';
function productListReducer(state = { products: []}, action) {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] };
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function productDetailsReducer(state = { product: [] }, action) {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function productcountreducer(state ={count: 0}, action){
    switch(action.type){
      case PRODUCT_COUNT_REQUEST:
        return{loading:true};
      case PRODUCT_COUNT_SUCCESS:
        return{loading: false, count:action.payload};
      case PRODUCT_COUNT_FAIL:
        return{loading:false,error:action.payload};
      default:
        return state;
    }
  }
  function productsearchreducer(state ={search: []}, action){
    switch(action.type){
      case PRODUCT_SEARCH_REQUEST:
        return{loading:true ,search: []};
      case PRODUCT_SEARCH_SUCCESS:
        return{loading: false, search:action.payload};
      case PRODUCT_SEARCH_FAIL:
        return{loading:false,error:action.payload};
      default:
        return state;
    }
  }
  export {
    productListReducer,
    productDetailsReducer,
    productcountreducer,
    productsearchreducer
};

