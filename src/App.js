import logo from './basic_back_1.png';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
  return (
    <div>
      <h1>Hello World! {props.name}</h1>
      <div className="float-container">
        <DrawPile count={10} name="draw-pile"/>
        <DrawPile count={0} name="discard-pile"/>
      </div>
    </div>
    
  );
}

class DrawPile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cardCount: props.count}; 

    this.drawCard = this.drawCard.bind(this);
  }

  drawCard() {
    this.setState({
      cardCount: this.state.cardCount - 1
    });
  }

  render() {
    return (
      <div className={this.props.name}>
        <img className="Draw" src={logo}/>
        <h1>{this.state.cardCount}</h1>
        <button onClick={this.drawCard}>Draw</button>
      </div>
    );
  }
}

export default App;
