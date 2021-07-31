import logo from './logo.svg';
import vader from 'vader-sentiment';
import './App.css';

function test() {
  const input = 'carrot';
  const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
  return JSON.stringify(intensity);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {test()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
