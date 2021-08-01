import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Results.css';
import fetchSynonym from '../utils/wordAPIService';
import findWordColor from '../utils/wordHexCalculator';



export class Results extends React.Component {

  findSynonym = () => {
    fetchSynonym(this.props.message).then((value) => {
      this.props.setSynonym(value.data);
      console.log('Synonym', this.props.synonym);
    });
  }

  render() {
    return (
      <Card className='resultsTextArea'>
        <Card.Body>
          {console.log('message', this.props.message.length)}
          <Card.Title>{this.props.message.length === 0 ? "Enter a message!" : "Your results:"}</Card.Title>
          <Card.Text>
            {this.props.message}
            <br/>
            {this.props.sentimentScore}
          </Card.Text>
        </Card.Body>
        <button onClick={() => findWordColor(this.props.sentimentScore)}>
        Color Me!
        </button>
      </Card>
    )
  }
}