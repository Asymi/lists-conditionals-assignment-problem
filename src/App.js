import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
import './App.css';

class App extends Component {
  state = {
    characters: ""
  }

  countCharacterHandler = (event) => {
    this.setState({numOfChars : event.target.value.length});
    this.setState({characters : event.target.value})
  }

  deleteCharHandler = (index) => {
    const charArr = this.state.characters.split("");
    charArr.splice(index, 1);
    const newCharStr = charArr.join("");
    this.setState({ characters : newCharStr })
  }

  render() {
    const charArr = this.state.characters.split("");
    const charArrObj = charArr.map((char, index) => {
      return {id: index, character: char}
    })

    const mapCharArr = charArrObj.map( obj => {
      // You can't use onClick etc with class component we define
      // return <CharComponent onClick={this.deleteCharHandler.bind(this, (obj.id))} key={obj.id} character={`${obj.character}`}/> 
      return <CharComponent clicked={() => this.deleteCharHandler(obj.id)} key={obj.id} character={`${obj.character}`}/> 
    })

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input onChange={this.countCharacterHandler} value={this.state.characters}/>
        <p>{this.state.characters}</p>
        <ValidationComponent textLength={this.state.numOfChars}/>
        {mapCharArr}
      </div>
    );
  }
}

export default App;
