import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tag extends Component {
  render() {
    const { tagData } = this.props;
    return(
      <div >
        {tagData[0].toUpperCase() + tagData.slice(1)}
      </div>
    );
  }
}

Tag.propTypes = {
  tagData: PropTypes.string,
};
  
Tag.defaultProps = {
  tagData: '',
};

export default Tag;
