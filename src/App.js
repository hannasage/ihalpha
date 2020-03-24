import React from 'react';
import './App.css';
import NavButton from './Components/Subcomponents/NavButton.js'
import Home from './Components/Home.js'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center',
    display: 'flex'
  },
  navigationContainer: {
    backgroundColor: 'var(--color-secondary)',
    color: 'white',
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    zIndex: '1'
  },
  navigationTitle: {
    fontFamily: "'Press Start 2P'",
    width: '100%',
    margin: '0 auto',
    padding: '32px 0',
    color: 'white',
    textShadow: '-3px 4px var(--color-primary)',
    userSelect: 'none'
  },
  teamContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  teamAvis: {
    margin: '80px auto 16px auto'
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
    }
  },
  navigationLinkContainer: {
    width: '250px',
    position: 'relative'
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

  const classes = useStyles();

  const pages = [
    'Home',
    'Team',
    'Friends',
    'Messages',
    'Matches',
    'Tournaments'
  ]

  const navButtons = pages.map(page => 
    <NavLink exact activeClassName={classes.navigationLinkActive} className={classes.navigationLink} to={'/' + page.toLowerCase()}><NavButton text={page} /></NavLink>
  )

  return (
    <div className={classes.app}>
      <Router>
        <div style={{
          width: '100%',
          height: '100%'
          }}>
          <div className={classes.navigationContainer }>
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

            <div className={classes.navigationLinkContainer}>
              {navButtons}
            </div>
          </div>
        </div>
        

        <Switch>
            <Redirect exact from='/' to='/home' />
            <Route path="/home" component={Home}>
                <Home />
            </Route>
            <Route path="/schedule">
                Schedule
            </Route>
            <Route path="/tournaments">
                Tournaments
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
