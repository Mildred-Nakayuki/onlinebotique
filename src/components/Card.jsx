import React from 'react'

function Card(props) {
    return (
        <div className="card">
        <div className="card_image">
            <img src={props.image} alt="pdt" className="images" />
        </div>
        <div className="card_description">
                <h5 className="title">{props.title}</h5>
               <span>Shs:{props.price}</span>
           </div>
           <button className="button">Buy</button>
        </div>
    )
}

export default Card
