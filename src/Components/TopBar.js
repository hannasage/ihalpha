import React from 'react'
import './CSS/TopBar.css'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchBar from './Subcomponents/SearchBar';
import ProfileTopBar from './Subcomponents/ProfileTopBar';

function TopBar() {

    return (
        <div className='topbar-container'>
            <SearchBar />
            <ProfileTopBar />
        </div>
    )
}

export default TopBar
