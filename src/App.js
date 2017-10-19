import React, { Component } from 'react';
import './App.css';
import Robot from './components/Robot';
import Language from './components/Language';

import {getTranslation} from './translations/text';

class App extends Component {

    constructor() {
        super();
        this.state = {
            language: 'sv',
        }

        this.setLanguage = this.setLanguage.bind(this);
    }

    setLanguage(value) {
        this.setState({
            language: value,
        });

    }

    render() {
        const text = getTranslation(this.state.language)
    return (
      <div className="container text-center">
        <h1>{text.welcome}</h1>
        <hr/>
        <Language language={this.state.language} text={text} setLanguage={this.setLanguage}/>
        <Robot text={text}/>
      </div>
    );
  }
}

export default App;
