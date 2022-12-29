import React from 'react'
import s from './index.module.css'

export default function PortfolioItem({image, title, href}) {
  return (
    <div className={s.portfolio_item}>
        <img src={image} alt='image' />
        <a href={href} target='_ blank'>{title}</a>
    </div>
  )
}
