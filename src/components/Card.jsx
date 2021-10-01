import React from 'react'

function Card({data}) {
    return (
        <div className="card">
        <div className="card_image">
            <img src={data.image} alt="pdt" className="images" />
        </div>
        <div className="card_description">
                <h5 className="title">{data.title}</h5>
               <span>Shs:{data.price}</span>
           </div>
           <button className="button">Buy</button>
        </div>
    )
}

export default Card
