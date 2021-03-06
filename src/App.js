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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import 'fontsource-roboto';

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

const version = 'v0.67';
class App extends React.Component {
  componentDidMount() {
    document.title = "Arnak Solo";
  }

  render() {
    return (
      <div className='root-container'>
        <Typography align='center' variant='h5'>Lost Ruins of Arnak Solo Helper</Typography>
        <GameController />
      </div> 
    );
  }
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
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();


class GameController extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        selectedDeck: [],
        cardsInDeck: [],
        cardsInDiscard: [],
        numberOfObjectives:3,
        selectedObjectives:[],
        difficulty: -1, //if -1, render difficulty selector else render draw piles
        deviceOrientation: 'portrait'
      };

    this.changedOrientation = this.changedOrientation.bind(this);
    this.onDifficultySelected = this.onDifficultySelected.bind(this);
  }

  changedOrientation() {
    var orientation = 'portrait';
      var type = 'primary';
      var angle = 0;
    if (window.orientation) {
      angle = window.orientation;
      orientation = Math.abs(angle) === 90 ? 'landscape' : 'portrait';
    }

    if (window.screen.orientation) {
      var _window$screen$orient = window.screen.orientation.type.split('-');

      var _window$screen$orient2 = _slicedToArray(_window$screen$orient, 2);

      orientation = _window$screen$orient2[0];

    }

    console.log(orientation);
    this.setState(() => ({
      deviceOrientation: orientation
    }));
  }

  componentDidMount() {
    if (window.screen.orientation && 'onchange' in window.screen.orientation) {
      window.screen.orientation.addEventListener('change', this.changedOrientation);
      this.changedOrientation();
    } else if ('onorientationchange' in window) {
      window.addEventListener('orientationchange', this.changedOrientation);
      this.changedOrientation();
    } else {
      console.warn('No orientationchange events');
    }
  }

  onDifficultySelected(selectedDifficulty, numObjectives, objectivesOn) {
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

    if (!objectivesOn) {
      numObjectives = 0;
    }
    var tempObjectives = objectivesOn ? this.selectObjectiveCards(numObjectives) : [];

    this.setState(() => ({
      selectedDeck: drawPile.slice(),
      cardsInDeck: drawPile.slice(),
      cardsInDiscard: [],
      selectedObjectives: tempObjectives.slice(),
      difficulty: selectedDifficulty,
      numberOfObjectives: numObjectives
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

  selectObjectiveCards(numObjectives) {
    var tempObjectives = shuffle(ObjectiveCards.slice());

    tempObjectives.splice(0, 5 - numObjectives);
    return tempObjectives;
  }

  handleDrawCard() {
    var drawPile = [];
    var newDiscard = [];

    if (this.state.cardsInDeck.length > 0) {
      drawPile = this.state.cardsInDeck.slice();
      newDiscard = this.state.cardsInDiscard.slice(); 
      newDiscard.push(drawPile.splice(drawPile.length - 1, 1)[0]);

      this.setState(() => ({
        cardsInDeck: drawPile,
        cardsInDiscard: newDiscard
      }));
    } else {
      //New Round
      drawPile = shuffle(this.state.selectedDeck.slice());
      newDiscard = [];
      var tempObjectives = this.selectObjectiveCards(this.state.numberOfObjectives);

      this.setState(() => ({
        selectedObjectives: tempObjectives,
        cardsInDeck: drawPile,
        cardsInDiscard: newDiscard
      }));
    }
  }

  render() {
    const selectingDifficulty = this.state.difficulty < 0;
    let difficultyComponent;
    let drawComponent;
    let objectivesComponent;

    let selectedObjNameAddition = this.state.numberOfObjectives > 0 ? '' : '-noobj';
  
    let drawOrientationName = 'draw-pile-' + this.state.deviceOrientation + selectedObjNameAddition;


    if (selectingDifficulty) {
      difficultyComponent = <DifficultyController orientation={this.state.deviceOrientation} onClick={this.onDifficultySelected}/>;

    } else {
      drawComponent = <DrawPile orientation={this.state.deviceOrientation} cards={this.state.cardsInDeck} discard={this.state.cardsInDiscard} name={drawOrientationName} canDraw ={true} drawIndex={this.state.cardsInDeck.length > 0 ? this.state.cardsInDeck.length-1 : 0} discardIndex={this.state.cardsInDiscard.length > 0 ? this.state.cardsInDiscard.length-1 : 0} onClick={() => this.handleDrawCard()}/>;
      objectivesComponent = <Objectives orientation={this.state.deviceOrientation} cards={this.state.selectedObjectives}/>;
    }

    let orientationName = 'cards-container-' + this.state.deviceOrientation;

    return (
      <div className={orientationName}>
        {difficultyComponent}
        {objectivesComponent}
        {drawComponent}
      </div>
    );
  }
}

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize:20
    }
  },
});

