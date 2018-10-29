import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  backgroundColor: 'darkkhaki'
};

export default function A({ thing, backgroundColor, ...props }) {
  let computedStyle = style;
  if (backgroundColor) {
    computedStyle = { ...style, backgroundColor };
  }

  return <div {...props} style={computedStyle} />;
}

A.propTypes = { thing: PropTypes.func.isRequired };
