import React from "react";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {_id, img, price, title} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        
        <div className="card-actions">
        <p className="text-2xl text-orange-600 font-semibold">Price: $ {price}</p>
        <Link to={`/checkout/${_id}`} className="text-orange-600 mt-2"><FaArrowRight/></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
