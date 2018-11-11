import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I like <span className="highlight">JavaScript</span> and
              everything web.
            </p>
            <p>
              I am recently graduated from <span className="highlight">Unitec Institute of Techonology</span>, and
              I am currently looking for jobs in web development.
            </p>

            <p>
              React.js, Redux, Node.js. I am also obsessed with making the web look pretty with SASS/CSS.
            </p>
            <br /><br /><br />
            <p className="text-emoji" style={{ color: colorPrimary }}>
              (｡◕‿‿◕｡)
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".info-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
