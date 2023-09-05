import React from 'react';
import '../ProductCard.css';
import lipsticksImage from '../img/Lipsticks.jpeg';

function ProductCard(props) {
    return (
        <div className="card cardShape container">
            <div className="card-body">
                <img src={lipsticksImage} className="card-img-top img" alt="" />
                <h5 className="card-title">{props.productName}</h5>
                <p className="card-text">{props.productDescription}</p>
                <p className={"mx-1"}>Price : {props.productPrice}</p>
                <p  className={"mx-1"}>Code : {props.productCode}</p>
                <a href="#" className="btn btn-primary">
                    Buy Now
                </a>
                <a href="#" className="btn mx-1 btn-primary">
                    Add to Cart
                </a>
            </div>
        </div>
    );
}

export default ProductCard;
