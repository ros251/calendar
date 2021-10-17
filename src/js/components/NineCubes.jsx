import React, { Component } from 'react'
const cubewrap_styles = {
  width: '500px',
  margin: '0',
  position: 'absolute',
  top: '50%',
  msTransform: 'translateY(-50%)',
  transform: 'translateY(-50%)'
}

const cube_styles = {
  backgroundColor: '#272727',
  width: '140px',
  height: '140px',
  margin: '5px',
  display: 'inline-block',
  float: 'left',
  fontWeight: 'bold'
}
const one_two_cube_styles = {  
  backgroundColor: '#272727',
  width: '140px',
  height: '140px',
  margin: '55px 5px 5px 5px',
  display: 'inline-block',
  float: 'left',
  fontWeight: 'bold'
}

const todays_cube_styles = {
  backgroundColor: '#272727',
  width: '190px',
  height: '190px',
  margin: '5px',
  display: 'inline-block',
  float: 'left',
}

function NineCubes() {
  const make9Cubes = (cubes) => {
    let the_cube_styles = {}
    return (cubes.map((num, index) => {
      if(index == 0 || index == 1){
        the_cube_styles = one_two_cube_styles
      } else if (index == 2){
        the_cube_styles = todays_cube_styles
      } else {
        the_cube_styles = cube_styles
      }
      return <div style={the_cube_styles} key={index}>
        <p style={{float:'right', fontWeight: 'bold', margin: '0'}}>{num}</p>
      </div>
    }))
  }
  return (
    <div id='cubewrap' style={cubewrap_styles}>
      {make9Cubes(data['nineDays'])}
    </div>
  )
}
export default NineCubes