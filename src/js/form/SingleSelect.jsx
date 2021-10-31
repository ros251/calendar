import React, { useState } from 'react'

function SingleSelect(height, width, items) {
  const [focus, setFocus] = useState(false)
  const [selected_index, setSelected_index] = useState(0)
  
  const border_style = focus ? '2px solid #4983bf' : '0'
  const menu_items = items.map((item, index) => {
    return <div onClick={() => {
      setFocus(false)
      setSelected_index(index)
   }} style={{width: '100%', boxSizing: 'border-box', marginTop:'2px', height: height, paddingLeft: '20px', backgroundColor: '#272727'}}>
      {item}
    </div>
  })
  const selected_item = <div style={{wdith: width, height: height, paddingLeft: '20px', backgroundColor: '#272727'}} onClick={() => setFocus(true)}>{items[selected_index]}</div>
  const display_block = focus ? menu_items : selected_item
  return <div style={{position: 'relative', width: width, color:'white', zIndex: '1', border: border_style, backgroundColor: '#121212', borderRadius: '5px'}}>
    {display_block}
    {focus?<span style={{position: 'absolute', top: '2px', right: '2px', color: '#4983bf', fontSize: '14px', fontWeight: 'bold'}}>Icon</span>:null}
  </div>
}
export default SingleSelect