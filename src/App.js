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

import objective1 from './images/objective_front_1.png';
import objective2 from './images/objective_front_2.png';
import objective3 from './images/objective_front_3.png';
import objective4 from './images/objective_front_4.png';
import objective5 from './images/objective_front_5.png';
import objectiveBack from './images/objective_back.png';

import './App.css';
import React from 'react';
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

const ObjectiveCards = [
  {
    id: 1,
    front: objective1
  },
  {
    id: 2,
    front: objective2
  },
  {
    id: 3,
    front: objective3
  },
  {
    id: 4,
    front: objective4
  },
  {
    id: 5,
    front: objective5
  }
];

const difficultyCardCount = 5;

const version = 'v0.2';
function App(props) {
  return (
    <div className='root-container'>
      <h1>Lost Ruins of Arnak - {version}</h1>
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
      difficultyText: "5 Green Cards", 
      difficulty: 0
    }
  }

  friendlyDifficultyString() {
    var friendlyString = "";
    if (this.state.difficulty % difficultyCardCount === 0) {
      if (this.state.difficulty === 0) {
        friendlyString = "5 Green Cards";
      } else if (this.state.difficulty === 5) {
        friendlyString = "5 Red Cards";
      } else if (this.state.difficulty === 10) {
        friendlyString = "5 Purple Cards";
      }
    } else {
      var normalizedDifficulty =  this.state.difficulty % 5;
      var baseCardCount = difficultyCardCount - normalizedDifficulty;
      if (this.state.difficulty < 5) {   
        friendlyString = baseCardCount + " Green " + this.state.difficulty + " Red Cards";
      } else if (this.state.difficulty > 5) { 
        friendlyString = baseCardCount + " Red " + normalizedDifficulty + " Purple Cards";
      }
    }

    return friendlyString;
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
          marks={true}
          step={1}
          min={0}
          max={10}
          onChange={(e, value) => this.setState(() => ({
            difficultyText: this.friendlyDifficultyString(),
            difficulty: value
          }))}
          onChangeCommitted={(e, value) => this.setState(() => ({
            difficultyText: this.friendlyDifficultyString(),
            difficulty: value
          }))}
        />
      </div>
      <Button variant='contained' color='primary' onClick={() => this.props.onClick(this.state.difficulty)}>Start</Button>
    </div>
    );
  }
}

class GameController extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        selectedDeck: [],
        cardsInDeck: [],
        cardsInDiscard: [],
        selectedObjectives:[],
        difficulty: -1 //if -1, render difficulty selector else render draw piles
      };

      this.onDifficultySelected = this.onDifficultySelected.bind(this);
  }

  onDifficultySelected(selectedDifficulty) {
    var drawPile = BasicCards.slice();

    if (selectedDifficulty % 5 === 0) {
      if (selectedDifficulty === 0) {
        drawPile = shuffle(drawPile.concat(GreenCards));
      } else if (selectedDifficulty === 5) {
        drawPile = shuffle(drawPile.concat(RedCards));
      } else if (selectedDifficulty === 10) {
        drawPile = shuffle(drawPile.concat(PurpleCards));
      }
    } else {
      var selectedCards = [];

      if (selectedDifficulty < 5) {   
        selectedCards = this.selectDifficultyCards(selectedDifficulty, GreenCards.slice(), RedCards.slice());
      } else if (selectedDifficulty > 5) { 
        selectedCards = this.selectDifficultyCards(selectedDifficulty % 5, RedCards.slice(), PurpleCards.slice());
      }

      drawPile = shuffle(drawPile.concat(selectedCards));
    }

    var tempObjectives = this.selectObjectiveCards();

    this.setState(() => ({
      selectedDeck: drawPile.slice(),
      cardsInDeck: drawPile.slice(),
      cardsInDiscard: [],
      selectedObjectives: tempObjectives.slice(),
      difficulty: selectedDifficulty
    }));
  }

  selectDifficultyCards(selectedDifficulty, baseCards, extraCards) {
    var selectedCards = [];
    var i = 1;

    while (i <= selectedDifficulty) {
      var randomExtraIndex = Math.floor(Math.random() * extraCards.length);

      var selectedExtra = extraCards.splice(randomExtraIndex, 1);
      selectedCards.push(selectedExtra[0]);    

      const selectedId = selectedExtra[0].id;
      
      //Remove pair from base cards
      baseCards = baseCards.filter(function (e) {
        return e.id !== selectedId;
      });

      i++;
    }

    selectedCards = selectedCards.concat(baseCards);
    return selectedCards;
  }

  selectObjectiveCards() {
    var tempObjectives = shuffle(ObjectiveCards.slice());
    console.log(tempObjectives);

    tempObjectives.splice(0,2);
    return tempObjectives;
  }

  handleDrawCard() {
    var drawPile = [];
    var newDiscard = [];

    if (this.state.cardsInDeck.length > 0) {
      drawPile = this.state.cardsInDeck.slice();
      newDiscard = this.state.cardsInDiscard.slice(); 
      newDiscard.push(drawPile.splice(drawPile.length - 1, 1)[0]);
    } else {
      //New Round
      drawPile = shuffle(this.state.selectedDeck.slice());
      newDiscard = [];
      var tempObjectives = this.selectObjectiveCards();

      this.setState(() => ({
        selectedObjectives: tempObjectives
      }));
    }
    
    this.setState(() => ({
      cardsInDeck: drawPile,
      cardsInDiscard: newDiscard
    }));
  }

  render() {
    const selectingDifficulty = this.state.difficulty < 0;
    let difficultyComponent;
    let drawComponent;
    let objectivesComponent;

    if (selectingDifficulty) {
      difficultyComponent = <DifficultyController onClick={this.onDifficultySelected}/>;

    } else {
      drawComponent = <DrawPile cards={this.state.cardsInDeck} discard={this.state.cardsInDiscard} name="draw-pile" canDraw ={true} drawIndex={this.state.cardsInDeck.length > 0 ? this.state.cardsInDeck.length-1 : 0} discardIndex={this.state.cardsInDiscard.length > 0 ? this.state.cardsInDiscard.length-1 : 0} onClick={() => this.handleDrawCard()}/>;
      objectivesComponent = <Objectives cards={this.state.selectedObjectives}/>;
    }

    return (
      <div className='cards-container'>
        {difficultyComponent}
        {drawComponent}
        {objectivesComponent}
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
      {console.log(this.props.cards[this.props.drawIndex])}
        <img className="Draw" src={this.props.cards[this.props.drawIndex] ? this.props.cards[this.props.drawIndex].back : null}/>
        <img className="Discard" src={this.props.discard[this.props.discardIndex] ? this.props.discard[this.props.discardIndex].front : null}/>
        <h1>{this.props.cards.length}</h1>
        {this.props.canDraw ? <Button variant='contained' color="primary" onClick={() => this.props.onClick()}>{this.props.cards.length > 0 ? 'Draw' : 'Next Round'}</Button> : null}
      </div>
    );
  }
}

class Objectives extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var objCards = [];
    for (var i = 0; i < this.props.cards.length; i++) {
      objCards.push(<img className="Objectives" src={this.props.cards[i] ? this.props.cards[i].front : null}/>)
    }
    return (
      <div className='Objectives-Container'>
        {objCards}
      </div>
    );
  }
}

export default App;
