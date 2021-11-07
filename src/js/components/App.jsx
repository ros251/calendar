import React, { Component, useState } from 'react'
import NineCubes from './NineCubes.jsx'
import Notepad from './Notepad.jsx'
import plus_svg from '../icons/plus.jsx'
import NoteForm from './NoteForm.jsx'
import {makeIcon} from '../icons/icon_utilities.jsx'
import styles from '../../css/app.css'

let background_styles = {
  width: '1200px',
  height: '742px',
  margin: '20px auto',
  backgroundColor:'#090909',
  filter: 'blur(20px)'
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
const nine_data = data['nine_days_data']
const nine_date_keys = data['nine_date_keys']

function App() {
  const [selected, setSelected] = useState(2)
  const makeDataMatrix = (nine_data) => {
    return nine_data.map((day_data) => {
      return day_data.map((note_data) => {
        return note_data['icon_key']
      })
    }) 
  }
  const data_matrix = makeDataMatrix(nine_data)

  const [note_bool, setNote_bool] = useState(false) 
  const newNoteClick = () => {
    setNote_bool(true)
  }
  let new_note=NoteForm(setNote_bool, nine_date_keys[selected])
  if (note_bool) {
    background_styles = {...background_styles,
      filter: 'blur(20px)'}
  } else {
    background_styles = {...background_styles,
      filter: 'blur(0)'}
    new_note = null
  }
  return ( 
    <div id='appwrap'>
      <div style={background_styles}>
        <div id='leftblock' style={leftblock_styles}>
          {Notepad(nine_data[selected])}
          <div style={add_button_styles} onClick={newNoteClick}>
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
      {new_note}
    </div>
  )
}
export default App