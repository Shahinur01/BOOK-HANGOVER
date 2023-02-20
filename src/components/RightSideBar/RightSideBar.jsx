import React from 'react';
import './RightSideBar.css';

const RightSideBar = (props) => {
    let { cart,setCart } = props;
    // const [data,setData] =useState(cart);
    

    const handleDelete = (id) => {
        const deleteCart = cart.filter(c => c.id !== id);
        setCart(deleteCart)
        console.log(deleteCart);
    }

    return (
        <div className="RightSideBar">
            <h3>Selected Books:{cart.length}</h3>

            {
                cart.map(({ image,id }, index) => {
                    return (
                        <div key={index}>
                            <div className="d-flex my-3">
                                <img src={image} alt="" /> <br />
                                <button onClick={() =>handleDelete(id)}><i className='bx bxs-trash'></i></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default RightSideBar;