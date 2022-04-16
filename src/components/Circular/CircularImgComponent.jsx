import React  from 'react';
import PropTypes from 'prop-types';

import styles from "./Circular.module.css";

import placeholder from "../../assets/placeholder-circular.jpeg";

import { checkImageURL } from '../../utility/util';

export default function CircularImgComponent({ imgSrc }) {
  let imageContainer;

  if (imgSrc) {
    imageContainer = 
      <img 
        src={checkImageURL(imgSrc) ? imgSrc : require(imgSrc)}
        alt=" "
        className={styles.circularImg}
      />
  } else {
    imageContainer = 
      <img 
        src={placeholder} 
        alt=" "
        className={styles.circularPlaceholder}
      />
  }

  return (
    <div className={styles.container}>
        {imageContainer}
    </div>
  );
}

CircularImgComponent.propTypes = {
  imgSrc: PropTypes.string.isRequired
};

CircularImgComponent.defaultProps = {
  imgSrc: ''
};