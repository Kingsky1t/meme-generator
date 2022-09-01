import React from "react";
import "./Header.css"
import logo from "../media/troll-face.png"

export default function Header() {
     return(
          <nav>
               <img src={logo} alt="logo"/>
               <h1>Meme-Generator</h1>
          </nav>
     )
}