import React, { Component } from 'react'
import {makeIcon} from '../icons/icon_utilities.jsx'

let cubewrap_styles = {
  width: '500px',
  margin: '0',
  position: 'absolute',
  top: '50%',
  msTransform: 'translateY(-50%)',
  transform: 'translateY(-50%)'
}

let cube_styles = {
  backgroundColor: '#272727',
  width: '140px',
  height: '140px',
  margin: '5px',
  display: 'inline-block',
  float: 'left',
  fontWeight: 'bold',
  padding: '10px',
  boxSizing: 'border-box',
  borderRadius: '5px'
}
let one_two_cube_styles = {  
  backgroundColor: '#272727',
  width: '140px',
  height: '140px',
  margin: '55px 5px 5px 5px',
  display: 'inline-block',
  float: 'left',
  fontWeight: 'bold',
  padding: '10px',
  boxSizing: 'border-box'
}

let todays_cube_styles = {
  backgroundColor: '#272727',
  width: '190px',
  height: '190px',
  margin: '5px',
  display: 'inline-block',
  float: 'left',
  padding:'60px 35px 10px 10px',
  boxSizing: 'border-box'
}

function NineCubes(selected, setSelected, icon_matrix) {
  const cubeClick = (index) => {
    setSelected(index)
    console.log(selected)
  }
  const makeCube = (num, index, icons_arr) => {
    let the_cube_styles = {}
    if (index == 0 || index == 1){
      the_cube_styles = one_two_cube_styles
    } else if(index == 2){
      the_cube_styles = todays_cube_styles
    } else {
      the_cube_styles = cube_styles
    }
    if (index==selected){
      the_cube_styles = {
        ...the_cube_styles,
        border: '1px solid red'
      }
    }
    let icons = icons_arr.map((icon_tag, index) => {
      return (
        <div style={{float: 'left'}}>
          {makeIcon(icon_tag)}    
        </div>
      )
    })
    return <div style={the_cube_styles} key={index} onClick={()=>{cubeClick(index)}}>
       {/*<p style={{float:'right', fontWeight: 'bold', margin: '0'}}>{num}</p> <p style={{float:'right', fontWeight: 'bold', margin: '0'}}>{num}</p>*/}
      {icons} 
    </div>
  }

  const make9Cubes = (cubes) => {
    return (cubes.map((num, index) => {
      return makeCube(num, index, icon_matrix[index])
    }))
  }
  return (
    <div id='cubewrap' style={cubewrap_styles}>
      {make9Cubes(data['nineDays'])}
    </div>
  )
}
export default NineCubes