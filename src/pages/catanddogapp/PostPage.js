import React, {useState, useEffect, useRef} from 'react'
import SinglePost from "./SinglePost";

const PostPage = () =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchPostData();
    }, []);

    const fetchPostData = () => {
        fetch("https://dummyjson.com/products")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setProducts(data.products)
            })
    }


    return(
        <div>
            <h1>Posts</h1>
            <div className="d-flex flex-wrap m-10">
               <SinglePost products={products}/>
            </div>
        </div>
    )
}

export default PostPage