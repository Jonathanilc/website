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
            <b style={{ color: colorPrimary }}>Education</b>
            <p>
              Unitec Institute of Techonology<br/><span className="highlight">Bachelor of Computing System</span>
            </p>
            <br />
            <b style={{ color: colorPrimary }}>Skills</b>
            <ul>
              <li className="tooltip">React.js & Redux <span style={{ backgroundColor: colorPrimary, color: textAlternate }} className="tooltiptext">Strong skills with React framework ( 1 year )</span></li>
              <li className="tooltip">REST API <span style={{ backgroundColor: colorPrimary, color: textAlternate }} className="tooltiptext">Familiar with using and writing REST API
</span></li>
              <li className="tooltip">Git Flow <span style={{ backgroundColor: colorPrimary, color: textAlternate }} className="tooltiptext">Nice version control ability</span></li>
              <li className="tooltip">Agile Methodology <span style={{ backgroundColor: colorPrimary, color: textAlternate }} className="tooltiptext">Certificate on Agile and Lean delivery; Enjoy working in Agile team</span></li>
              <li className="tooltip">HTML, CSS, JavaScript <span style={{ backgroundColor: colorPrimary, color: textAlternate }} className="tooltiptext">Strong front_end knowledges</span></li>
              <li className="tooltip">Swift4 <span style={{ backgroundColor: colorPrimary, color: textAlternate }} className="tooltiptext">Interested in IOS Development</span></li>
              <li className="tooltip">C# <span style={{ backgroundColor: colorPrimary, color: textAlternate }} className="tooltiptext">Familiar with ASP.NET core, and MVC Framework</span></li>
            </ul>
            <br />

            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1VbZI1oQC3wxu1QfprZJi4oHNLzoVCCd5/view?usp=sharing" style={{ color: colorPrimary }}><i className="fab fa-google-drive"></i> View my CV here.</a>

            {/* <p className="text-emoji" style={{ color: colorPrimary }}>
              (｡◕‿‿◕｡)
            </p> */}

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
