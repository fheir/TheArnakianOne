import logo from './basic_back_1.png';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
  return (
    <div>
      <h1>Hello World! {props.name}</h1>
      <DrawPile/>
    </div>
    
  );
}

class DrawPile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cardCount: 10};
  }
  render() {
    return (
      <div className="DrawPile">
        <img className="Draw" src={logo}/>
      </div>
    );
  }
}

export default App;
