import axios from "axios";
import React, { useEffect, useState } from "react";

import ProductForm from "../components/ProductForm";

import ProductList from "../components/ProductList";

const Main = (props) => {
    const [productlist, setProductslist] = useState([])
    // const [loaded, setLoaded] = useState(false);

    const refreshList = (newProduct) => {
        setProductslist([...productlist, newProduct])
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProductslist(res.data);
                // setLoaded(true)
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromList = (deleteId) => {
        const filteredList = productlist.filter((eachProduct, i) => {
            return (
                eachProduct._id !== deleteId
            )
        })
        setProductslist(filteredList)
    }
    return (
        <div>
            <ProductForm updateList={refreshList} />
            <ProductList productlist={productlist} updateList={removeFromList} />
            {/* <hr/>
            {loaded && <ProductList productlist = {productlist}/>} */}
        </div>
    )
}

export default Main;