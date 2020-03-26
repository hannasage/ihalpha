import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchBar from './Subcomponents/SearchBar';
import ProfileTopBar from './Subcomponents/ProfileTopBar';

const useStyles = makeStyles(theme => ({
    topbarContainer: {
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '24px 12px',
        zIndex: '10',
        background: 'rgb(255,255,255)',
        background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, var(--color-secondary) 100%)',

        [theme.breakpoints.down('lg')]: {
            padding: '24px 30px'
        },

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))

function TopBar() {

    const classes = useStyles()

    return (
        <div className={classes.topbarContainer}>
            <SearchBar />
            <ProfileTopBar />
        </div>
    )
}

export default TopBar
