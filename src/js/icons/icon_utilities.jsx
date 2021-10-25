import React, { Component } from 'react'

import guitar_svg from './guitar.jsx'
import cow_svg from './cow.jsx'
import bike_svg from './bike.jsx'
import pig_svg from './pig.jsx'
import chicken_svg from './chicken.jsx'
import quote_svg from './quote.jsx'
import article_svg from './article.jsx'
import snowboard_svg from './snowboard.jsx'
import leaf_svg from './leaf.jsx'

const ICON = {
  ARTICLE: 'article',
  BIKE: 'bike',
  CHICKEN: 'chicken',
  COW: 'cow',
  GUITAR: 'guitar',
  LEAF: 'leaf',
  PIG: 'pig',
  QUOTE: 'quote',
  SNOWBOARD: 'snowboard'
}

const makeIcon = (icon_tag) => {
  switch (icon_tag) {
    case ICON.ARTICLE:
      return article_svg
    case ICON.BIKE:
      return bike_svg
    case ICON.CHICKEN:
      return chicken_svg
    case ICON.COW:
      return cow_svg
    case ICON.GUITAR:
      return guitar_svg
    case ICON.LEAF:
      return leaf_svg
    case ICON.PIG:
      return pig_svg
    case ICON.QUOTE:
      return quote_svg
    case ICON.SNOWBOARD:
      return snowboard_svg
  }
}
export {makeIcon}
export {ICON}