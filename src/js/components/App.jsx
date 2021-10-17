import React, { Component } from 'react'
import NineCubes from './NineCubes.jsx'
import guitar_svg from '../icons/guitar.jsx'
import cow_svg from '../icons/cow.jsx'
import bike_svg from '../icons/bike.jsx'
import pig_svg from '../icons/pig.jsx'
import chicken_svg from '../icons/chicken.jsx'
import quote_svg from '../icons/quote.jsx'
import article_svg from '../icons/article.jsx'
import snowboard_svg from '../icons/snowboard.jsx'
import leaf_svg from '../icons/leaf.jsx'

const background_styles = {
  width: '1200px',
  height: '742px',
  margin: '20px auto',
  backgroundColor:'#090909'
}
const leftblock_styles = {
  display: 'inline-block',
  width: '600px'
}
const rightblock_styles = {
  display: 'inline-block',
  width: '600px',
  height: '742px',
  position: 'relative'
}

const weekday_str = data['today']['weekday']
const day_str = data['today']['day'].toString()

function App() {
  return ( 
    <div id='appwrap'>
      <h1>{data['today']['weekday']}</h1>
      <div style={background_styles}>
        <div id='leftblock' style={leftblock_styles}>
          {guitar_svg}
          {cow_svg}
          {pig_svg}
          {chicken_svg}
          {bike_svg}
          {quote_svg}
          {article_svg}
          {snowboard_svg}
          {leaf_svg}
        </div>
        <div id='rightblock' style={rightblock_styles}>
          <h1 style={{margin: '0', color: 'white', display: 'inline-block', fontSize: '48px', position: 'absolute', top: '110px', right: '307px', zIndex: '100'}}>{weekday_str}</h1>
          <h1 style={{margin: '0', color: 'white', display: 'inline-block', fontSize: '96px', position: 'absolute', top: '70px', left: '305px', zIndex: '100'}}>{day_str}</h1>
          <NineCubes/>
        </div>
      </div>
    </div>
  )
}
export default App