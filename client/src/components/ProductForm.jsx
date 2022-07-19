import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// 1. input: useState
// 2. axios
// 3. optional: redirect: useNavigate
export default (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const onSubmitHandler = e => {
        e.preventDefault();
        // post the new product to the backend
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => props.updateList(res.data))
            .catch(err => console.log("Error: ", err))
    }
    return (
        <form onSubmit={onSubmitHandler} className="p-3 mb-2 bg-success text-white">
            <p className="input-group">
                <label className="input-group-text"> Title </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className='form-control' />
            </p>
            <p className="input-group">
                <label className="input-group-text"> Price </label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} className='form-control' />
            </p>
            <p className="input-group">
                <label className="input-group-text"> Description </label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} className='form-control' />
            </p>
            <button type='submit'> Create </button>
        </form>
    )
}
