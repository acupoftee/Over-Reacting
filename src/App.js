import React, { Component } from 'react';
import glamorous from 'glamorous';
import Game from './Game';
import Heroes from './Heroes';
import HeroSelections from './HeroSelections';
import Select from './Select';
import HeroVideo from './HeroVideo';
import './App.css';

const Container = glamorous.div({
  height: '600px',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '268px 39px 140px 83px 1fr',
  gridTemplateAreas: `"top" "countdown" "selections" "heroes" "select"`
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { hero: 'tracer' }
    this.selectHero = this.selectHero.bind(this)
  }

  selectHero(hero) {
    this.setState(prevState => Object.assign({}, prevState, { hero }))
  }

  render() {
    const { hero } = this.state;
    return (
      <div>
        <HeroVideo hero={hero} />
        <Container>
          <Game hero={hero} />
          <HeroSelections hero={hero} />
          <Heroes selectHero={this.selectHero} />
          <Select />
        </Container>
      </div>
    );
  }
}
export default App;
