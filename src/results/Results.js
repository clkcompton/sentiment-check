import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './Results.css';
import fetchSynonym from '../utils/wordAPIService';

export class Results extends React.Component {

  findSynonym = word => {
    fetchSynonym(word).then((value) => {
      this.props.setSynonym(value.data);
      console.log('Synonym', this.props.synonym);
    });
  }

  displayMessageData = () => {
    return (
      this.props.messageData.map((element, index) => {
        return (
          <span key={index} style={{backgroundColor: element.hexColor, cursor: 'pointer'}} onClick={() => this.findSynonym(element.word)}>
            {element.word + " "}
          </span>
        )
      })
    )
  }

  swapWord = (element, index) => {
    this.props.setUserInput(this.props.userInput.replace(this.props.synonym.word, element));
    console.log('swap', this.props.userInput.replace(this.props.synonym.word, element));
    document.getElementById('helper-text').style.visibility = "visible"
  }

  displaySynonyms = () => {
    if(this.props.synonym.synonyms){
      return (
        this.props.synonym.synonyms.map((element, index) => {
          return (
            <Dropdown.Item key={index} onClick={() => this.swapWord(element, index)}>{element}</Dropdown.Item>
          )
        })
      )
    }
  }

  render() {
    return (
      <Card className='resultsTextArea'>
        <Card.Body>
          <Card.Title>{this.props.message.length === 0 ? "Enter a message!" : `Your score: ${Math.floor(this.props.sentenceSentimentScore * 100)}%`}</Card.Title>
          <Card.Text>
            {this.displayMessageData()}
            <br/>
            <br/>
              <DropdownButton title={this.props.synonym.synonyms ? `Select a synonym for ${this.props.synonym.word}` : "Click a word for synonyms!"} disabled={!this.props.message} id="dropdown-basic-button" >
                {this.displaySynonyms()}
              </DropdownButton> 
              <span style={{fontSize: '12px', marginTop: '20px', visibility: "hidden"}} id="helper-text">
                Click Submit to see your changes
              </span>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}