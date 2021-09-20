import Navbar from "./Navbar";
import React from 'react';
import {useState } from "react";

import './css/counter.css'
// function Room() {
// const [change, setLit] =useState(true);
// const colorChange = change ? "light" : "dark"
// const TextChange = change ? "Dark" : "Light"

// // console.log(colorChange);
 
// let changer =()=> {
//    setLit(!change)
// }
//   return (
//     <>
//     <Navbar />

//     <div className={`room ${colorChange}`}>
//       <h1>the room is {colorChange}</h1> <br />
//     <button onClick={changer}>{TextChange}</button>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));


let Counter=()=>{
const [num, updatenum] =useState(0);

let inc =()=>{
  updatenum(num + 1)
}

let dec =()=>{
  if(num > 0){ 
  updatenum(num - 1)
}else{
  alert('Sorry 0 is last limit')
  updatenum(0)
}

}

let reset =()=>{
  updatenum(0)
}

const [change, setLit] =useState(true);
const colorChange = change ? "light" : "dark"
const TextChange = change ? "Dark" : "Light"
const buttonColor= change ? "black" : "light"

let changer =()=> {
  setLit(!change)
}
return(
  
  <div id="big" className={`room ${colorChange}`}>
    <h1>The Room is {colorChange}
      </h1> <br />
    <button className={`but ${buttonColor}`} onClick={changer}>{TextChange}</button>
    <h1 className={TextChange}>Counter</h1>
    <h1 className="display">{num}</h1>
    <div  className='maina'>
     <button className="inc" onClick={inc}>Increment</button>
    <button className="inc" onClick={dec}>Decrement</button>
    <br />
    <button className="reset" onClick={reset}>Reset</button>
    </div>
 </div>
 
)
}
export default Counter;
  