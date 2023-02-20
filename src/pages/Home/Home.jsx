import React from 'react';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import './Home.css';

const Home = () => {
    return (
        <div className="main-menu">
             <Header/>
            <div className="row">
                <div className="col-md-8">
                   <Product/>
                </div>
                <div className="col-md-4">
                    <RightSideBar/>
                </div>
            </div>
        </div>
    );
};

export default Home;