import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from './Subcomponents/NewsCard';
import img1 from '../img/aphelios.jpg'
import img2 from '../img/sett.jpg'
import img3 from '../img/lux.jpg'

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 'auto',
        margin: '8px',
        display: 'flex',
        overflowX: 'scroll',
        scrollbarWidth: 'none',
        flexDirection: 'row',
        animation: `$fadeIn 250ms ${theme.transitions.easing.easeInOut}`,

        '&::-webkit-scrollbar': {
            display: 'none'
        }
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
}));

function RecentNewsScroller(props) {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <NewsCard 
                title='New Champion: Aphelios' 
                desc='The Weapon of the Faithful'
                img={img1} />
            <NewsCard 
                title='Sett: A new brawl in the Top Lane' 
                desc='Learn how world-renowend top laners are using Sett'
                img={img2} />
            <NewsCard 
                title='One Sneaky Boi' 
                desc='How C9-famed ADC went from the rift to OnlyFans'
                img={img3} />
            <NewsCard 
                title='New Champion: Aphelios' 
                desc='The Weapon of the Faithful'
                img={img1} />
            <NewsCard 
                title='Sett: A new brawl in the Top Lane' 
                desc='Learn how world-renowend top laners are using Sett'
                img={img2} />
        </div>
    )
}

export default RecentNewsScroller
