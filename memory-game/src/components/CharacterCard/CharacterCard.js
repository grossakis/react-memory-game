import React, { Component } from "react";
import "./CharacterCard.css";

class CharacterCard extends Component{
    characterGuess(){
        this.props.guessCharacter(this.props.id)
    }
    render(){
        return(
            <div className="card" onClick={ this.characterGuess.bind(this) }>
                {/* <div>
                    <h4>
                        {this.props.name}
                    </h4>
                </div> */}
                <br/>
                <div className="image-container">
                    <img alt={this.props.name} src={this.props.image}/>
                </div>
            </div>
        )
    }
}
export default CharacterCard