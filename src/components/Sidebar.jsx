import { useAppContext } from "../context/AppContext";

function Sidebar({ items }) {
  const { searchData, filterData } = useAppContext();

  const handleChange = (e) => {
    searchData(e.target.value);
  }

  const handleCheckbox = (e) => {
    const checked = e.target.checked;
    console.log({ value: e.target.value, checked });
    // if checked is true, then filterData will be called with the value of the checkbox
    // if checked is false, then filterData will be called with an empty string
    filterData(checked ? e.target.value : "all");
  }
  return (
    <div className="side-bar col-lg-4">
      <div className="search-bar w3layouts-newsletter">
        <h3 className="sear-head">Search Here..</h3>
        <form className="d-flex">
          <input
           onChange={handleChange}
            type="search"
            placeholder="Product name..."
            name="search"
            className="form-control"
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
            onChange={handleCheckbox}
            value="formal"
             />
            <span className="span">Formal</span>
          </li>
          <li>
            <input type="checkbox" className="checked"
            value="jeans"
            onChange={handleCheckbox}
            />
            <span className="span">Jeans</span>
          </li>
          <li>
            <input type="checkbox" className="checked"
            value="dresses"
            onChange={handleCheckbox}
            />
            <span className="span">Dresses</span>
          </li>
          <li>
            <input type="checkbox" className="checked"
            value="skirts"
            onChange={handleCheckbox}
            />
            <span className="span">Skirts</span>
          </li>
          <li>
            <input type="checkbox" className="checked"
            value="tops"
            onChange={handleCheckbox}
            />
            <span className="span">Tops</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
