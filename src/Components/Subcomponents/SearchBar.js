import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
    container: {
        width: '250px',
        padding: '4px 12px',
        border: '1px solid rgba(117, 62, 218, .2)',
        // opacity: '.2',
        // borderRadius: '10px',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
}))

function SearchBar() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <SearchIcon style={{
                paddingRight: '10px'
            }}/>
            <InputBase placeholder='Search...' style={{
                color: 'white'
            }} />
        </div>
    )
}

export default SearchBar
