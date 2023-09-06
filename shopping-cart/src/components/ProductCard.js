import React, {useState} from 'react';
import '../ProductCard.css';
import productImageUrl from '../img/Lipsticks.jpeg';

function ProductCard(props) {
    const [showDetails, setShowDetails] = useState(false);

    // const {
    //     productName,
    //     productDescription,
    //     productPrice,
    //     productCode,
    //     averageRating,
    //     manufacturer,
    //     stockQuantity,
    //     imageUrl,
    //     numberOfReviews,
    //     dateAdded
    // } = props;

    return (
        <div className="card cardShape">
            <div className="card-body">
                <img src={productImageUrl} className="card-img-top img" alt=""/>
                <h5 className="card-title">{props.productName}</h5>
                <p>Price : {props.productPrice}</p>
                <p>Code : {props.productCode}</p>
                <p>Rating : {props.averageRating}</p>
                {showDetails && (
                    <>
                        <p>Description: {props.productDescription}</p>
                        <p>Manufacturer: {props.manufacturer}</p>
                        <p>Stock Quantity: {props.stockQuantity}</p>
                        <p>Date Added: {props.dateAdded}</p>

                    </>
                )}
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                        onClick={() => setShowDetails(!showDetails)}>
                    {showDetails ? 'Show Less' : 'Show More'}
                </button>
                <br/>
                <a href="#" className="btn my-1 btn-primary">
                    Buy Now
                </a>
                <a href="#" className="btn my-1 mx-1 btn-primary">
                    Add to Cart
                </a>

            </div>
        </div>
    );
}

export default ProductCard;