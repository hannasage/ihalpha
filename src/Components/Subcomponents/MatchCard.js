import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import img1 from '../../img/aphelios.jpg'
import img2 from '../../img/sett.jpg'
import img3 from '../../img/lux.jpg'
import { Avatar } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    winlossBar: {
        height: '10px',
        width: '100%',
        // background: bgcolor,
        marginBottom: '8px'
    },
    aviCircle: {
        border: '1px solid black',
        height: '50px',
        width: '50px',
        margin: '8px',
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.11)'
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        minWidth: '150px',
        minHeight: '175px',
        margin: '0 2px',
        color: 'white',
        opacity: '.5',
        transition: '250ms',
        userSelect: 'none',

        '&:hover': {
            opacity: '1',
            cursor: 'pointer',
        }
    },
    textContainer: {
        padding: '16px',

        '& p': {
            fontSize: '1em',
            letterSpacing: '1px',
            fontWeight: '600',
            userSelect: 'none',
            color: 'white',
            margin: '0'
        }
    }
}))

function MatchCard(props) {

    let avi
    switch (props.champ) {
        case 'Aphelios':
          avi = img1
          break
        case 'Sett':
          avi = img2
          break
        case 'Lux':
          avi = img3
          break
        default:
          avi = img1
    }

    let kda
    if (props.d === 0) {
        kda = props.k + props.a / 1
    } else {
        kda = props.k + props.a / props.d
    }

    const bgcolor = props.win ? '#4a96ff' : '#ff4a4a'
    const classes = useStyles()

    return (
        <div className={classes.cardContainer}>
            <div 
                className={classes.winlossBar}
                style={{background: bgcolor}} />
            <Avatar 
                src={avi}
                className={classes.aviCircle} />
            <div className={classes.textContainer}>
                <p>{props.champ}</p>
                <p>{props.k}/{props.d}/{props.a}</p>
                <p>{Math.round(kda * 10) / 10} KDA</p>
            </div>
        </div>
    )
}

export default MatchCard
