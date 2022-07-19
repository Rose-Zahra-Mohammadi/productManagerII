import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(res => props.updateList(deleteId))
            .catch(err => console.log(err))

    }

    return (
        <div>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Title:</th>
                        <th>Price (lb/$):</th>
                        <th>Description:</th>
                        <th>Edit:</th>
                        <th>Delete:</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        props.productlist.map((product, i) => {
                            return (
                                <tr key={i}>
                                    <td><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td><Link to={`/products/${product._id}/edit`}> Edit</Link></td>
                                    <td><button onClick={() => handleDelete(product._id)}> Delete </button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;