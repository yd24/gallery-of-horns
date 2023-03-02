import React from 'react';
import './App.css';
import data from './data.json';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import FilterByHorns from './FilterByHorns';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        showModal: false,
        beasts: data,
        selectedBeast: {},
        numOfHorns: [],
        sortMethod: "0",
        numHorns: "",
        query: ""
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

  //method 1 = search
  //method 2 = filterHorns
  //method 3 = sort
  updateFiltersSorts = (value, method) => {
    if (method === "search") {
      this.setState({
        query: value
      }, this.filterAndSortBeasts);
    } else if (method === "numHorns") {
      this.setState({
        numHorns: value
      }, this.filterAndSortBeasts);
    } else if (method === "sort") {
      this.setState({
        sortMethod: value
      }, this.filterAndSortBeasts);
    }
  };

  //apply filters and sorts
  filterAndSortBeasts = () => {
    let processedBeasts = data;
    processedBeasts = this.filterBeasts(processedBeasts, this.state.query);
    processedBeasts = this.filterBeastsByHorns(processedBeasts, this.state.numHorns);
    this.sortBeasts(processedBeasts, this.state.sortMethod);
    console.log(processedBeasts);
    this.setState({
      beasts: processedBeasts
    });
  };

  filterBeasts = (beasts, query) => {
    const regex = new RegExp(query, 'i');
    return beasts.filter(beast => regex.test(beast.title) || regex.test(beast.keyword));
  };

  filterBeastsByHorns = (beasts, numHorns) => {
    if (numHorns !== "") {
      return beasts.filter(beast => beast.horns === parseInt(numHorns));
    }
    return beasts;
  };

  sortBeasts = (beasts, sortMethod) => {
    //sortMethod 1 = By most number of horns
    //sortMethod 2 = By least number of horns
    //sortMethod 3 = Alphabetically
    //sortMethod 4 = Reverse Alphabetically
    //sortMethod 5 = By beast type, alphabetically
    //sortMethod 6 = By beast type, reverse alphabetically

    if (sortMethod === "1") {
      beasts.sort((a, b) => b.horns - a.horns);
    } else if (sortMethod === "2") {
      beasts.sort((a, b) => a.horns - b.horns);
    } else if (sortMethod === "3") {
      this.sortAlphabetically(beasts, 'title', 1);
    } else if (sortMethod === "4") {
      this.sortAlphabetically(beasts, 'title', 2);
    } else if (sortMethod === "5") {
      this.sortAlphabetically(beasts, 'keyword', 1);
    } else if (sortMethod === "6") {
      this.sortAlphabetically(beasts, 'keyword', 2);
    }
    return beasts;
  };

  //1 = alphabetically
  //2 = reverse alphabetically
  sortAlphabetically(arr, prop, method) {
    if (method === 1) {
      arr.sort((a, b) => {
        return a[prop].toLowerCase() === b[prop].toLowerCase() ? 0 :
          (a[prop].toLowerCase() > b[prop].toLowerCase() ? 1 : -1);
      });
    } else {
      arr.sort((a, b) => {
        return a[prop].toLowerCase() === b[prop].toLowerCase() ? 0 :
          (a[prop].toLowerCase() < b[prop].toLowerCase() ? 1 : -1);
      });
    }
    return arr;
  }

  render() {
    return (
      <>
        <Header />
        <SearchBar 
          updateFiltersSorts={this.updateFiltersSorts}
        />
        <Container>
          <Row className="justify-content-end align-items-center">
            <FilterByHorns 
              updateFiltersSorts={this.updateFiltersSorts}
              allBeasts={data}
            />
            <SortDropdown 
              updateFiltersSorts={this.updateFiltersSorts}
            />
          </Row>
          <Main 
            showModal={this.state.showModal}
            handleShow={this.handleShow}
            handleClose={this.handleClose}
            beasts={this.state.beasts}
            selectedBeast={this.state.selectedBeast}
          />
        </Container>
        <Footer />
      </>
    ); 
  }
};

export default App;
