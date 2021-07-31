import logo from './logo.svg';
import vader from 'vader-sentiment';
import React, {useState} from 'react';
import './App.css';



function App() {
  const [userInput, setUserInput] = useState('');
  const [sentimentScore, setSentimentScore] = useState('');

  const findSentimentScore = () => {
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(userInput);
    setSentimentScore(intensity.compound);
  }

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        
 
        <input value={userInput} onChange={handleChange} placeholder="Type Here"></input>
        <button onClick={findSentimentScore}>Submit</button>
        <p>
          {sentimentScore}
          {console.log(userInput)}
        </p>
      </header>
    </div>
  );
}

export default App;
