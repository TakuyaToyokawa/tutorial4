//use the same compenent to change hte fontsize
//Change the text color of the header
//change the onmouseover for the header

import React from 'react';
import "./header.css";

const Header = ({fontSize, color, text}) => <div>
    <h1 className="header" style={{color: color, fontSize:fontSize}}>{text}</h1>
</div> 

Header.defaultProps = {
    fontSize: "1em",
    color: "#000",
    text: "Default Header"
}

export default Header;