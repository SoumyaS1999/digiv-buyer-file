import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ imgSrc, title, description, className,link }) => {
    console.log(link);
    return (
        <div className={`service__card services__2_card ${className}`}>
            <img src={imgSrc} alt={title} />
            <h3 className="t__28">{title}</h3>
            <p>{description}</p>
            <a href={link} className="d-flex align-items-center">
                <span>View More Details</span>
                <i className="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    )
}

export default ServiceCard