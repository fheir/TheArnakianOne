import basicBack1 from './images/back_basic_1.png';
import basicBack2 from './images/back_basic_2.png';
import basicBack3 from './images/back_basic_3.png';
import basicBack4 from './images/back_basic_4.png';
import basicBack5 from './images/back_basic_5.png';

// import greenBack1 from './images/back_green_1.png';
// import greenBack2 from './images/back_green_2.png';
// import greenBack3 from './images/back_green_3.png';
// import greenBack4 from './images/back_green_4.png';
// import greenBack5 from './images/back_green_5.png';

// import redBack1 from './images/back_red_1.png';
// import redBack2 from './images/back_red_2.png';
// import redBack3 from './images/back_red_3.png';
// import redBack4 from './images/back_red_4.png';
// import redBack5 from './images/back_red_5.png';

// import purpleBack1 from './images/back_purple_1.png';
// import purpleBack2 from './images/back_purple_2.png';
// import purpleBack3 from './images/back_purple_3.png';
// import purpleBack4 from './images/back_purple_4.png';
// import purpleBack5 from './images/back_purple_5.png';

import basicFront1 from './images/basic_front_1.png';
import basicFront2 from './images/basic_front_2.png';
import basicFront3 from './images/basic_front_3.png';
import basicFront4 from './images/basic_front_4.png';
import basicFront5 from './images/basic_front_5.png';

// import greenFront1 from './images/front_green_1.png';
// import greenFront2 from './images/front_green_2.png';
// import greenFront3 from './images/front_green_3.png';
// import greenFront4 from './images/front_green_4.png';
// import greenFront5 from './images/front_green_5.png';

// import redFront1 from './images/front_red_1.png';
// import redFront2 from './images/front_red_2.png';
// import redFront3 from './images/front_red_3.png';
// import redFront4 from './images/front_red_4.png';
// import redFront5 from './images/front_red_5.png';

// import purpleFront1 from './images/front_purple_1.png';
// import purpleFront2 from './images/front_purple_2.png';
// import purpleFront3 from './images/front_purple_3.png';
// import purpleFront4 from './images/front_purple_4.png';
// import purpleFront5 from './images/front_purple_5.png';

import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

const BasicCards = [
  {
    id: 1,
    front: basicFront1,
    back: basicBack1
  },
  {
    id: 2,
    front: basicFront2,
    back: basicBack2
  },
  {
    id: 3,
    front: basicFront3,
    back: basicBack3
  },
  {
    id: 4,
    front: basicFront4,
    back: basicBack4
  },
  {
    id: 5,
    front: basicFront5,
    back: basicBack5
  }
];

const testCard = {
  id: 5,
    front: basicFront5,
    back: basicBack5
}

function App(props) {
  return (
    <div className='root-container'>
      <h1>Hello World! {props.name}</h1>
      <GameController className='cards-container'/>
    </div> 
  );
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

class DifficultyController extends React.Component {
  render() {
    return (
      <div className="float-container">
       
      </div>
    );
  }
}

class GameController extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        cardsInDeck: shuffle(BasicCards.slice()),
        cardsInDiscard: []
      };
  }

  handleDrawCard() {
    var drawPile = this.state.cardsInDeck.slice();
    var newDiscard = this.state.cardsInDiscard.slice(); 
    newDiscard.push(drawPile.splice(drawPile.length - 1, 1)[0]);

    this.setState(() => ({
      cardsInDeck: drawPile,
      cardsInDiscard: newDiscard
    }));
  }

  render() {
    return (
      <div className='cards-container'>
        <DrawPile cards={this.state.cardsInDeck} name="draw-pile" canDraw ={this.state.cardsInDeck.length > 0} index={this.state.cardsInDeck.length > 0 ? this.state.cardsInDeck.length-1 : 0} onClick={() => this.handleDrawCard()}/>
        <DrawPile cards={this.state.cardsInDiscard} name="discard-pile" canDraw={false} index={this.state.cardsInDiscard.length > 0 ? this.state.cardsInDiscard.length-1 : 0}/>
      </div>
    );
  }
}

class DrawPile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.name}>
        {console.log(this.props.cards)}
        <img className="Draw" src={this.props.cards[this.props.index] ? (this.props.canDraw ? this.props.cards[this.props.index].back : this.props.cards[this.props.index].front) : null}/>
        <h1>{this.props.cards.length}</h1>
        {this.props.canDraw ? <button onClick={() => this.props.onClick()}>Draw</button> : null}
      </div>
    );
  }
}

export default App;
