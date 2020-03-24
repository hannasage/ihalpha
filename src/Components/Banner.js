import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    bannerContainer: {
        maWidth: '100%',
        /* background: #000000; */
        height: '500px',
        overflow: 'hidden',
        position: 'relative',

        '&:after': {
            content: '""',
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0', 
            background: 'rgb(255,255,255)',
            background: 'radial-gradient(circle, rgba(255,255,255,0) 0%, var(--color-secondary) 80%)',
            opacity: '1'
        }
    },
    bannerImage: {
        position: 'relative',
        maxWidth: 'calc(100% + 50px)',
        margin: '0 20px',
        objectFit: 'cover',
        filter: 'grayscale(100%)',
        opacity: '.33'
        /* opacity: '.35', */
        /* filter: 'blur(10px)' */
    },
    bannerTitleContainer: {
        position: 'absolute',
        userSelect: 'none',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '400px',
        marginLeft: '32px',
        padding: '4%',
        color: 'white',
        letterSpacing: '1px',
        zIndex: '10',

        '& h1': {
            margin: '0 16px',
            fontSize: '50px',
            color: 'var(--color-primary-soft)',
            textShadow: '-3px 4px white'
        },

        '& p': {
            margin: '0 32px',
            fontWeight: '600'
        }
    },
    bannerLink: {
        margin: '32px 16px',
        fontWeight: '200',
        letterSpacing: '2px',
        opacity: '.5',
        userSelect: 'none',
        cursor: 'pointer',
    }
}))

function Banner(props) {

    const classes = useStyles()

    return (
        <div className={classes.bannerContainer}>
            <img className={classes.bannerImage} src={props.img} />
            <div className={classes.bannerTitleContainer}>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
                <p className={classes.bannerLink}>{props.cta}</p>
            </div> 
        </div>
    )
}

export default Banner
