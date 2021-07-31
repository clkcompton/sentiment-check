import logo from './logo.svg';
import vader from 'vader-sentiment';
import React, {useState} from 'react';
import fetchSynonym from './utils/wordAPIService';
import './App.css';

require('dotenv').config();


function App() {
  const [userInput, setUserInput] = useState('');
  const [sentimentScore, setSentimentScore] = useState('');
  const [synonym, setSynonym] = useState([])
  

  const findSentimentScore = () => {
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(userInput);
    setSentimentScore(intensity.compound);
  }

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const findSynonym = () => {
    console.log('key', process.env.WORD_API_KEY);

    fetchSynonym(userInput).then((value) => {
      setSynonym(value.data);
      console.log('Synonym', synonym);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <input value={userInput} onChange={handleChange} placeholder="Type Here"></input>
        <button onClick={findSentimentScore}>Submit</button>
        <button onClick={findSynonym}>Synonyze</button>
        <p>
          {sentimentScore}
          {/* {console.log(userInput)} */}
        </p>
      </header>
    </div>
  );
}

export default App;
