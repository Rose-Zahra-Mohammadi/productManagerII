import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// 2. display info on load (useEffect)
// 1. get id from params (useParams)
// 3. for the info: useState
// 4. grab info from backend: axios
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                product ?
                    <div>
                        <p> Title: {product.title}</p>
                        <p> Price: {product.price}</p>
                        <p> Description: {product.description}</p>
                        <button onClick={handleDelete}>Delete</button>
                    </div> :
                    <h5>This Product is not available!</h5>

            }
        </div>
    )
}
export default Detail;