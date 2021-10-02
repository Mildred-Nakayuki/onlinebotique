

function Sidebar({ items, onFilter, checked }) {
  return (
    <div className="side-bar col-lg-4">
      <div className="search-bar w3layouts-newsletter">
        <h3 className="sear-head">Search Here..</h3>
        <form action="#" method="post" className="d-flex">
          <input
            type="search"
            placeholder="Product name..."
            name="search"
            className="form-control"
            required=""
          />
          <button className="btn1">
            <span className="fa fa-search" aria-hidden="true"></span>
          </button>
        </form>
      </div>
      <div className="left-side my-4">
        <h3 className="sear-head">Categories</h3>
        <ul className="w3layouts-box-list">
          <li>
            <input type="checkbox" className="checked"
            value={checked}
            checked={checked}
             onChange={onFilter}
             />
            <span className="span">Formal</span>
          </li>
          <li>
            <input type="checkbox" className="checked" />
            <span className="span">Jeans</span>
          </li>
          <li>
            <input type="checkbox" className="checked" />
            <span className="span">Dresses</span>
          </li>
          <li>
            <input type="checkbox" className="checked" />
            <span className="span">Skirts</span>
          </li>
          <li>
            <input type="checkbox" className="checked" />
            <span className="span">Tops</span>
          </li>
        </ul>
      </div>
      <div className="left-side">
        <h3 className="sear-head">Discount</h3>
        <ul className="w3layouts-box-list">
          <li>
            <input type="checkbox" className="checked" />
            <span className="span">5% or More</span>
          </li>
          <li>
            <input type="checkbox" className="checked" />
            <span className="span">10% or More</span>
          </li>
          <li>
            <input type="checkbox" className="checked" />
            <span className="span">20% or More</span>
          </li>
          <li>
            <input type="checkbox" className="checked" />
            <span className="span">30% or More</span>
          </li>
          <li>
            <input type="checkbox" className="checked" />
            <span className="span">50% or More</span>
          </li>
          <li>
            <input type="checkbox" className="checked" />
            <span className="span">60% or More</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
