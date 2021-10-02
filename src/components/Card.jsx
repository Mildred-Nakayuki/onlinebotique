import React from "react";

function Card({ data }) {
  return (
<div className="col-md-4 product-men">
  <div className="product-shoe-info shoe text-center">
    <div className="men-thumb-item">
      <img src={data.image} className="img-fluid" alt={data.title} />
      <span className="product-new-top">New</span>
    </div>
    <div className="item-info-product">
      <h4>
        <a href="/">{data.title}</a>
      </h4>

      <div className="product_price">
        <div className="grid-price">
          <span className="money">$675.00</span>
        </div>
      </div>
      <ul className="stars">
        <li>
          <a href="/"><span className="fa fa-star" aria-hidden="true">.</span></a>
        </li>
        <li>
          <a href="/"><span className="fa fa-star" aria-hidden="true">.</span></a>
        </li>
        <li>
          <a href="/"><span className="fa fa-star-half-o" aria-hidden="true">.</span></a>
        </li>
        <li>
          <a href="/"><span className="fa fa-star-half-o" aria-hidden="true">.</span></a>
        </li>
        <li>
          <a href="/"><span className="fa fa-star-o" aria-hidden="true">.</span></a>
        </li>
      </ul>
    </div>
  </div>
</div>


  );
}

export default Card;
