import React from 'react';
import './App.css';
import data from './data.json';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SearchBar from './SearchBar';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        showModal: false,
        beasts: data,
        selectedBeast: {},
    };
  }

  //beastInfo object structure defined in HornedBeast
  handleShow = (selectedBeast) => {
    this.setState({
      showModal: true,
      selectedBeast: selectedBeast
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false
    });
  };

  filterBeasts = (query) => {
    const regex = new RegExp(query, 'i');
    const searchedBeasts = data.filter(beast => regex.test(beast.title) || regex.test(beast.keyword));
    this.setState({
        beasts: searchedBeasts
    })
  };

  render() {
    return (
      <>
        <Header />
        <SearchBar 
          filterBeasts={this.filterBeasts}
        />
        <Main 
          showModal={this.state.showModal}
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          beasts={this.state.beasts}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </>
    ); 
  }
};

export default App;
