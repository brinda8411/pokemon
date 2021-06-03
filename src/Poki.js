import React from "react";
import "./App.css";
const Poki=({title,image})=>{
    return(
    <div className="box">
        <h1 className="name">{title}</h1>
        <img className="myimg" src={image}></img>
    </div>
    )
}
export default Poki;