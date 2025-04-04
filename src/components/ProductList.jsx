import axios from 'axios';
import React, { useEffect, useState } from 'react'




function ProductList({ addToCart }) {

    const [products, setProducts] = useState([]);

    const fetchProducts = async (id) => {

        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            if (response?.data) {
                setProducts(response.data);
            }
        } catch (err) {
            console.log("Error Fetching Product:", err);
        }
    };

    const formattedPrice = (price) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        }).format(price);
    };  

    useEffect(() => {
        fetchProducts()
    }, []);



    // console.log("product",products)

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {
                products?.map((ele, index) => {
                    return (<div key={index} className="border p-4 flex flex-col justify-between h-full">
                        <img src={ele.image} alt={ele.title} className="h-40 mx-auto" />
                        <h3 className="text-lg font-bold">{ele.title}</h3>
                        <p >{ele.description.substring(0, 60)}...</p>
                        {/* <p>
                                {ele.description
                                    ? `${ele.description.substring(0, 60)}...`
                                    : "No description available."}
                                <Link to={`/products/${ele.id}`} className="text-blue-500 underline">
                                    Read More
                                </Link>
                            </p> */}

                        <p className="text-green-600 font-bold">{formattedPrice(ele?.price)}</p>
                        <div className="mt-auto">
                            <button onClick={() =>
                                addToCart(ele)
                            } className="bg-blue-500 text-white py-1 px-4 mt-2">
                                Add to Cart
                            </button>
                        </div>
                    </div>)
                })
            }

        </div>
    )
}

export default ProductList

