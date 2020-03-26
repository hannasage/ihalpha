import React, { useState } from 'react';
import './App.css';
import { GlobalProvider } from './Context/DummyState.js'
import NavButton from './Components/Subcomponents/NavButton.js'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from './Components/Home.js'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center',
    display: 'flex',
    
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      overflow: 'hidden',
    }
  },
  navigationContainer: {
    backgroundColor: 'var(--color-secondary)',
    color: 'white',
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    zIndex: '2',

    [theme.breakpoints.down('sm')]: {
      height: '65px',
      width: '100%',
      flexDirection: 'row',
    }
  },
  navigationTitle: {
    fontFamily: "'Press Start 2P'",
    width: '100%',
    margin: '0 auto',
    padding: '32px 0',
    color: 'white',
    textShadow: '-3px 4px var(--color-primary)',
    userSelect: 'none',

    [theme.breakpoints.down('sm')]: {
      margin: 'auto 16px',
      padding: '0',
      width: 'auto',
    }
  },
  teamContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',

  },
  teamAvis: {
    margin: '80px auto 16px auto',
    
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  unfilled: {
    backgroundColor: 'white',
    color: 'var(--color-primary)'
  },
  filled: {
    backgroundColor: 'var(--color-secondary)',
    color: 'white'
  },
  queueButton: {
    border: '2px solid var(--color-primary)',
    fontFamily: "'Press Start 2P'",
    color: 'white',
    padding: '16px',
    width: '60%',
    fontSize: '1em',
    letterSpacing: '1px',
    fontWeight: '600',
    marginBottom: '64px',
    marginLeft: 'auto',
    marginRight: 'auto',
    userSelect: 'none',
    cursor: 'pointer',
    textShadow: '-2px 3px var(--color-primary)',
    transition: '100ms',

    '&:hover': {
      transform: 'translate(4px, -4px)',
      boxShadow: '-4px 4px 0px 0px #FFFFFF'
    },

    '& p': {
      margin: '0'
    },
    
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  menuButton: {
    margin: 'auto 16px',

    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  navigationLinkContainer: {
    width: '250px',
    position: 'relative',
    transition: '250ms',
    backgroundColor: 'var(--color-secondary)',

    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '65px',
      right: '0',
      zIndex: '10', //TODO: Fix interaction w/ banner title
    }
  },
  navigationLink: {
    position: 'relative',
    transition: '350ms',
    textDecoration: 'none',
    color: 'rgba(250, 250, 250, .4)',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  
    '&:hover': {
      color: 'rgba(250, 250, 250, 1)',

      '&:before': { //TODO: Debug this.
        content: '""',
        width: '20%',
        backgroundColor: 'var(--color-primary)'
      }
    }
  },
  navigationLinkActive: {
    color: 'rgba(250, 250, 250, 1)'
  }
}));

function App() {

  const pages = [
    'Home',
    'Team',
    'Friends',
    'Messages',
    'Matches',
    'Tournaments'
  ]

  const classes = useStyles();
  const [navOpen, setNavOpen] = useState(false)
  const openNav = navOpen ? {transform: 'translate(0, 0)'} : {transform: 'translate(250px, 0)'}

  const navButtons = pages.map(page => 
    <NavLink exact activeClassName={classes.navigationLinkActive} className={classes.navigationLink} to={'/' + page.toLowerCase()}><NavButton text={page} /></NavLink>
  )

  const navLinkContainer = () => {
    if (window.innerWidth < 960) {
      return (
        <div style={openNav} className={classes.navigationLinkContainer}>
          {navButtons}
        </div>
      )
    } else {
      return (
        <div className={classes.navigationLinkContainer}>
          {navButtons}
        </div>
      )
    }
  }

  const navigation =
    <div className={classes.navigationContainer}>
      <h3 className={classes.navigationTitle}>inHouse.</h3>

      <div className={classes.teamContainer}>
        <AvatarGroup className={classes.teamAvis}>
          <Avatar className={classes.filled}>KH</Avatar>
          <Avatar className={classes.unfilled}>?</Avatar>
          <Avatar className={classes.unfilled}>?</Avatar>
          <Avatar className={classes.filled} alt="Doublelift">DL</Avatar>
          <Avatar className={classes.filled} alt="CoreJJ">JJ</Avatar>
        </AvatarGroup>
        <div className={classes.queueButton}>
          <p>Queue</p>
        </div>
      </div>

      <IconButton onClick={() => setNavOpen(!navOpen)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      {navLinkContainer()}
    </div>

  return (
    <GlobalProvider>
      <div className={classes.app}>
        <Router>
          <div style={{
            width: '100%',
            height: '100%'
            }}>
            {navigation}
          </div>

          <Switch>
              <Redirect exact from='/' to='/home' />
              <Route path="/home">
                  <Home />
              </Route>
              <Route path="/schedule">
                  {/* Schedule */}
              </Route>
              <Route path="/tournaments">
                  {/* Tournaments */}
              </Route>
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
