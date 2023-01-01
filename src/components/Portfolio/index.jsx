import React from 'react'
import {portfolio} from '../../data/portfolio/portfolio'
import PortfolioItem from '../PortfolioItem'
import s from './index.module.css'

export default function Portfolio() {
  return (
    <div className={s.portfolio}>
        <h2>Portfolio</h2>
        <div className='wrapper'>
            {
              portfolio.map(el => <PortfolioItem key={el.id} {...el}/>)
            }
        </div>
        <a name='contacts'></a>
    </div>
  )
}
