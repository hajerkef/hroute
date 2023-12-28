import React, { useState } from 'react';
import datalu from './Datalunette';
 import 'bootstrap/dist/css/bootstrap.css';
import Searchlunette from './Searchlunette';

export default function Maplunette() {
//const [datalus,setDatalus]=useState(datalu)
const [filterl,setFilterl]=useState('')
const handelf=(newfilterl)=>{
    setFilterl(newfilterl)
}
const filteredl=datalu.filter((lf)=>lf.name.toLocaleLowerCase().includes(filterl.toLocaleLowerCase()))


  return (
    <div>
        <Searchlunette onsearch={handelf} />
       { filteredl.map((lu)=>(
        <div class="card" style={{width: '18rem'}}>
        <img src={lu.image} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" >{lu.name}</li>
          <li class="list-group-item">{lu.price}</li>
          <li class="list-group-item">{lu.collection}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
       
        ))
       }
    </div>
  )
}
