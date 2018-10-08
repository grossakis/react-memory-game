import React, { Component } from "react";
import "./Header.css";

class Header extends Component{
    render(){
        return(
            <div className="headerBox">
                <header>
                    <h1>Simpsons Clicky Game</h1>
                    <span className="scoreDisplay">Score: {this.props.score}</span>
                </header>
            </div>
        )
    }
}
export default Header