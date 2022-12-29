import React from 'react'
import Star from '../Star'
import EmptyStar from '../EmptyStar'
import s from './index.module.css'

export default function FourStars() {

 return (
    <div className={s.stars_container}>
        <Star />
        <Star />
        <Star />
        <Star />
        <EmptyStar />
    </div>
  )
}
