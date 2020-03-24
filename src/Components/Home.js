import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TopBar from './TopBar'
import Banner from './Banner'
import nlcsBanner from '../img/nlcs.jpg'
import RecentGames from './RecentGames'
import UnnamedComp from './UnnamedComp'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        width: 'calc(100% - 250px)', 
        display: 'flex', 
        flexDirection: 'column', 
        position: 'relative'
    }
}))

function Home() {

    const classes = useStyles()

    return (
        <div className={classes.mainContainer}>
            <TopBar />
            <Banner 
                img={nlcsBanner}
                title='NLCS'
                subtitle='Register for in-houses, now!'
                cta='Learn More >'
            />
            <RecentGames />
            <UnnamedComp />
        </div>
    )
}

export default Home
