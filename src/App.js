import logo from './logo.svg';
import { NavBar } from './navigation/NavBar';
import { Results } from './results/Results';
import {Input} from './input/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import vader from 'vader-sentiment';
import React, {useState} from 'react';
import './App.css';


function App() {
  const [userInput, setUserInput] = useState('');
  const [sentimentScore, setSentimentScore] = useState(1);
  const [synonym, setSynonym] = useState([])
  
  const calculateSentimentScore = () => {
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(userInput);
    setSentimentScore(intensity.compound);
  }

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <NavBar testFunction={setUserInput}/>
      <header className="App-header">

        <Input 
          userInput={userInput}
          handleInputChange={handleInputChange} 
          calculateSentimentScore={calculateSentimentScore}
        />
      
        <Results 
          userInput={userInput}
          setSynonym={setSynonym}
          synonym={synonym}
          handleInputChange={handleInputChange}
          calculateSentimentScore={calculateSentimentScore}
          sentimentScore={sentimentScore}
        />

        <p>
            {userInput}
            {console.log(userInput)}
        </p>

      </header>
    </div>
  );
}

export default App;
