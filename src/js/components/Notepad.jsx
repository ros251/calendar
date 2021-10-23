import React, { Component } from 'react'
import makeIcon from '../icons/icon_utilities.jsx'

const notepad_styles = {
  width: '500px',
  height: '500px',
  marginRight: '20px',
  top: '50%',
  msTransform: 'translateY(-50%)',
  transform: 'translateY(-50%)',
  backgroundColor: '#121212',
  position: 'relative',
  borderRadius:'5px',
  float: 'right',
  overflowY: 'scroll',
  overflowX: 'hidden'
}

const note_head_styles = {
  width: '480px',
  margin: '15px 10px 1px 10px',
  height: '60px',
  backgroundColor: '#272727',
  color: 'white',
  borderRadius: '5px'
  
}
const note_body_styles = {
  width: '480px',
  margin: '0px 10px 0px 10px',
  minHeight: '100px',
  backgroundColor:'#272727',
  color: 'white',
  padding: '10px',
  boxSizing: 'border-box',
  borderRadius: '5px'
}

function Notepad(arr){
  const makeNotes = (arr) => {
    return arr.map((icon_str) => {
      return <div style={{borderRadius: '5px'}}>
        <div style={note_head_styles}>
          {makeIcon(icon_str)}
          <span >{icon_str}</span>
        </div>
        <div style={note_body_styles}>
          <p style={{margin: '0'}}>Lots of fake text that will eventually
              be real stuff and it will go right here</p>
        </div>
      </div>
    })
  }
  return <div style={notepad_styles}>
    <div style={{paddingBottom: '100px'}}>
      {makeNotes(arr)}
    </div>
  </div>
}
export default Notepad