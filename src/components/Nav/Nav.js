
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '@utils/scroll';
import Moveit from '../../utils/moveit';

import './style.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false,
      isOpen: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.onPutMoveit();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false

      });
    }
  }

  onPutMoveit() {
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    const middle = document.getElementById('middle');
    const list = document.getElementById('narrowList');
    Moveit.put(first, {
      start: '0%',
      end: '14%',
      visibility: 1
    });
    Moveit.put(second, {
      start: '0%',
      end: '11.5%',
      visibility: 1
    });
    Moveit.put(middle, {
      start: '0%',
      end: '100%',
      visibility: 1
    });
    list.style.opacity = 0;


  }

  onFold = () => {
    var list = document.getElementById('narrowList');
    if (list.style.opacity === "0") {
      list.style.opacity = 1;
      list.style.transform = 'translateY(0)'
      
    } else {
      
      list.style.opacity = 0;
      list.style.transform = 'translateY(-2em)'
      
    }
  }

  handleClick = () => {
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    const middle = document.getElementById('middle');


    var duration = 0.9, timing = 'cubic-bezier(0.7, 0, 0.3, 1)';


    if (this.state.isOpen) {
      Moveit.animate(first, {
        visibility: 1,
        start: '78%',
        end: '93%',
        duration: duration,
        delay: 0,
        timing: timing
      });
      Moveit.animate(middle, {
        visibility: 1,
        start: '50%',
        end: '50%',
        duration: duration,
        delay: 0,
        timing: timing
      });
      Moveit.animate(second, {
        visibility: 1,
        start: '81.5%',
        end: '94%',
        duration: duration,
        delay: 0,
        timing: timing
      });
      this.setState({ ...this.state, isOpen: !this.state.isOpen });
    } else {
      Moveit.animate(middle, {
        visibility: 1,
        start: '0%',
        end: '100%',
        duration: duration,
        delay: 0,
        timing: timing
      });
      Moveit.animate(first, {
        visibility: 1,
        start: '0%',
        end: '14%',
        duration: duration,
        delay: 0,
        timing: timing
      });
      Moveit.animate(second, {
        visibility: 1,
        start: '0%',
        end: '11.5%',
        duration: duration,
        delay: 0,
        timing: timing
      });
      this.setState({ ...this.state, isOpen: !this.state.isOpen });
    }

    this.onFold();




  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const {
      theme: { colorPrimary, bgPrimary, navAlpha },
      switchTheme
    } = this.context;

    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: navAlpha, color: colorPrimary }
      : { backgroundColor: bgPrimary, color: colorPrimary };
    return (
      <nav
        className={stickyClass}
        ref={(elem) => {
          this.nav = elem;
        }}
        style={stickyStyles}
      >
        <div className="magic-wand bounce-xy" onClick={(e) => switchTheme()}>
          <button className="fas fa-magic fa-lg" href="#" />
          <div className="magic-text">Color Me</div>
        </div>
        <style jsx="true">
          {`
            .menu__item:hover {
              border-bottom: 2px solid ${colorPrimary};
            }
          `}
        </style>
        <div className="menu">
          <div className="menu__item active"
            onClick={(e) => this.scrollToPage('.about-page')}>
            About
          </div>
          <div className="menu__item"
            onClick={(e) => this.scrollToPage('.info-page')}>
            Info
          </div>
          <div className="menu__item"
            onClick={(e) => this.scrollToPage('.portfolio-page')}>
            Portfolio
          </div>
        </div>
        <div className="menu_mobile">
          <div className="button-group">
            <div className="burger-button">
              <svg width="33px" height="33px" viewBox="0 0 99 99" className="svgIcon">
                <path style={{ stroke: colorPrimary }} id="first" d="M 30 40 L 70 40 C 90 40 90 75 60 85 A 40 40 0 0 1 20 20 L 80 80"></path>
                <path style={{ stroke: colorPrimary }} id="middle" d="M 30 50 L 70 50"></path>
                <path style={{ stroke: colorPrimary }} id="second" d="M 70 60 L 30 60 C 10 60 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20"></path>
              </svg>
              <div
                class="trigger"
                onClick={this.handleClick}
              ></div>
            </div>
          </div>
          <div className="narrowList" id = "narrowList">
            <div className="menu__item "
              onClick={(e) => this.scrollToPage('.about-page')}>
              About
            </div>
            <div className="menu__item"
              onClick={(e) => this.scrollToPage('.info-page')}>
              Info
            </div>
            <div className="menu__item"
              onClick={(e) => this.scrollToPage('.portfolio-page')}>
              Portfolio
            </div>
          </div>

        </div>
      </nav>
    );
  }
}

Nav.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Nav;
