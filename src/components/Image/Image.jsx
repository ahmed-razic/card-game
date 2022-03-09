import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ url }) => (
  <div>
    <img src={url} alt='' width='200' />
  </div>
);

Image.propTypes = {
  url: PropTypes.string.isRequired,
};
export default Image;
