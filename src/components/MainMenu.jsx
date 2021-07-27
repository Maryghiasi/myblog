import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {PropTypes} from 'prop-types';

import navStyle from '../styles/navStyle.css';


class MainMenu extends React.Component {
  render() {
    //var
    const {
      homeLabel,
      homeLabel2
    } = this.props;
 


    return (
      <div className='root'>
        <AppBar position="static">
          <Toolbar className='right2left'>
            <IconButton edge="start" className='menuButton' color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Button color="inherit"> {homeLabel2}</Button>
            <Button color="inherit"> {homeLabel}</Button>
          </Toolbar>
        </AppBar>
      </div>

    )
  };
};


MainMenu.propTypes = {
  homeLabel: PropTypes.string,
  homeLabel2: PropTypes.string
}
MainMenu.defaultProps = {
  homeLabel: 'خانه',
  homeLabel2: 'درباره ما'
}

export default MainMenu;
