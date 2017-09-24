import React from 'react'
import glamorous from 'glamorous'
import HeroPortrait from './assets/hero-portrait.png'
import genji from './assets/selected-heros/genji.png'
import mccree from './assets/selected-heros/mccree.png'
import pharah from './assets/selected-heros/pharah.png'
import reaper from './assets/selected-heros/reaper.png'
import soldier76 from './assets/selected-heros/soldier-76.png'
import sombra from './assets/selected-heros/sombra.png'
import tracer from './assets/selected-heros/tracer.png'
import bastion from './assets/selected-heros/bastion.png'
import hanzo from './assets/selected-heros/hanzo.png'
import junkrat from './assets/selected-heros/junkrat.png'
import mei from './assets/selected-heros/mei.png'
import torbjorn from './assets/selected-heros/torbjorn.png'
import widowmaker from './assets/selected-heros/widowmaker.png'
import dva from './assets/selected-heros/dva.png'
import reinhardt from './assets/selected-heros/reinhardt.png'
import roadhog from './assets/selected-heros/roadhog.png'
import winston from './assets/selected-heros/winston.png'
import zarya from './assets/selected-heros/zarya.png'
import lucio from './assets/selected-heros/lucio.png'
import mercy from './assets/selected-heros/mercy.png'
import symmetra from './assets/selected-heros/symmetra.png'
import zenyatta from './assets/selected-heros/zenyatta.png'

const images = {
    genji,
    mccree,
    pharah,
    reaper,
    soldier76,
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

const HeroSelections = glamorous.div({
    gridArea: 'selections',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 77px)',
    justifyContent: 'center',
    gridColumnGap: '29px'
})

const Selection = glamorous.div({
    background: `url(${HeroPortrait}) no-repeat`,
    backgroundSize: '100%',
    backgroundPosition: 'center 10px'
})

const Hero = glamorous.div(({ hero }) => ({
    backgroundPosition: 
        hero === 'widowmaker'
        ? `9px 2px`
        : hero === 'soldier76'
            ? '7px 2px'
            : hero === 'tracer' ? '19px 2px' : '18px 2px',
    
    width: '100%',
    height: '96px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '70%',
    clipPath: `polygon(
        100% 0,
        100% 58%,
        79% 58%,
        78% 68%,
        51% 80%,
        22% 68%,
        23% 61%,
        0 0
    )`,
    marginBottom: '10px',
    backgroundImage: `url(${images[hero]})`
}))

const Info = glamorous.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const Name = glamorous.div({
    fontFamily: 'Overwatch',
    fontStyle: 'italic',
    fontSize: '18px',
    color: '#57f2ff',
    marginRight: '3px'
})

const HeroDropdown = glamorous.div({
    width: '11px',
    height: '11px',
    border: '1px solid #fff',
    display: 'flex',
    borderRadius: '9px',
    justifyContent: 'center',
    transform: 'scaleY(-1)',
    '::after': {
        content: '^',
        color: '#fff',
        fontFamily: 'Overwatch'
    }
})

const pretendPlayers = [
    {
        name: 'BlizzardGirl',
        hero: 'mercy'
    },
    {
        name: 'SlayerPlayer',
        hero: 'hanzo'
    },
    {
        name: 'Bobb',
        hero: 'widowmaker'
    },
    {
        name: 'Pha20rah',
        hero: 'soldier76'
    },
    {
        name: 'Meep3r',
        hero: 'tracer'
    }
]

export default ({ hero }) =>
    <HeroSelections>
        <Selection>
            <Hero hero={hero} />
            <Info>
                <Name>Lukosa</Name>
                <HeroDropdown />
            </Info>
        </Selection>
        {pretendPlayers.map(({name, hero }) =>
            <Selection key={name}>
                <Hero hero={hero} />
                <Info>
                    <Name>{name}</Name>
                    <HeroDropdown />
                </Info>
            </Selection>
        )}
    </HeroSelections>