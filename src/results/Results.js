import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Results.css';
import fetchSynonym from '../utils/wordAPIService';
import findWordColor from '../utils/wordHexCalculator';



export class Results extends React.Component {

  findSynonym = () => {
    fetchSynonym(this.props.userInput).then((value) => {
      this.props.setSynonym(value.data);
      console.log('Synonym', this.props.synonym);
    });
  }

  render() {
    return (
      <Card className='resultsTextArea'>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <button onClick={() => findWordColor(this.props.sentimentScore)}>
        Color Me!
        </button>
      </Card>
    )
  }
}