import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tag from './tag.js';
import Rating from './rating.js';

// import CollegeData from '../colleges.json';

class Card extends Component {
  convertToCurrency(x){
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers !== '')
        lastThree = ',' + lastThree;
    return (otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree);
  }
  render() {
    const { collegeDetails } = this.props;
    var landmark_array = collegeDetails.famous_nearest_places.split(',')
    return (
      <div className='custom-card'>
        <div className='card-head'>
          <img src = {require(`../${collegeDetails.image}`)} alt='college'></img>
          <div className='overlay'>
            {
              collegeDetails.promoted ? 
              (
                <div className='flag-container'>
                  <div className='flag Text-Style-6'>
                    <span>PROMOTED</span>
                  </div>
                </div>
              ) : null

            }
            <div className='rating-container'>
              <Rating rating = {collegeDetails.rating} ratingRemark = {collegeDetails.rating_remarks} />
            </div>
            <div className='overlay-footer'>
              <div className='tag-container Text-Style-7'>
                {
                  collegeDetails.tags.map((tag, index) => (
                    <div key={index} className='tag'>
                      <Tag tagData = {tag} />
                    </div>
                  ))
                }
              </div>
              <div className='ranking-container'>
                <div className='ranking-text'>
                  {
                    collegeDetails.ranking ? 
                    (
                      '#' + collegeDetails.ranking
                    ) : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <div className='card-body-left'>
            <h4 className='m-0 card-title'>
              {collegeDetails.college_name}
            </h4>
            <p className='Text-Style-7 location-details'>
              {
                collegeDetails.nearest_place.map((description, index) =>(
                  <span key={index} className='nearest-place'>{description}</span>
                ))
              }
            </p>
            <p className='distance-details'>
              <span className='Text-Style-11'>93% Match : </span>
              <span>
                {
                  landmark_array.map( (landmark, index) => (
                    index + 1 === landmark_array.length ?
                    (
                      <span key={index}>
                        <span className='Text-Style-5'>
                          {landmark.slice(0, landmark.indexOf('from'))}
                        </span>
                        <span className='Text-Style-7'>
                          {landmark.slice(landmark.indexOf('from'),)}
                        </span>
                      </span>
                    ) : 
                    (
                      <span key={index}>
                        <span className='Text-Style-5'>
                          {landmark.slice(0, landmark.indexOf('from'))}
                        </span>
                        <span className='Text-Style-7'>
                          {`${landmark.slice(landmark.indexOf('from'),)},`}
                        </span>
                      </span>
                    )
                  ))
                }
              </span>
            </p>
          </div>
          <div className='card-body-right'>
            <div className='original-price  Text-Style-4'>
              <span className='original-fees'>
                &#x20B9;{this.convertToCurrency(collegeDetails.original_fees.toString())}
              </span>
              <span className='discount'>
                {collegeDetails.discount}
              </span>
            </div>
            <div className='discounted-fees Text-Style-9'>
                &#x20B9;{this.convertToCurrency(collegeDetails.discounted_fees.toString())}
            </div>
            <div className='Text-Style-8'>
              {collegeDetails.fees_cycle}
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <div className='offer Text-Style-5'>
            {collegeDetails.offertext.slice(0, collegeDetails.offertext.indexOf('LOGIN'))}
            <a style={{color: '#1999d2', textDecoration: 'none'}} href='#'>
              {collegeDetails.offertext.substring(collegeDetails.offertext.length - 6)}
            </a>
          </div>
          <div className='amenties Text-Style-11'>
            {
              collegeDetails.amenties.map(amenty => (
                <span className='amenty'>
                  {amenty}
                </span>
              ))
            }
            
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  collegeDetails: PropTypes.object,
};

Card.defaultProps = {
  collegeDetails: [],
};

export default Card;
