import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from '../components/ProductList'

const Dashboard = () => {
    const [productlist, setProductslist] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProductslist(res.data))
            .catch(err => console.log(err))

    }, [])

  return (
    <div>
        {
            productlist?
            <ProductList productlist ={productlist}/>:
            <h1> No Product Now</h1>
        }
      
    </div>
  )
}

export default Dashboard