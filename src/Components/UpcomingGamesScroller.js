import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GameCard from './Subcomponents/GameCard'
import tl from '../img/tl.png'
import dig from '../img/dig.png'
import clg from '../img/clg.png'
import thieves from '../img/100t.png'
import tsm from '../img/tsm.png'
import gg from '../img/gg.png'
import c9 from '../img/c9.png'
import eg from'../img/eg.png'

const dummydata = [
    {
        team: 'Clout 9',
        record: '13-1',
        img: c9
    },
    {
        team: 'Clout 9',
        record: '13-1',
        img: c9
    },
    {
        team: 'Digletas',
        record: '5-9',
        img: dig
    },
    {
        team: 'Digletas',
        record: '5-9',
        img: dig
    },
    {
        team: 'E.V.I.L. Genies',
        record: '7-7',
        img: eg
    }
]

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        // margin: '16px',
        overflowX: 'scroll',
        scrollbarWidth: 'none',
        alignItems: 'flex-start',
        animation: `$fadeIn 250ms ${theme.transitions.easing.easeInOut}`,

        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    scroller: {
        width: '25%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',

        [theme.breakpoints.down('lg')]: {
            width: '33%'
        },
    },
    "@keyframes fadeIn": {
        "0%": {
          opacity: 0,
          transform: "translateY(25px)"
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)"
        }
    },
}))

function UpcomingGamesScroller() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.scroller}>
                {
                    dummydata.map(game => 
                        <GameCard
                            team={game.team}
                            record={game.record}
                            img={game.img} />
                    )
                }
            </div>
        </div>
    )
}

export default UpcomingGamesScroller
