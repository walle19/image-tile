import React from 'react';

import ImagePreviewer from '../ImagePreviewer/ImagePreviewer';

export default {
  title: 'Image URL Example',
  component: ImagePreviewer
};

const Template = (args) => <ImagePreviewer {...args} />;

export const Banner = Template.bind({});
Banner.args = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg',
  type: 'banner'
};

export const Circular = Template.bind({});
Circular.args = { 
  src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg',
  type: 'circular'
};

export const Square = Template.bind({});
Square.args = { 
  src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg',
  type: 'square'
};
