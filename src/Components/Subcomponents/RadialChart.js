import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        display: 'inline-block',
        transition: 'all 0.3s ease-in',

        '& text': {
            fill: 'white',
            fontFamily: 'sans-serif'
        }
    },
    progress: {
        transform: 'rotate(-90deg)',
        transformOrigin: 'center',
        transition: 'all 0.6s cubic-bezier(0.58, 0.16, 0.5, 1.14)',
        transitionDelay: '0.3s'
    },
    total: {
        opacity: 0.3
    },
    centerLabel: {
        fontSize: '2.3rem'
    }
}))

function RadialChart(props) {

    const classes = useStyles()

    let colors = [
        '#1C1D21',
        'rgb(117, 62, 218)'
    ]

    let circ = 2 * 3.14 * (props.size*.4)
    let strokeLength = circ / 100 * props.progress

    return (
        <div className={classes.container}>
            <svg 
                viewBox="0 0 140 140"
                width={props.size}
                height={props.size}
                preserveAspectRatio="xMinYMin meet">
                <g>
                    <circle 
                        className={classes.total}
                        r="40%" 
                        cx="50%" 
                        cy="50%" 
                        fill='none'
                        stroke={colors[0]}
                        strokeWidth='12' />
                    <circle 
                        className={classes.progress}
                        r="40%" 
                        cx="50%" 
                        cy="50%" 
                        fill='none'
                        strokeLinecap={props.cap}
                        strokeDasharray={`${strokeLength},${circ}`}
                        stroke={colors[1]}
                        strokeWidth='12' />
                    <text 
                        className={classes.centerLabel}
                        x="50%" 
                        y="50%" 
                        text-anchor="middle" 
                        dy="0.3em">
                        {props.progress}
                    </text>
                </g>
            </svg>
        </div>
    )
}

export default RadialChart
