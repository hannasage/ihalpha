import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    navButton: {
        display: 'flex',
        position: 'relative',
        alignContent: 'center',
        fontSize: '1em',
        letterSpacing: '1px',
        fontWeight: '600',
        margin: '.4rem 0',
        padding: '0 1.7rem',
        userSelect: 'none',

        '& p': {
            letterSpacing: '1px',
            fontWeight: '600'
        }
    }
}))

function NavButton(props) {

    const classes = useStyles()

    return (
        <div className={classes.navButton}>
            <p>{props.text.toUpperCase()}</p>
        </div>
    )
}

export default NavButton