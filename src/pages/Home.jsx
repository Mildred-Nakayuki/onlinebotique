import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

function Home({ data, onFilter, checked }) {
  return (
    <div className="row">
      <Sidebar onFilter={onFilter} checked={checked}/>
      <div className="left-ads-display col-lg-8">
        <div className="row">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <div className="grid-img-right mt-4 text-right">
          <span className="money">Flat 50% Off</span>
          <a href="/" className="btn">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
