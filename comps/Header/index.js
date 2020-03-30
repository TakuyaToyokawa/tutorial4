//use the same compenent to change hte fontsize
//Change the text color of the header
//change the onmouseover for the header

import React from 'react';
import "./header.css";

const Header = ({fontSize, color, onMouseOver, text}) => <div>
    <h1 className="header" style={{color: color, fontSize:fontSize}} onMouseOver={onMouseOver}>{text}</h1>
</div> 

function onMouseOver(){
    alert("Mouse is over");
}

Header.defaultProps = {
    fontSize: "1em",
    color: "#000",
    onMouseOver: onMouseOver,
    text: "Default Header"
}

export default Header;