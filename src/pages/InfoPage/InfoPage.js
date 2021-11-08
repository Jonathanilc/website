import React from 'react';
import PropTypes from 'prop-types';
// import ScrollToPrevious from '@components/ScrollToPrevious';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const InfoPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary, textAlternate }
  } = context;

  return (
    <div className="info-page" style={{ backgroundColor: bgPrimary }}>
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
        {/* <ScrollToPrevious pageSelector=".about-page" /> */}
        <h1 style={{ color: colorPrimary }}>Info</h1>
        <div className="info-wrapper">
          <div className="info-content" style={{ color: textPrimary }}>
            <b style={{ color: colorPrimary }}>Frontend Skills</b>
            <ul>
              <li className="tooltip">React</li>
              <li className="tooltip">Redux</li>
              <li className="tooltip">Tailwind CSS</li>
              <li className="tooltip">SASS</li>
              <li className="tooltip">Ant Design frame work</li>
              <li className="tooltip">Material UI</li>
            </ul>
            <br />
          </div>
          <div className="info-content" style={{ color: textPrimary }}>
            <b style={{ color: colorPrimary }}>Backend and Cloud-based Skills</b>
            <ul>
              <li className="tooltip">Python</li>
              <li className="tooltip">Flask Framework</li>
              <li className="tooltip">Node.js</li>
              <li className="tooltip">Express Framework</li>
              <li className="tooltip">AWS lambda func</li>
              <li className="tooltip">AWS API gateway</li>
              <li className="tooltip">AWS dynamoDB</li>
            </ul>
            <br />
          </div>
          <div className="info-content" style={{ color: textPrimary }}>
            <b style={{ color: colorPrimary }}>DevOps Skills</b>
            <ul>
              <li className="tooltip">Circle CI</li>
            </ul>
            <br />
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

InfoPage.contextTypes = {
  theme: PropTypes.any
};

export default InfoPage;
