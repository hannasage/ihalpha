import React from 'react'
import { withTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    navButton: {
        color: 'white',
        opacity: '.5',
        padding: '8px 16px',
        fontWeight: '500',
        letterSpacing: '1px',
        transition: '250ms',
        userSelect: 'none',
        textDecoration: 'none',

        '&:before': {
            content: '""',
            width: '0px',
            bottom: '0',
            position: 'absolute',
            borderBottom: '3px solid var(--color-primary)',
            transition: '250ms'
        },

        '&:hover': {
            opacity: '1',
            '&:before': {
                width: '50px'
            },
        },

        [theme.breakpoints.down('sm')]: {
            
        }
    },
    navButtonActive: {
        opacity: '1',

        '&:before': {
            content: '""',
            width: '50px',
            bottom: '0',
            position: 'absolute',
            borderBottom: '3px solid var(--color-primary)',
            transition: '250ms'
        },
    }
  }));

function SectionTabNav(props) {

    const classes = useStyles()

    return (
        <NavLink 
            className={classes.navButton}
            activeClassName={classes.navButtonActive}
            exact
            to={`/${props.main}/${props.slug}`}>
            {props.title}
        </NavLink>
    )
}

export default SectionTabNav
