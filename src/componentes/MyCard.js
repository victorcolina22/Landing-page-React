import React from 'react';
import PropTypes from "prop-types";

const MyCard = props => {
    let Cards = [
        {
            title:"Card title",
            imagen:"https://picsum.photos/500/325?random=1",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            buttonURL:"#",
            buttonLabel:"Go somewhere",
        },
        {
            title:"Card title",
            imagen:"https://picsum.photos/500/325?random=2",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            buttonURL:"#",
            buttonLabel:"Go somewhere",
        },
        {
            title:"Card title",
            imagen:"https://picsum.photos/500/325?random=3",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            buttonURL:"#",
            buttonLabel:"Go somewhere",
        },
        {
            title:"Card title",
            imagen:"https://picsum.photos/500/325?random=4",
            description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            buttonURL:"#",
            buttonLabel:"Go somewhere",
        },
    ]
    return (
        <>
            {
                Cards.map((card, i) => {
                    return (
                        <div className="col-md-3"  key={i}>
                            <div className="card">
                                <img src={card.imagen} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.description}</p>
                                    <a href={card.buttonURL} className="btn btn-primary">{card.buttonLabel}</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );

}
MyCard.propTypes = {
    title: PropTypes.string,
    imagen: PropTypes.string,
    description: PropTypes.string,
    buttonURL: PropTypes.string,
    buttonLabel: PropTypes.string
};

export default MyCard;