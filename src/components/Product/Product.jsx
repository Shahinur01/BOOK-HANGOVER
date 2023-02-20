import React, { useEffect, useState } from 'react';
import './Product.css';

const Product = () => {
    const [productImages, setProductImages] = useState([]);
    // const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch("api/fake.json")
            .then(response => response.json())
            .then(data => setProductImages(data.luckyImages));
    }, []);

    const HandleAddToCart = (item) =>{
        // const newCart = [...cart.item];
        // setCart(newCart);
        console.log(item);
    }

    return (
        <div className='container my-5'>
            <div className="row">
                {
                    productImages.map((item, index) => {
                       const {name,price,image} = item;
                        return (
                            <div className="col-sm-6 col-md-4  my-3" key={index}>
                                <div className="card product-img">
                                    <img src={image} alt="" />
                                    <div className="card-footer">
                                        <h5>{name} </h5>
                                        <p>Price: ${price} </p>
                                        <button onClick={() => HandleAddToCart(item)} className="addToCart">Add to cart <i className='bx bxs-cart-add'></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Product;