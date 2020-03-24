import React from 'react'
// import '../CSS/ProfileTopBar.css'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ForumIcon from '@material-ui/icons/Forum';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'cener',
        justifyContent: 'center'
    },
    name: {
        margin: 'auto 8px',
        fontFamily: 'Roboto',
        letterSpacing: '1px',
        fontWeight: '500',
        color: 'var(--neutral)'
    },
    filled: {
      backgroundColor: 'var(--color-accent)',
      color: 'white'
    },
    center: {
        margin: 'auto 0',
        color: 'var(--color-secondary)'
    },
    badge: {
        backgroundColor: '#9D75E5',
    }
  }));

function ProfileTopBar() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.center} style={{marginRight: '30px'}}>
                <Badge variant='dot' classes={{badge: classes.badge}}>
                    <ForumIcon style={{color: 'var(--neutral'}} />
                </Badge>
                <Badge invisible='true' variant='dot' color='secondary'>
                    <SettingsIcon style={{marginLeft: '10px', color: 'var(--neutral'}}/>
                </Badge>
            </div>
            <Avatar className={classes.filled}>KH</Avatar>
            <p className={classes.name}>KMH</p>
        </div>
    )
}

export default ProfileTopBar
