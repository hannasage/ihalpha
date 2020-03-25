import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NewsCard from './Subcomponents/NewsCard';
import img1 from '../img/aphelios.jpg'
import img2 from '../img/sett.jpg'
import img3 from '../img/lux.jpg'
import { DummyContext } from '../Context/DummyState.js'

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
    const { fakeNews } = useContext(DummyContext)
    return (
        <div className={classes.container}>
            {
                fakeNews.map(news => 
                    <NewsCard
                        title={news.title}
                        desc={news.desc}
                        img={news.img} />
                )
            }
        </div>
    )
}

export default RecentNewsScroller
