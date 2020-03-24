import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        position: 'relative',
        display: 'flex',
        marginRight: '16px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minWidth: 'calc(1920px * .5 - 250px)',
        height: '345px',
        color: 'white',
        overflow: 'hidden',
        background: 'var(--color-secondary)',

        '&:after': {
            content: '""',
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            background: 'rgb(255,255,255)',
            background: 'linear-gradient(135deg, rgba(28,21,34,1) 25%, rgba(28,21,34,0.8) 60%, rgba(102,46,46,0.5) 100%)'
        }
    },
    titleContainer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '50%',
        flexWrap: 'wrap',
        bottom: '0',
        left: '0',
        zIndex: '1',
        padding: '3% 5%',

        '& h2': {
            fontSize: '2em',
            margin: '0',
            textAlign: 'left',
            lineHeight: '1',
            marginBottom: '8px'
        },
        '& p': {
            margin: '0',
            textAlign: 'left'
        }
    },
    bgimg: {
        position: 'relative',
        maxWidth: 'auto',
        height: '100%',
        objectFit: 'cover',
    }
});

function NewsCard(props) {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
            <img className={classes.bgimg} src={props.img} />
        </div>
    )
}

export default NewsCard
