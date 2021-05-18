import React,{useState} from 'react'
import {Link, useHistory } from "react-router-dom";

function Search(props) {
    let history =useHistory();
    const [brand, setbrand] = useState('');

    const Onsearch=()=> {
        history.push('/search/?band='+ brand); 
        console.log(history)
      }
    return (
        <div htmlFor="search" className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Tìm kiếm"  onChange={(e) => setbrand(e.target.value)} />
        <div className="input-group-append">
            <button onClick={Onsearch} className="btn btn-outline-secondary" type="button">Search</button>                
        </div>
      </div>
    )
}

export default Search
