import React, {useState, useEffect, useRef} from 'react'
import {useParams, useNavigate} from "react-router-dom";

const SinglePost = ({products}) =>{
    const nav = useNavigate()

    const {id} = useParams()
    function changeRoute (id) {
        nav(`/products/${id}`);
    }

    return(
        <>
            {products.map((product) => (
                <div className="post" key={product.id} style={{ width: "300px" }} id={product.id}>
                    <img src={product.thumbnail} alt="" style={{ height: "300px", width: "280px" }} />
                    <h4 onClick={() => changeRoute(product.id)}>Title: {product.title}</h4>
                </div>
            ))}
        </>
    )
}

export default SinglePost