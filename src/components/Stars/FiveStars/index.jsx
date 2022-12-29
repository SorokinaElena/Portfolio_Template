import React from 'react'
import Star from '../Star'
import s from './index.module.css'

export default function FiveStars() {

 return (
    <div className={s.stars_container}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
    </div>
  )
}