class DifficultyController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      difficultyText: "5 Green Cards", 
      difficulty: 0,
      numObjectives: 3,
      objectivesOn: true
    }

    this.toggleObjectives = this.toggleObjectives.bind(this);
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

  toggleObjectives() {
    let toggleState = !this.state.objectivesOn;

    console.log('toggle');
    this.setState(() => ({
      objectivesOn: toggleState
    }));
  }

  render() {
    return (
    <div className='difficulty-container'>
      <Typography id="discrete-slider" gutterBottom>
        Select Difficulty
      </Typography>
      <ThemeProvider theme={theme}>
      <Typography variant='subtitle1' align='center' className="difficulty-text">
          {this.state.difficultyText}
      </Typography>
      </ThemeProvider>
      <div className='slider-container'>
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
      <FormControlLabel
        control={<Checkbox checked={this.state.objectivesOn} onChange={this.toggleObjectives} color='primary' />}
        label="Select Number of Objectives"
      />
      <div className='objectives-slider-container'>
        <Slider
          className='objectives-slider-container'
          defaultValue={3}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          marks={true}
          step={1}
          min={2}
          max={4}
          disabled={!this.state.objectivesOn}
          onChange={(e, value) => this.setState(() => ({
            numObjectives: value
          }))}
          onChangeCommitted={(e, value) => this.setState(() => ({
            numObjectives: value
          }))}
        />
      </div>
      <Button variant='contained' color='primary' onClick={() => this.props.onClick(this.state.difficulty, this.state.numObjectives, this.state.objectivesOn)}>Start</Button>
    </div>
    );
  }
}

class DrawPile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let drawPile;
    let discardPile;
    let tiebreaker;

    let deckDescription;

    let drawPileEmpty = this.props.cards.length <= 0;

    let drawClassName = "Draw-"  + this.props.orientation;
    let discardClassName = "Discard-"  + this.props.orientation;
    let tieClassName = "Tiebreaker-"  + this.props.orientation;


    if (this.props.cards[this.props.drawIndex]) {
      drawPile = <img className={drawClassName} src={this.props.cards[this.props.drawIndex].back}/>
      deckDescription = "Cards Left: " + this.props.cards.length;
    }

    if (this.props.discard[this.props.discardIndex]) {

      if (drawPileEmpty) {
        tiebreaker = <img className={tieClassName} src={this.props.discard[0].back}/>
        deckDescription = "Deck empty: Tiebreaker shown";
      }

      discardPile = <img className={discardClassName} src={this.props.discard[this.props.discardIndex].front}/>
    }

    return (
      <div className={this.props.name}>
        {drawPile}
        {tiebreaker}
        {discardPile}
        <div>
        <Typography variant='h5'>{deckDescription}</Typography>
        {this.props.canDraw ? <Button variant='contained' color="primary" onClick={() => this.props.onClick()}>{this.props.cards.length > 0 ? 'Draw' : 'Next Round'}</Button> : null}
        </div>
      </div>
    );
  }
}

class Objectives extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let containerClassName = 'Objectives-Container-' + this.props.orientation;
    let objectivesImageClassName = 'Objectives-' + this.props.orientation;
    var objCards = [];
    for (var i = 0; i < this.props.cards.length; i++) {
      objCards.push(<img key={i} className={objectivesImageClassName} src={this.props.cards[i] ? this.props.cards[i].front : null}/>)
    }
    return (
      <div className={containerClassName}>
        {objCards}
      </div>
    );
  }
}

export default App;
