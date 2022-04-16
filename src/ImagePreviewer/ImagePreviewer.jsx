import React  from 'react';
import PropTypes from 'prop-types';
import {
  Circular,
  Square,
  Banner
} from '../components';

export default function ImagePreviewer({ 
  src,
  placeholderImgPath, 
  type
}) {

  console.log(`ImgSrc: ${src}`);
  console.log(`Type: ${type}`);

  let previewer;
  if (type === 'banner') {
    previewer = <Banner imgSrc={src} />;
  } else if (type === 'square') {
    previewer = <Square imgSrc={src} />;
  } else {
    previewer = <Circular imgSrc={src} />;
  }

  return (
    <div>
        {previewer}
    </div>
  );
  
}

ImagePreviewer.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string
};

ImagePreviewer.defaultProps = {
  src: '',
  type: 'circular'
};