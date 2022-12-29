import React from 'react'
import Star from '../Star'
import EmptyStar from '../EmptyStar'
import s from './index.module.css'

export default function OneStar() {

 return (
    <div className={s.stars_container}>
        <Star />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
    </div>
  )
}
