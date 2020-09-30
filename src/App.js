import React, { Component } from 'react';
import './App.css';
import Card from './Components/card.js';
import CollegeList from './colleges.json';

class App extends Component {
  constructor() {
    super();
    this.loadMore = this.loadMore.bind(this);
    this.loadColleges = this.loadColleges.bind(this);
    this.state = {
      data: [],
      start: 0,
      end: 10,
      loading: false,
      prevY: 0,
    };
  }

  componentWillMount() {
    this.loadColleges();
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
  }

  loadColleges = () => {
    const { start, end, data } = this.state;
    var dict = CollegeList["colleges"].slice(start, end)
    this.setState({
      data: [...data, ...dict],
    })
  }

  loadMore = () => {
    this.setState(
      prevState => ({
        start: prevState.start + 10,
        end: prevState.end +10,
      }),
      this.loadColleges
    );
  };

  handleScroll = () => { 
    var pageOffset = window.pageYOffset;
    var remaining = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (pageOffset >= remaining) {
          this.loadMore();
        }
  };

  renderData() {
    const { data } = this.state;
    return(
      <div>
        <ul className='container college-list'>
        {
          data.map((collegeDetail, index) => (
            <li key ={index}>
              <Card collegeDetails = {collegeDetail}/>
            </li>
          ))
        }
        </ul>
        <button onClick={this.loadMore} >
          Load More
        </button>
      </div>
    );
  }

  render() {
    return (
      this.renderData()
    );
  }
}

export default App;
