import React, { Component, useState } from 'react'
import NineCubes from './NineCubes.jsx'
import Notepad from './Notepad.jsx'
import plus_svg from '../icons/plus.jsx'
import makeIcon from '../icons/icon_utilities.jsx'

const background_styles = {
  width: '1200px',
  height: '742px',
  margin: '20px auto',
  backgroundColor:'#090909'
}
const leftblock_styles = {
  display: 'inline-block',
  width: '600px',
  height: '742px',
  position: 'relative'
}
const rightblock_styles = {
  display: 'inline-block',
  width: '600px',
  height: '742px',
  position: 'relative'
}

const add_button_styles = {
  width: '90px',
  height: '90px',
  borderRadius: '100%',
  backgroundColor: '#868686',
  position: 'absolute',
  bottom: '90px',
  left: '50px'
}

const weekday_str = data['today']['weekday']
const day_str = data['today']['day'].toString()

function App() {
  const [selected, setSelected] = useState(2)
  const [data_matrix, setData_matrix] = useState([
    ['cow', 'bike', 'quote'], 
    ['guitar'], 
    ['leaf', 'guitar', 'article'],
    [],
    ['pig'],
    ['guitar'], 
    [],
    ['guitar'],
    [] 
  ])
  return ( 
    <div id='appwrap'>
      <h1>{data['today']['weekday']}</h1>
      <div style={background_styles}>
        <div id='leftblock' style={leftblock_styles}>
          {Notepad(data_matrix[selected])}
          <div style={add_button_styles} onClick={()=>{console.log("ADD STUFF")}}>
            <div style={{margin:'auto',
              position: 'relative',
              width: '80px',
              top: '52%',
              msTransform: 'translateY(-50%)',
              transform: 'translateY(-50%)'}}>
              {plus_svg}
            </div>
          </div>
        </div>
        <div id='rightblock' style={rightblock_styles}>
          <h1 style={{margin: '0', color: 'white', display: 'inline-block', fontSize: '48px', position: 'absolute', top: '110px', right: '307px', zIndex: '100'}}>{weekday_str}</h1>
          <h1 style={{margin: '0', color: 'white', display: 'inline-block', fontSize: '96px', position: 'absolute', top: '70px', left: '305px', zIndex: '100'}}>{day_str}</h1>
          {NineCubes(selected, setSelected, data_matrix)}
        </div>
      </div>
    </div>
  )
}
export default App