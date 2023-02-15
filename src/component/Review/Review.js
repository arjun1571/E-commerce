import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Review.css"

const Review = ({product,handleRemove}) => {
    const {id,img,name,price,quantity}=product
    return (
        <div className='review-container'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='info-container'>
                <div className="detail">
                    <p>{name}</p>
                    <p><small>Price:${price}</small></p>
                    <p><small>quantity:{quantity}</small></p>
                </div>
                <div className='deltete'>
                    <button onClick={()=>handleRemove(id)} className='icon-container'>
                        <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;