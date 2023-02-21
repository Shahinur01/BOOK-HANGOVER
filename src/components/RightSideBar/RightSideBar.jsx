import React from 'react';
import './RightSideBar.css';

const RightSideBar = (props) => {
    let { cart, setCart } = props;
    // const [handleAgain,setHandleAgain] = useState([]);


    const handleChooseAgain = () => {
        setCart([]);
    }

    const handleDelete = (id) => {
        const deleteCart = cart.filter(c => c.id !== id);
        // const deleteCart = cart.splice(cart.IndexOf(id),1);
        setCart(deleteCart)
        console.log(deleteCart);
    }

    return (
        <div className="RightSideBar">
            <h3>Selected Books:{cart.length}</h3>
            <div className="btn btn-primary">Choose for 1 me</div> &nbsp;
            <div onClick={handleChooseAgain} className="btn btn-success">Choose Again</div>

            {
                cart.map(({ image, id }, index) => {
                    return (
                        <div key={index}>
                            <div className="d-flex my-3">
                                <img src={image} alt="" /> <br />
                                <button onClick={() => handleDelete(id)}><i className='bx bxs-trash'></i></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default RightSideBar;