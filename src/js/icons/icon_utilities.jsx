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

export const ARTICLE = 'article'
export const BIKE = 'bike'
export const CHICKEN = 'chicken'
export const COW = 'cow'
export const GUITAR = 'guitar'
export const LEAF = 'leaf'
export const PIG = 'pig'
export const QUOTE = 'quote'
export const SNOWBOARD = 'snowboard'

const makeIcon = (icon_tag) => {
  switch (icon_tag) {
    case ARTICLE:
      return article_svg
    case BIKE:
      return bike_svg
    case CHICKEN:
      return chicken_svg
    case COW:
      return cow_svg
    case GUITAR:
      return guitar_svg
    case LEAF:
      return leaf_svg
    case PIG:
      return pig_svg
    case QUOTE:
      return quote_svg
    case SNOWBOARD:
      return snowboard_svg
  }
}
export default makeIcon