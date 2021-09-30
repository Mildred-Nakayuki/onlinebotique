import React from 'react'

function Card() {
    return (
        <div className="card">
        <div className="card_image">
        <h1>Card</h1>
            <img src="cdn.pixabay.com/photo/2017/07/31/11/33/people-2557483_960_720.jpg" alt="pdt" />
        </div>
        <div className="card_description">
               <span>Shs:Shs50000</span>
           </div>
           <button>Buy</button>
        </div>
    )
}

export default Card
