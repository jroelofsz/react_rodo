import React from 'react'
import './NotFound.css';
import image from '../images/404.png';

export default function NotFound() {
    return (
        <div className="notFound">
            <img src={image} alt="Resource not found"/> 
            <h1>Resource Not Found</h1>
        </div>
    )
}
