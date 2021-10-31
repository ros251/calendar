import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {makeIcon, ICON}from '../icons/icon_utilities.jsx'

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
  height: '600px',
  margin: '100px auto',
  backgroundColor:'#525252',
  color: 'white',
  padding: '10px'
} 
const close_note_styles = {
  width: '60px',
  height: '60px',
  backgroundColor: 'red'
}
const tag_styles = {
  fontSize: '24px',
  fontWeight: 'bold',
  position: 'relative',
  display: 'block',
  float: 'left',
  width: '70px',
  top: '50%',
  msTransform: 'translateY(-50%)',
  transform: 'translateY(-50%)'
}
const tall_block_styles = {
  width: '100%',
  height: '150px',
  boxSizing: 'border-box'
}

const short_block_styles = {
  boxSizing: 'border-box',
  width: '100%',
  height: '80px'
}

function NewNoteForm(setNote_bool) {
  const [icon_bool, setIcon_bool] = useState(false)
  const [selected_icon, setSelected_icon] = useState(ICON.GUITAR)
  const [icon_color, setIcon_color] = useState('#A7A7A7')
  
  let icon_group = null
  if (icon_bool) {
    icon_group = <div 
    style={{display:'flex', flexwrap: 'wrap', flexDirection: 'column', overflowX: 'auto', width: '423px', height: '70px', margin: '5px o 5px 5px', display: 'inline-block', float: 'left', backgroundColor: '#060606'}}>
        
      {Object.values(ICON).map((icon_str) => {return <div onClick={() => {
          setSelected_icon(icon_str)
          setIcon_bool(false)
        }} style={{float: 'left',}}> 
          {makeIcon(icon_str)}
        </div>})}
        
    </div>
  } else {
    icon_group = <div>
      <div onClick={() => {setIcon_bool(true)}} style={{height: '70px', width: '157px', margin: '5px', display: 'inline-block', float: 'left', backgroundColor: '#060606'}}>
        {makeIcon(selected_icon)}
      </div>
      <div style={{height: '70px', margin: '5px 0 5px 20px', display: 'inline-block', float: 'left'}}>
        <span style={tag_styles}>Color</span>
      </div>
      <input type='text' maxlength='7' style={{textAlign: 'center', height: '70px', width: '160px', margin: '5px', display: 'inline-block', float: 'left', backgroundColor:'#060606', color:'#FFFFFF', boxSizing: 'border-box', fontSize: '24px'}}></input>
    </div>
  }

  return <div style={new_note_wrap_styles}>
    <div style={new_note_form_styles}>
      <div id='icon_block' style={short_block_styles}>
        <div style={{height: '70px', width: '70px', margin: '5px 0 5px 0', display: 'inline-block', float: 'left'}}>
          <span style={tag_styles}>Icon</span>
        </div>
        {icon_group}
        
      </div>
      <div style={short_block_styles}>
        <span style={tag_styles}>Title</span>
        <input type='text' maxlength='30' style={{fontSize: '24px', position: 'relative', height: '70px', width: '423px', margin: '5px 0 5px 5px', display: 'inline-block', float: 'left', backgroundColor:'#060606', color:'#FFFFFF', boxSizing: 'border-box'}}></input>
      </div>
      <div style={tall_block_styles}>
        <span style={tag_styles}>Text</span>
        <textarea type='text' maxlength='1000' style={{fontSize: '12px', position: 'relative', height: '140px', width: '423px', margin: '5px 0 5px 5px', display: 'inline-block', float: 'left', backgroundColor:'#060606', color:'#FFFFFF', boxSizing: 'border-box'}}></textarea>
      </div>
      <div style={short_block_styles}>
        <span style={tag_styles}>Imgs</span>
        <input style={{position: 'relative', height: '70px', width: '423px', margin: '5px 0 5px 5px', display: 'inline-block', float: 'left', backgroundColor:'#060606', color:'#FFFFFF', boxSizing: 'border-box'}}></input>
      </div>
      <div style={short_block_styles}>
        <span style={tag_styles}>Links</span>
        <input style={{position: 'relative', height: '70px', width: '423px', margin: '5px 0 5px 5px', display: 'inline-block', float: 'left', backgroundColor:'#060606', color:'#FFFFFF', boxSizing: 'border-box'}}></input>
      </div>
      <div style={short_block_styles}>
        <span style={tag_styles}>Tags</span>
        <input style={{position: 'relative', height: '70px', width: '423px', margin: '5px 0 5px 5px', display: 'inline-block', float: 'left', backgroundColor:'#060606', color:'#FFFFFF', boxSizing: 'border-box'}}></input>
      </div>
      <div style={close_note_styles} onClick={() => {setNote_bool(false)}}></div>
      
      {/*<Select value='article'>
        <MenuItem value='article'>Article</MenuItem>
        <MenuItem value='bike'>Bike</MenuItem>
        <MenuItem value='chicken'>Chicken</MenuItem>
        <MenuItem value='cow'>Cow</MenuItem>
        <MenuItem value='guitar'>Guitar</MenuItem>
        <MenuItem value='leaf'>Leaf</MenuItem>
        <MenuItem value='pig'>Pig</MenuItem>
        <MenuItem value='plus'>Plus</MenuItem>
        <MenuItem value='quote'>Quote</MenuItem>
        <MenuItem value='snowboard'>Snowboard</MenuItem>
      </Select>*/}
    </div>
  </div>

}
export default NewNoteForm 