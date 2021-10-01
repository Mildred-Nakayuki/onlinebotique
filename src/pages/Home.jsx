
import {useState,useEffect} from 'react'
import Card from '../components/Card'
import Data from "../Library/stock"


function Home() {
const [data,setData]= useState(Data)
  
    return (
        <div className="Home">
           {
             data.map(item =>(
               <>
<div className="titles">{item.category}</div>
           <div className="body">
    <Card data={item}/>
        </div>
        </>
             ))
             
             }
           </div>         
    )
}

export default Home
