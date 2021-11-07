import { borderRadius } from '@mui/system'
import React, { useState } from 'react'

function Input(height, width, fontsize, text, multi_bool, id) {
  const [focus, setFocus] = useState(false)
  const border_style = focus ? '2px solid #4983bf' : '0'
  const input_styles = {
    border: '0', 
    position: 'absolute', 
    left: '0', 
    width: width, 
    height: height, 
    backgroundColor:'#272727', 
    color: '#FFFFFF', 
    boxSizing: 'border-box', 
    fontSize: fontsize,
    border: border_style,
    borderRadius: '5px'
  }
  let input = null
  if (multi_bool){
    input = <textarea
      id={id}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      type='text' 
      style={input_styles}></textarea>
  } else {
    input = <input
      id={id}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      type='text' 
      style={input_styles}></input>
  }
  return <div style={{position: 'relative', width: width, height: height}}>
    {input}
    {focus?<span style={{position: 'absolute', top: '2px', right: '2px', color: '#4983bf', fontSize: '14px', fontWeight: 'bold'}}>{text}</span>:null}
  </div>
}
export default Input