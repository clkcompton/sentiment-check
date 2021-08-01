import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Input.css';


export class Input extends React.Component {
  render() {
    return(
      <div>
        <Form className="textForm">
            <Form.Group className="mb-3" controlId="formTextarea">
              {/* <Form.Label className="formLabel">What would you like to say?</Form.Label> */}
              <Form.Control 
                as='textarea' 
                size="lg" 
                value={this.props.userInput} 
                onChange={this.props.handleInputChange} 
                placeholder="What's happening?">
              </Form.Control>
            </Form.Group>
            <Button className="formSubmitButton" variant="primary" onClick={this.props.calculateSentimentScore}>Submit</Button>
            {/* <Button className="formSubmitButton" variant="primary" onClick={findSynonym}>Synonize</Button> */}
        </Form>
      </div>
    )
  }
}

