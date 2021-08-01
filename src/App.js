import logo from './logo.svg';
import { NavBar } from './navigation/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import vader from 'vader-sentiment';
import React, {useState} from 'react';
import fetchSynonym from './utils/wordAPIService';
import './App.css';
import {Input} from './input/Input';


function App() {
  const [userInput, setUserInput] = useState('');
  const [sentimentScore, setSentimentScore] = useState('');
  const [synonym, setSynonym] = useState([])
  
  //can live in results
  const findSentimentScore = () => {
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(userInput);
    setSentimentScore(intensity.compound);
  }

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  //can live in results
  const findSynonym = () => {
    fetchSynonym(userInput).then((value) => {
      setSynonym(value.data);
      console.log('Synonym', synonym);
    });
  }

  return (
    <div className="App">
      <NavBar testFunction={setUserInput}/>
      <header className="App-header">

        <Input 
          userInput={userInput}
          handleInputChange={handleInputChange} 
          findSentimentScore={findSentimentScore}
        />
      
        <p>
            {sentimentScore}
            {console.log(userInput)}
        </p>
      </header>
    </div>
  );
}

export default App;
