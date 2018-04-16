import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  backgroundColor: 'blue',
};

export default function A({ thing, ...props }) {
  return <div {...props} style={style} />;
}

A.propTypes = { thing: PropTypes.func.isRequired };
