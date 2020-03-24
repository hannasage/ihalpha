import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import lol from '../img/lol-logo.png'
import RadialChart from './Subcomponents/RadialChart.js'
import MatchCard from './Subcomponents/MatchCard'

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0 8px',
        borderRadius: '8px'
    },
    logoContainer: {
        margin: '8px 16px',
        maxWidth: '200px',
        maxHeight: '200px',
        height: 'auto',
        display: 'flex'
    },
    logo: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block'
    },
    radialContainer: {
        padding: '0',
        margin: '8px 16px'
    },
    matchesContainer: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: 'auto',
        margin: '2px 0px 2px 16px',
        overflowX: 'scroll',
        scrollbarWidth: 'none',

        '&::-webkit-scrollbar': {
            display: 'none'
        }
    }
}))

function RecentGames() {

    let dummyGames = [
        {
            win: true,
            champ: 'Sett',
            k: 5,
            d: 0,
            a: 12
        },
        {
            win: true,
            champ: 'Sett',
            k: 8,
            d: 2,
            a: 9
        },
        {
            win: false,
            champ: 'Lux',
            k: 0,
            d: 2,
            a: 11
        },
        {
            win: true,
            champ: 'Aphelios',
            k: 12,
            d: 2,
            a: 10
        },
        {
            win: false,
            champ: 'Sett',
            k: 2,
            d: 7,
            a: 11
        },
        {
            win: false,
            champ: 'Aphelios',
            k: 5,
            d: 5,
            a: 3
        },
        {
            win: true,
            champ: 'Sett',
            k: 5,
            d: 0,
            a: 12
        },
        {
            win: true,
            champ: 'Sett',
            k: 8,
            d: 2,
            a: 9
        },
        {
            win: false,
            champ: 'Lux',
            k: 0,
            d: 2,
            a: 11
        },
        {
            win: true,
            champ: 'Aphelios',
            k: 12,
            d: 2,
            a: 10
        },
        {
            win: false,
            champ: 'Sett',
            k: 2,
            d: 7,
            a: 11
        },
        {
            win: false,
            champ: 'Aphelios',
            k: 5,
            d: 5,
            a: 3
        },
    ]

    let classes = useStyles()

    let matches = dummyGames.map(game =>
        <MatchCard 
            win={game.win} 
            champ={game.champ} 
            k={game.k} d={game.d} a={game.a} 
        />
    );

    return (
        <div className={classes.container}>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src={lol} />
            </div>
            <div className={classes.radialContainer}>
                <RadialChart
                    size='140'
                    progress={46}
                />
            </div>
            <div className={classes.matchesContainer}>
                {matches}
            </div>
        </div>
    )
}

export default RecentGames
