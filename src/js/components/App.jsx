import React, { Component } from 'react'
import NineCubes from './NineCubes.jsx'
console.log(typeof(data))
const background_styles = {
  width: '1200px',
  height: '742px',
  margin: '20px auto',
  backgroundColor:'#090909'
}
const leftblock_styles = {
  display: 'inline-block',
  width: '600px'
}
const rightblock_styles = {
  display: 'inline-block',
  width: '600px'
}

const weekday_str = data['today']['weekday']
const day_str = data['today']['day'].toString()

function App() {
  return ( 
    <div id='appwrap'>
      <h1>{data['today']['weekday']}</h1>
      <div style={background_styles}>
        <div id='leftblock' style={leftblock_styles}>

        </div>
        <div id='rightblock' style={rightblock_styles}>
          <h1 style={{marginBottom: '-50px', color: 'white', display: 'inline-block', fontSize: '48px'}}>{weekday_str}</h1>
          <h1 style={{marginBottom: '-50px', color: 'white', display: 'inline-block', fontSize: '96px'}}>{day_str}</h1>
          <NineCubes/>
        </div>
      </div>
    </div>
  )
}
export default App