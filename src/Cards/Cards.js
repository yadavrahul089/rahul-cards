import React from 'react';
import CardTemplate from '../Cards/CardsUI';
import './card-style.scss';

//Child Component: Cards recieves props from App Component
const Cards = ({ items }) => {
    // Object rendereditem containing the list of items created using map method
    //Div container with BootStrap classes to target Mobile:xs , Tablet:sm, and Desktop:md  Screens
    //Passing props into the CardTemplate Component
    const rendereditem = items.map((item) => {
        return <React.Fragment key={item.title}>
            <div className="col-xs-12 col-sm-6 col-md-4 card-dimensions">
                <CardTemplate cardtitle={item.title}
                    cardimg={item.imgref}
                    carddetail={item.detail}
                    cardcontent={item.content}
                    cardlocation={item.location} />
            </div>
        </React.Fragment>
    });

    return (
        //Card-Container : Max-width 1024px contains rendereditem object
        <div className="container card-container d-flex justify-content-center">
            <div className="row">
                {rendereditem}
            </div>
        </div>
    );
}

export default Cards;


