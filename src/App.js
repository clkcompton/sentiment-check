import logo from './logo.svg';
import vader from 'vader-sentiment';
import React, {useState} from 'react';
import './App.css';



function App() {
  const [userInput, setUserInput] = useState('');

  const test = () => {
    const input = 'carrot';
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
    return JSON.stringify(intensity);
  }

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        
 
        <input value={userInput} onChange={handleChange} placeholder="Type Here"></input>
        <p>
          {test()}
          {console.log(userInput)}
        </p>
      </header>
    </div>
  );
}

export default App;
