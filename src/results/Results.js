import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Results.css';
import fetchSynonym from '../utils/wordAPIService';

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
          <Card.Title>{this.props.message.length === 0 ? "Enter a message!" : "Your results:"}</Card.Title>
          <Card.Text>
            <span style={{backgroundColor: this.props.hexColor}}>
              {this.props.message}
            </span>
            <br/>
            {this.props.sentimentScore}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}