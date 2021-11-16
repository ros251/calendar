import React, { useState } from 'react'
import {makeIcon, ICON} from '../icons/icon_utilities.jsx'
import Input from '../form/Input.jsx'
import SingleSelect from '../form/SingleSelect.jsx'

const new_note_wrap_styles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  border: '2px solid red'
}
const new_note_form_styles = {
  top: '100px',
  width: '500px',
  height: '600px',
  margin: '100px auto',
  backgroundColor:'#121212',
  color: 'white',
  padding: '10px',
  boxSizing: 'border-box'
} 
const cancel_button_styles = {width:'235px', height: '70px', float:'left', marginTop: '10px', marginRight:'10px', backgroundColor:'#272727', boxSizing: 'border-box'}
const add_button_styles = {width:'235px', height: '70px', float:'left', marginTop: '10px', backgroundColor:'#272727', boxSizing: 'border-box'}
const date_str_styles = {
  fontWeight: 'bold',
  fontSize: '16px',
  position: 'absolute',
  top: '80px',
  left: '50%',
  transform: 'translateX(-250px)'
}


function NoteForm(setNote_bool, date_str, note_id) {
  const [icon_bool, setIcon_bool] = useState(false)
  const [selected_icon, setSelected_icon] = useState(ICON.GUITAR)
  const [icon_color, setIcon_color] = useState('#A7A7A7')
  
  const saveNote = () => {
    const note_obj = {
      note_id: null,
      date_str: date_str,
      icon_key : selected_icon,
      icon_color : document.getElementById('icon_color_input').value,
      structured_data : document.getElementById('structured_data_input').value,
      free_text : document.getElementById('free_text_input').value,
    }
    fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note_obj),
    })
  }
  const cancelNote = () => setNote_bool(false)
  
  const icons = Object.values(ICON).map((icon_str) => {return <div onClick={() => {
    setSelected_icon(icon_str)
    setIcon_bool(false)
  }} style={{float: 'left',}}> 
    {makeIcon(icon_str)}
  </div>})

  return <div style={{color:'white'}}><div style={new_note_wrap_styles}>
  <span style={date_str_styles}>{date_str}</span>
  <div style={new_note_form_styles}>
    <div style={{width:'235px', height: '70px', float:'left', marginRight:'10px', backgroundColor:'#272727', boxSizing: 'border-box'}}>
    {SingleSelect('70px', '235px', icons)}
    </div>
    <div style={{float:'left'}}>
      {Input('70px', '235px', '24px', 'Color', false, 'icon_color_input')}
    </div>
    <div style={{marginTop: '10px', float:'left'}}>
      {Input('70px', '480px', '18px', 'Data', false, 'structured_data_input')}
    </div>
    <div style={{marginTop: '10px', float:'left'}}>
      {Input('140px', '480px', '18px', 'Text', true, 'free_text_input')}
    </div>
    <div style={cancel_button_styles} onClick={cancelNote}>
      <div style={{margin:'auto',
        position: 'relative',
        width: '80px',
        top: '52%',
        msTransform: 'translateY(-50%)',
        transform: 'translateY(-50%)'}}>
        X
      </div>
    </div>
    <div style={add_button_styles} onClick={saveNote}>
      <div style={{margin:'auto',
        position: 'relative',
        width: '80px',
        top: '52%',
        msTransform: 'translateY(-50%)',
        transform: 'translateY(-50%)'}}>
        +
      </div>
    </div>
  </div>
</div></div>
}
export default NoteForm