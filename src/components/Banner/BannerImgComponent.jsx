import React  from 'react';
import PropTypes from 'prop-types';

import styles from "./Banner.module.css";

import placeholder from '../../assets/placeholder-banner.jpeg';

import { checkImageURL } from '../../utility/util';

export default function BannerImgComponent({ imgSrc }) {
  let imageContainer;

  if (imgSrc) {
    imageContainer = 
      <img 
        src={checkImageURL(imgSrc) ? imgSrc : require(imgSrc)}
        alt=" "
        className={styles.bannerImg}
      />
  } else {
    imageContainer = 
      <img 
        src={placeholder} 
        alt=" "
        className={styles.bannerPlaceholder}
      />
  }

  return (
    <div className={styles.container}>
        {imageContainer}
    </div>
  );
}

BannerImgComponent.propTypes = {
  imgSrc: PropTypes.string.isRequired
};

BannerImgComponent.defaultProps = {
  imgSrc: ''
};