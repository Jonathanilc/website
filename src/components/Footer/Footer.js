import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Footer = (props, context) => {
  // const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;