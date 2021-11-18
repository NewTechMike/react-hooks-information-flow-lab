import React from "react"

function Header({onDarkModeClick, change}){

  return (
    <div>
      <button style={{backgroundColor: "yellow"}} 
        onClick={onDarkModeClick}>
        {change ? "Dark" : "Light"} Mode
      </button> 
    </div>
  );
}

export default Header;