import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
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
<<<<<<< HEAD
        <input value={userInput} onChange={handleChange} placeholder="Type Here"></input>
        <button onClick={findSentimentScore}>Submit</button>
        <button onClick={findSynonym}>Synonyze</button>
        <p>
          {sentimentScore}
          {/* {console.log(userInput)} */}
=======
        
        <Form className="textForm">
          <Form.Group className="mb-3" controlId="formTextarea">
            {/* <Form.Label className="formLabel">What would you like to say?</Form.Label> */}
            <Form.Control as='textarea' size="lg" value={userInput} onChange={handleChange} placeholder="What's happening?"></Form.Control>
          </Form.Group>
          <Button className="formSubmitButton" variant="primary" onClick={findSentimentScore}>Submit</Button>
        </Form>
        <p>
            {sentimentScore}
            {console.log(userInput)}
>>>>>>> main
        </p>
      </header>
    </div>
  );
}

export default App;
