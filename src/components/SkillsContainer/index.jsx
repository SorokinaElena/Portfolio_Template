import React from 'react'
import {skills} from '../../data/skills/skills'
import SkillItem from '../SkillItem'
import s from './index.module.css'

export default function SkillsContainer() {

  return (
    <div className={s.skills_container}>
        {
            skills.map(el => <SkillItem key={el.id} {...el} />)
        }
    </div>
  )
}
