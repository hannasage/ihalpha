import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GameCard from './Subcomponents/GameCard'
import { DummyContext } from '../Context/DummyState.js'

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
    const { upcoming } = useContext(DummyContext)

    return (
        <div className={classes.container}>
            <div className={classes.scroller}>
                {
                    upcoming.map(game => 
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
