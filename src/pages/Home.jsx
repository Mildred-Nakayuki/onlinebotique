import React from 'react'
import Card from '../components/Card'
import Data from "../Library/stock"


function Home() {

   let dresses = Data.filter(dress => dress.category === "Dresses")
   let formal = Data.filter(formal => formal.category === "Formal")
   let jeans = Data.filter(jean => jean.category === "jeans")
   let skirts = Data.filter(skirt => skirt.category === "skirts")
   let tops = Data.filter(top => top.category === "tops")


    return (
        <div className="Home">
          <div className="titles">DRESSES</div>
           <div className="body">
           {
            dresses.map(item =>(<Card image={item.image} price={item.price} key={item.id}
            title={item.product}/>))
          }
           </div>
           <div className="titles">Formal</div>
           <div className="body">
           {
            formal.map(item =>(<Card image={item.image} price={item.price} key={item.id}
            title={item.product}/>))
          }
           </div>
           <div className="titles">Jeans</div>
           <div className="body">
           {
            jeans.map(item =>(<Card image={item.image} price={item.price} key={item.id}
            title={item.product}/>))
          }
           </div>
           <div className="titles">SKIRTS</div>
           <div className="body">
           {
            skirts.map(item =>(<Card image={item.image} price={item.price} key={item.id}
            title={item.product}/>))
          }
           </div>
           <div className="titles">TOPS</div>
           <div className="body">
           {
            tops.map(item =>(<Card image={item.image} price={item.price} key={item.id}
            title={item.product}/>))
          }
           </div>
        </div>
    )
}

export default Home
