import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        showModal: false,
        beastInfo: {}
    };
  }

  //beastInfo object structure defined in HornedBeast
  handleShow = (beastInfo) => {
    console.log(beastInfo);
    this.setState({
      showModal: true,
      beastInfo: beastInfo
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false
    })
  };

  render() {
    return (
      <>
        <Header />
        <Main 
          showModal={this.state.showModal}
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          beastInfo={this.state.beastInfo}
        />
        <Footer />
      </>
    ); 
  }
};

export default App;
