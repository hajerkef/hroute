import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import datalu from './Datalunette'
export default function Home() {
const [filter,setFilter]=useState(' ')
const handelf=(newFilter)=>{
  setFilter(newFilter)

}
const filtered=datalu.filter((elt)=>elt.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))


const navig=useNavigate()

  return (
    <div>
        <h1>nouvelle collection lunette soleil</h1>
        <button onClick={()=>{navig("/searchlu")}}>searchlunette </button>
        <button onClick={()=>{navig("/maplu")}}>collectionlunette </button>
     


      
    </div>
  )
}
