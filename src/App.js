import logo from './logo.svg';
import { NavBar } from './navigation/NavBar';
import { Results } from './results/Results';
import {Input} from './input/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import vader from 'vader-sentiment';
import React, {useState} from 'react';
import './App.css';
import findWordColor from './utils/wordHexCalculator';


function App() {
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [sentimentScore, setSentimentScore] = useState('');
  const [synonym, setSynonym] = useState([])
  const [hexColor, setHexColor] = useState('');
  
  const calculateSentimentScore = () => {
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(userInput);
    setSentimentScore(intensity.compound);
    setHexColor(findWordColor(intensity.compound));
  }

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <NavBar testFunction={setUserInput}/>
      <header className="App-header">

        <Input
          setMessage={setMessage}
          userInput={userInput}
          handleInputChange={handleInputChange} 
          calculateSentimentScore={calculateSentimentScore}
        />
      
        <Results 
          message={message}
          hexColor={hexColor}
          setSynonym={setSynonym}
          synonym={synonym}
          setMessage={setMessage}
          calculateSentimentScore={calculateSentimentScore}
          sentimentScore={sentimentScore}
        />
      </header>
    </div>
  );
}

export default App;
