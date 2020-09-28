import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import CollegeData from '../colleges.json';

class Card extends Component {
  render() {
    const { collegeName } = this.props;
    return (
      <div>
        College Name: {collegeName}
      </div>
    );
  }
}

Card.propTypes = {
  collegeName: PropTypes.string,
};

Card.defaultProps = {
  collegeName: 'College',
};

export default Card;
