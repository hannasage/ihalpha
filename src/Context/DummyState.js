import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js'

// DUMMY IMAGES
import tl from '../img/tl.png'
import dig from '../img/dig.png'
import clg from '../img/clg.png'
import thieves from '../img/100t.png'
import tsm from '../img/tsm.png'
import gg from '../img/gg.png'
import c9 from '../img/c9.png'
import eg from'../img/eg.png'
import img1 from '../img/aphelios.jpg'
import img2 from '../img/sett.jpg'
import img3 from '../img/lux.jpg'


const initialState = {
    upcoming: [
        {
            team: 'Clout 9',
            record: '13-1',
            img: c9
        },
        {
            team: 'Clout 9',
            record: '13-1',
            img: c9
        },
        {
            team: 'Digletas',
            record: '5-9',
            img: dig
        },
        {
            team: 'Digletas',
            record: '5-9',
            img: dig
        },
        {
            team: 'E.V.I.L. Genies',
            record: '7-7',
            img: eg
        }
    ],
    fakeNews: [
        {
            title: 'New Champion: Aphelios',
            desc: 'The Weapon of the Faithful',
            img: img1
        },
        {
            title: 'Sett: A new brawl in the Top Lane',
            desc: 'Learn how world-renowed top laners are using Sett',
            img: img2
        },
        {
            title: 'One Sneaky Boi',
            desc: 'How C9-famed ADC went from the rift to OnlyFans',
            img: img3
        }
    ],
    matchHistory: [
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
        }
    ]
}

export const DummyContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(
        <DummyContext.Provider
            value={{
                upcoming: state.upcoming,
                fakeNews: state.fakeNews,
                matchHistory: state.matchHistory
            }}>
            {children}
        </DummyContext.Provider>
    )
}