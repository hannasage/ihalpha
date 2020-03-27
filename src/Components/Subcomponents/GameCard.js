import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        color: 'rgba(200, 200, 200, 1)',
        width: '100%',
        height: '100px',
        margin: '8px',
        // backgroundColor: 'rgba(200, 200, 200, .2)',
        transition: '100ms',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'left',
        cursor: 'pointer',
        
        [theme.breakpoints.up('md')]: {
            '&:hover': {
                transform: 'translate(4px, -4px)',
                boxShadow: '-4px 4px 0px 0px var(--color-primary-soft)'
            },
        },

        [theme.breakpoints.down('sm')]: {
            margin: '2px 0'
        }
    },
    icon: {
        backgroundColor: 'rgba(200, 200, 200, 1)',
        width: theme.spacing(8),
        height: theme.spacing(8),
        margin: '8px 8px 8px 16px',
    },
    title: {
        margin: '0 8px',
        userSelect: 'none',

        '& p': {
            margin: '0'
        },
        '& h2': {
            margin: '0',
            fontSize: '1.3em',
        }
    },
    time: {
        margin: '0 16px 0 auto',
        fontSize: '12px',
        fontStyle: 'italic',
        fontWeight: '700',
        opacity: '.5'
    }
}))

function GameCard(props) {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Avatar 
                variant='circle'
                className={classes.icon}
                src={props.img} />
            <div className={classes.title}>
                <h2>{props.team}</h2>
                <p>{props.record}</p>
            </div>
            <div className={classes.time}>
                <p>14:00 EDT</p>
            </div>
        </div>
    )
}

export default GameCard