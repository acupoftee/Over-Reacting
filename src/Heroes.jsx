import React from 'react'
import glamorous from 'glamorous'
import genji from './assets/heroes/genji.png'
import mccree from './assets/heroes/mccree.png'
import pharah from './assets/heroes/pharah.png'
import reaper from './assets/heroes/reaper.png'
import solder76 from './assets/heroes/solder-76.png'
import sombra from './assets/heroes/sombra.png'
import tracer from './assets/heroes/tracer.png'
import bastion from './assets/heroes/bastion.png'
import hanzo from './assets/heroes/hanzo.png'
import tracer from './assets/heroes/tracer.png'
import junkrat from './assets/heroes/junkray.png'
import mei from './assets/heroes/mei.png'
import torbjorn from './assets/heroes/torbjorn.png'
import widowmaker from './assets/heroes/widowmaker.png'
import dva from './assets/heroes/dva.png'
import reinhardt from './assets/heroes/reinhardt.png'
import roadhog from './assets/heroes/roadhog.png'
import winston from './assets/heroes/winston.png'
import zarya from './assets/heroes/zarya.png'
import lucio from './assets/heroes/lucio.png'
import mercy from './assets/heroes/mercy.png'
import symmetra from './assets/heroes/symmetra.png'
import zenyatta from './assets/heroes/zenyatta.png'
import mercy from './assets/heroes/mercy.png'

const images = {
    genji,
    mccree,
    pharah,
    reaper,
    solder76,
    sombra,
    tracer,
    bastion,
    hanzo,
    junkrat,
    mei,
    torbjorn,
    widowmaker,
    dva,
    reinhardt,
    roadhog,
    zarya,
    winston,
    lucio,
    symmetra,
    zenyatta,
    mercy
}

const Heroes = glamorous.div({
    gridArea: 'heroes',
    display: 'grid',
    gridTemplateColumns: '241px 213px 206px 177px',
    paddingLeft: '75px',
    gridColumnGap: '32px'
})

const Category = glamorous.div({
    display: 'flex',
    alignItems: 'center'
})

const Option = ({ hero, selectHero }) => {
    const clickHandler = () => selectHero(hero)
    const Element = glamorous.div(
        {
            width: '30px',
            height: '44px',
            background: 'black',
            marginRight: '3.2px',
            backgroundSize: 'cover',
            transform: 'skewX(-15deg)',
            transformOrigin: 'bottom left',
            boxShadow: 'inset 0px 2px 0px 0px #fff, inset 0px -1px 0px 0px #fff',
            borderRadius: '3px',
            transitionDuration: '25ms',
            ':hover': {
                transform: 'scale(1.15) skewX(-15deg) translate(-2px, 2px)',
                bowShadow: '0px 0px 0px 3px #fff',
                zIndex: 2
            }  
        },
        ({ hero }) => ({ backgroundImage: `url(${assets[hero]})` })
    )
    return <Element hero={hero} onClick={clickHandler} />
}

const Attack = ({ selectHero }) =>
    <Category>
        <Option hero='tracer' selectHero={selectHero} /> 
        <Option hero='mccree' selectHero={selectHero} />
        <Option hero='pharah' selectHero={selectHero} /> 
        <Option hero='reaper' selectHero={selectHero} /> 
        <Option hero='solder76' selectHero={selectHero} /> 
        <Option hero='genji' selectHero={selectHero} /> 
    </Category>

const Defense = ({ selectHero }) =>
    <Category>
        <Option hero='bastion' selectHero={selectHero} /> 
        <Option hero='hanzo' selectHero={selectHero} />
        <Option hero='junkrat' selectHero={selectHero} /> 
        <Option hero='mei' selectHero={selectHero} /> 
        <Option hero='torbjorn' selectHero={selectHero} /> 
        <Option hero='widowmaker' selectHero={selectHero} /> 
    </Category>

const Tank = ({ selectHero }) =>
    <Category>
        <Option hero='dva' selectHero={selectHero} /> 
        <Option hero='reinhardt' selectHero={selectHero} />
        <Option hero='roadhog' selectHero={selectHero} /> 
        <Option hero='winston' selectHero={selectHero} /> 
        <Option hero='zarya' selectHero={selectHero} /> 
    </Category>

const Support = ({ selectHero }) =>
    <Category>
        <Option hero='lucio' selectHero={selectHero} /> 
        <Option hero='mercy' selectHero={selectHero} />
        <Option hero='symmetra' selectHero={selectHero} /> 
        <Option hero='zenyatta' selectHero={selectHero} /> 
    </Category>

export default ({ selectHero }) =>
    <Heroes>
        <Attack selectHero={selectHero} />
        <Defense selectHero={selectHero} />
        <Tank selectHero={selectHero} />
        <Support selectHero={selectHero} />
    </Heroes>