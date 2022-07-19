import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

// pre-populated form
// 1. grab id from params (useParams)
// 2. display info on load (useEffect)
// 3. input : useState
// 4. grab info from backend: axios
const Update = (props) => {
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("")
    const [inputs, setInputs] = useState({
        title: "",
        price: "",
        description: ""

    })

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setInputs(res.data)
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, inputs)
            .then(res => navigate("/"))
            .catch(err => console.log(err))

    }
    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(e.target.name, e.target.value)
    }
    return (
        <div>
            <h1>Update</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label> Title </label>
                    <input type="text" onChange={handleChange} name="title" value={inputs.title} />
                </p>
                <p>
                    <label> Price </label>
                    <input type="number" onChange={handleChange} name="price" value={inputs.price} />
                </p>
                <p>
                    <label> Description </label>
                    <input type="text" onChange={handleChange} name="description" value={inputs.description} />
                </p>
                <button type='submit'> Update the Product</button>
            </form>
        </div>
    )
}

export default Update