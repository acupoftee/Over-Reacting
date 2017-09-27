import React from 'react'
import glamorous from 'glamorous'

const Select = glamorous.div({
    gridArea: 'select',
    display: 'flex',
    justifyContent: 'center',
    padding: '100px'
})

const Button = glamorous.button({
    height: '42px',
    width: '120px',
    border: 'none',
    marginTop: '15px',
    fontSize: '22px',
    fontFamily: 'Futura',
    letterSpacing: '2px',
    color: '#fff',
    background: 'rgba(180, 121, 0, 0.7)',
    ':hover': {
        background: '#Df9600'
    }
})

export default () =>
    <Select>
        <Button>SELECT</Button>
    </Select>