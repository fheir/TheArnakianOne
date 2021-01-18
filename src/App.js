import backRight from './images/back_right.png';
import backLeft from './images/back_left.png';

import basicFront1 from './images/basic_front_1.png';
import basicFront2 from './images/basic_front_2.png';
import basicFront3 from './images/basic_front_3.png';
import basicFront4 from './images/basic_front_4.png';
import basicFront5 from './images/basic_front_5.png';

import greenFront1 from './images/green_front_1.png';
import greenFront2 from './images/green_front_2.png';
import greenFront3 from './images/green_front_3.png';
import greenFront4 from './images/green_front_4.png';
import greenFront5 from './images/green_front_5.png';

import redFront1 from './images/red_front_1.png';
import redFront2 from './images/red_front_2.png';
import redFront3 from './images/red_front_3.png';
import redFront4 from './images/red_front_4.png';
import redFront5 from './images/red_front_5.png';

import purpleFront1 from './images/purple_front_1.png';
import purpleFront2 from './images/purple_front_2.png';
import purpleFront3 from './images/purple_front_3.png';
import purpleFront4 from './images/purple_front_4.png';
import purpleFront5 from './images/purple_front_5.png';

import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

const BasicCards = [
  {
    id: 1,
    front: basicFront1,
    back: backRight
  },
  {
    id: 2,
    front: basicFront2,
    back: backLeft
  },
  {
    id: 3,
    front: basicFront3,
    back: backRight
  },
  {
    id: 4,
    front: basicFront4,
    back: backLeft
  },
  {
    id: 5,
    front: basicFront5,
    back: backRight
  }
];

const GreenCards = [
  {
    id: 1,
    front: greenFront1,
    back: backLeft,
    difficulty: 0
  },
  {
    id: 2,
    front: greenFront2,
    back: backRight,
    difficulty: 0
  },
  {
    id: 3,
    front: greenFront3,
    back: backLeft,
    difficulty: 0
  },
  {
    id: 4,
    front: greenFront4,
    back: backRight,
    difficulty: 0
  },
  {
    id: 5,
    front: greenFront5,
    back: backLeft,
    difficulty: 0
  }
];

const RedCards = [
  {
    id: 1,
    front: redFront1,
    back: backLeft,
    difficulty: 1
  },
  {
    id: 2,
    front: redFront2,
    back: backRight,
    difficulty: 1
  },
  {
    id: 3,
    front: redFront3,
    back: backLeft,
    difficulty: 1
  },
  {
    id: 4,
    front: redFront4,
    back: backRight,
    difficulty: 1
  },
  {
    id: 5,
    front: redFront5,
    back: backLeft,
    difficulty: 1
  }
];

const PurpleCards = [
  {
    id: 1,
    front: purpleFront1,
    back: backLeft,
    difficulty: 2
  },
  {
    id: 2,
    front: purpleFront2,
    back: backRight,
    difficulty: 2
  },
  {
    id: 3,
    front: purpleFront3,
    back: backLeft,
    difficulty: 2
  },
  {
    id: 4,
    front: purpleFront4,
    back: backRight,
    difficulty: 2
  },
  {
    id: 5,
    front: purpleFront5,
    back: backLeft,
    difficulty: 2
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App(props) {
  return (
    <div className='root-container'>
      <h1>Lost Ruins of Arnak</h1>
      <DifficultyController />
      <GameController />
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
  constructor(props) {
    super(props);

    this.state = {
      difficultyText: '5 Purple 5 Red Cards' 
    }
  }
  render() {
    return (
    <div className='difficulty-container'>
      <Typography id="discrete-slider" gutterBottom>
        Select Difficulty
      </Typography>

      <div className='slider-container'>
        <Typography className="difficulty-text">
          {this.state.difficultyText}
        </Typography>
        <Slider
          className='slider-component'
          defaultValue={0}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={10}
        />
      </div>
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
        {this.props.canDraw ? <Button variant='contained' color="primary" onClick={() => this.props.onClick()}>Draw</Button> : null}
      </div>
    );
  }
}

export default App;
