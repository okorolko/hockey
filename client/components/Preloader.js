import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Preloader = () => (
  <div style={{
      position: 'absolute',
      top: '55%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
  }}>
    <CircularProgress size={50} thickness={4} />
  </div>
);

export default Preloader;
