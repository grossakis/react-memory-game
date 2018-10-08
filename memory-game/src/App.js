import React, { Component } from "react";
import Wrapper from "./components/Wrapper"
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header"
import characters from "./characters.json";

class App extends Component{
    state = {
        characters: characters.map((a) => [Math.random(),a])
        .sort((a,b) => a[0]-b[0])
        .map((a) => a[1]),
        selectedIds: [],
        score: 0
    };

    winCheck = () => {
        if(this.state.score === 15){
            if(window.confirm("You Guessed All The Characters! Play Again?")){
                window.location.reload();
            }
        }
    }

    guessingFunction = (key) => {
        let score = this.state.score + 1;
        let currentId = key;
        let currentCharacter = ""; 
        this.state.characters.map(characters => {
            // console.log(characters.name)
            if(characters.id === key){
                currentCharacter = characters.name
            }
            return characters
        })
        
        let selectIds = this.state.selectedIds;
        // console.log(key)
        console.log(currentCharacter)
        for(let i = 0; i <selectIds.length; i++){
            if(selectIds[i] === currentId){
                // console.log('selected')
                if(window.confirm(currentCharacter + ' already Guessed! Would you like to play again?')){
                    window.location.reload();
                }
            }
        }
        selectIds.push(key);
        let characters=this.state.characters;


        // WORKING RANDOMIZE FUNCTION (How does it work???)
        characters = characters.map((a) => [Math.random(),a])
            .sort((a,b) => a[0]-b[0])
            .map((a) => a[1]);

        // console.log(characters)
        this.setState({
            characters: characters,
            selectedIds: selectIds,
            score: score
        })
        this.winCheck();
    }

    render(){
        return(
            <Wrapper>
                {this.winCheck()}
                <Header
                    score={this.state.score}
                />
                {this.state.characters.map( character =>(
                    <CharacterCard
                        key = {character.id}
                        id = {character.id}
                        name = {character.name}
                        image = {character.image}
                        guessCharacter = {this.guessingFunction}
                    />
                ))}
            </Wrapper>
        )
    }
}

export default App;