import React from 'react'
import { StarFilled } from '@ant-design/icons'
import s from './index.module.css'

export default function EmptyStar() {
  return (
    <div>
        <StarFilled className={s.empty_star}/>
    </div>
  )
}
