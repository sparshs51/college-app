import React, { Component } from 'react';
import './App.css';
import Card from './cardUI/card.js';
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
    var lastLi = document.querySelector("ul.container > li:last-child");
    var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    var pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset > lastLiOffset) {
          this.loadMore();
        }
  };

  renderData() {
    const { data } = this.state;
    return(
      <div>
        <ul className='container'>
        {
          data.map((collegeDetail, index) => (
            <li key ={index}>
              <Card collegeName = {collegeDetail.college_name} />
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
