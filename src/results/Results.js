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

  displayMessageData = () => {
    return (
      this.props.messageData.map((element, index) => {
        return (
          <span key={index} style={{backgroundColor: element.hexColor}}>
            {element.word + " "}
          </span>
        )
      })
    )
  }

  render() {
    return (
      <Card className='resultsTextArea'>
        <Card.Body>
          <Card.Title>{this.props.message.length === 0 ? "Enter a message!" : "Your results:"}</Card.Title>
          <Card.Text>
            {this.displayMessageData()}
            <br/>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}