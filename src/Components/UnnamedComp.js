import React from 'react'
import SectionTabNav from './Subcomponents/SectionTabNav'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import RecentNewsScroller from './RecentNewsScroller';
import UpcomingGamesScroller from './UpcomingGamesScroller';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        maxWidth: '100%',
        height: '450px',
        margin: '0 8px',
        paddingBottom: '16px',
        scrollbarWidth: 'none',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',

        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            margin: '0',
        }
    },
    titlesContainer: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        margin: '24px 0 12px 0',

        [theme.breakpoints.down('sm')]: {
            margin: '16px 0',
            overflowX: 'scroll',
            scrollbarWidth: 'none',

            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }
}))

function UnnamedComp() {

    let tab_titles = [
        {
            title: 'Recent News',
            main: 'home',
            slug: 'recent'
        },
        {
            title: 'Upcoming Matches',
            main: 'home',
            slug: 'upcoming'
        },
        {
            title: 'Friends',
            main: 'home',
            slug: 'friends'
        },
        {
            title: 'Achievements',
            main: 'home',
            slug: 'achievements'
        }
    ]

    const classes = useStyles()

    return (

        <Router>
            <div className={classes.mainContainer}>
                <div className={classes.titlesContainer}>
                    {
                        tab_titles.map(t => 
                            <SectionTabNav title={t.title} main={t.main} slug={t.slug} />
                        )
                    }
                </div>

                <Switch>
                    <Redirect exact from='/home' to='/home/recent' />
                    <Route path="/home/recent">
                        <RecentNewsScroller />
                    </Route>
                    <Route path="/home/upcoming">
                        <UpcomingGamesScroller />
                    </Route>
                    <Route path="/home/friends">
                        <p style={{color: 'white'}}>
                            Friends
                        </p>
                    </Route>
                    <Route path="/home/achievements">
                        <p style={{color: 'white'}}>
                            Achievements
                        </p>
                    </Route>
                </Switch> 
            </div>
        </Router>
    )
}

export default UnnamedComp
