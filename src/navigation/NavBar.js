import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import './NavBar.css';

export class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="mainNavBar" expand="lg">
          <div className="navBrandText">Sentiment Check</div>
      </Navbar>
    )
  }
}
