import React from 'react';
import './mainpage.css';
import DarkMode from "../../components/darkmode/DarkMode";
import { GlobalState } from "../../redux/types";
import { getDarkMode } from "../../redux/selectors";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// import Products from './products';

interface AppProps {
  darkMode: boolean;
}


function mapStateToProps(state: GlobalState): AppProps {
  return {
    darkMode: getDarkMode(state),
  };
}

function MainPage(props: AppProps) {
  return (
    <div className={`app ${props.darkMode ? 'app--dark-mode' : ''}`}>
      <DarkMode />
      <Link to="/products" className="app__start-button">Start</Link>
    </div>
  );
}

export default connect(mapStateToProps)(MainPage);
