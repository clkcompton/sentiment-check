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
  const [sentenceSentimentScore, setSentenceSentimentScore] = useState('');
  const [synonym, setSynonym] = useState({})
  const [messageData, setMessageData] = useState([]);
  
  const calculateSentimentScore = (text) => {
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(text);
    return intensity.compound;
  }
  
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }
  
  const submitMessage = () => {
    deconstructMessage();
    setMessage(userInput);
    setSentenceSentimentScore(calculateSentimentScore(userInput));
  }
  
  const deconstructMessage = () => {
    const wordArr = userInput.split(" ");
    const wordDataArr = wordArr.map(word => {
      const wordSentimentScore= calculateSentimentScore(word)
      return {
        word: word,
        sentimentValue: wordSentimentScore,
        hexColor: findWordColor(wordSentimentScore)
      }
    }) 
    setMessageData(wordDataArr);
  }

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">

        <Input
          submitMessage={submitMessage}
          userInput={userInput}
          handleInputChange={handleInputChange} 
        />
      
        <Results 
          messageData={messageData}
          message={message}
          setSynonym={setSynonym}
          synonym={synonym}
          setMessage={setMessage}
          calculateSentimentScore={calculateSentimentScore}
          sentenceSentimentScore={sentenceSentimentScore}
        />
      </header>
    </div>
  );
}

export default App;
