import React from 'react';

import ImagePreviewer from '../ImagePreviewer/ImagePreviewer';

export default {
  title: 'Placeholder Example',
  component: ImagePreviewer
};

const Template = (args) => <ImagePreviewer {...args} />;

export const Banner = Template.bind({});
Banner.args = {
  src: '',
  type: 'banner'
};

export const Circular = Template.bind({});
Circular.args = { 
  src: '',
  type: 'circular'
};

export const Square = Template.bind({});
Square.args = { 
  src: '',
  type: 'square'
};