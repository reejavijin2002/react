import React   from "react";
// import Designleft from "./Designleft";
// import Designright from "./Designright";


function Design(prop) {
    return (
      <div className="one">
      <div className="four">
        <img  className="two" src={prop.img} ></img>
        
      </div>
      <div className={prop.align}>
      <div  className="four"  >
        <h1 className={prop.color}>{prop.heading}</h1>
        <p  className={prop.color}>{prop.para}</p>
        <button >{prop.button}</button>
      </div></div>
      </div>
    );
}

export default Design