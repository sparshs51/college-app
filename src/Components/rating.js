import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating, ratingRemark } = this.props;
    return(
      <div>
        <div>
          <span className='Text-Sty'>{rating}</span>
          <span className='Text-Style-3'>/5</span>
        </div>
        <div className='Text-Style-3 '>
          {ratingRemark}
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
  ratingRemark: PropTypes.string,
};
  
Rating.defaultProps = {
  rating: 0,
  ratingRemark: '',
};

export default Rating;
