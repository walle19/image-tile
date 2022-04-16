import React  from 'react';
import PropTypes from 'prop-types';

import styles from "./Square.module.css";

import placeholder from '../../assets/placeholder-square.jpeg';

import { checkImageURL } from '../../utility/util';

export default function SquareImgComponent({ imgSrc }) {
  let imageContainer;

  if (imgSrc) {
    imageContainer = 
      <img 
        src={checkImageURL(imgSrc) ? imgSrc : require(imgSrc)}
        alt=" "
        className={styles.squareImg}
      />
  } else {
    imageContainer = 
      <img 
        src={placeholder} 
        alt=" "
        className={styles.squarePlaceholder}
      />
  }

  return (
    <div className={styles.container}>
        {imageContainer}
    </div>
  );
}

SquareImgComponent.propTypes = {
  imgSrc: PropTypes.string.isRequired
};

SquareImgComponent.defaultProps = {
  imgSrc: ''
};