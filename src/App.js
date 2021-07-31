import logo from './logo.svg';
import { NavBar } from './navigation/NavBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <NavBar />
      <header className="App-header">
        
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
        </p>
      </header>
    </div>
  );
}

export default App;
