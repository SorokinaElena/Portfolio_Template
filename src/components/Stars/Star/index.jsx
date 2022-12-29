import React from 'react'
import { StarFilled } from '@ant-design/icons'
import s from './index.module.css'

export default function Star() {
  return (
    <div>
        <StarFilled className={s.star}/>
    </div>
  )
}
