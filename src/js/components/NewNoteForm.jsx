import React, { Component } from 'react'
import makeIcon from '../icons/icon_utilities.jsx'

function NewNoteForm(setNote_bool) {
  const new_note_wrap_styles = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0'
  }
  const new_note_form_styles = {
    top: '100px',
    width: '500px',
    height: '500px',
    margin: '100px auto',
    backgroundColor:'#121212'
  } 
  const close_note_styles = {
    width: '60px',
    height: '60px',
    backgroundColor: 'red'
  }
  
  return <div style={new_note_wrap_styles}>
    <div style={new_note_form_styles}>
      <div style={close_note_styles} onClick={() => {setNote_bool(false)}}></div>
    </div>
  </div>

}
export default NewNoteForm 