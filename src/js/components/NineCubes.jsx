import React, { Component } from 'react'
const cubewrap_styles = {
  width: '500px'
}

const cube_styles = {
  backgroundColor: '#272727',
  width: '140px',
  height: '140px',
  margin: '5px',
  display: 'inline-block',
  float: 'left'
}
const one_two_cube_styles = {  
  backgroundColor: '#272727',
  width: '140px',
  height: '140px',
  margin: '55px 5px 5px 5px',
  display: 'inline-block',
  float: 'left'
}

const todays_cube_styles = {
  backgroundColor: '#272727',
  width: '190px',
  height: '190px',
  margin: '5px',
  display: 'inline-block',
  float: 'left'
}

const cubes = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
]
const day_str = data['today']['weekday'] + ' ' + data['today']['day'].toString()
function NineCubes() {
  
  const make9Cubes = (cubes) => {
    return (cubes.map((num, index) => {
      if(index == 0 || index == 1){
        return <div style={one_two_cube_styles} key={index}>{num}</div>
      } else if (index == 2){
        return <div style={todays_cube_styles} key={index}>{num}</div>
      } else {
        return <div style={cube_styles} key={index}>{num}</div>
      }
      }))
  }
  return (
    <div id='cubewrap' style={cubewrap_styles}>
      {make9Cubes(cubes)}
    </div>
  )
}
export default NineCubes