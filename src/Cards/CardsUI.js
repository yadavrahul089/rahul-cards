import React from 'react';
import './card-style.scss';

//Re-usable: CardTemplate Component recieves the Props from Cards Component
//Cotains the structure of the Card
//Recieved Props binded to the respective elements
const CardTemplate = ({ cardtitle, cardimg, carddetail, cardcontent, cardlocation }) => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={cardimg} alt="image1" className="card-img-top" />

            </div>

            <div className="card-body text-dark">
                <p className="card-title text-secondary">{cardtitle}</p>
                <h2 className="card-text">{cardcontent}</h2>
                <p className="card-location text-secondary">{cardlocation}</p>
                <a href={carddetail} className="btn btn-outline-success card-details" target="_blank" rel="noopener noreferrer">See Details</a>

            </div>
        </div>
    );
}

export default CardTemplate;