import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import './Home.css';

const Home = () => {
    const [productImages, setProductImages] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("api/fake.json")
            .then(response => response.json())
            .then(data => setProductImages(data.luckyImages));
    }, []);


    const HandleAddToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    }

    return (
        <div className="main-menu">
            <Header />
            <div className="row">
                <div className="col-md-8">
                    <Product productImages={productImages} HandleAddToCart={HandleAddToCart} />
                </div>
                <div className="col-md-4">
                    <RightSideBar
                        cart={cart}
                        setCart= {setCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;