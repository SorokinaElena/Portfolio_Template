import React from 'react'
import SkillsContainer from '../SkillsContainer'
import s from './index.module.css'

export default function Skills() {
  return (
    <div className={['wrapper', s.skills].join(' ')}>
        <h2>Skills</h2>
        <p>I work in such programs as</p>
        <SkillsContainer />
    </div>
  )
}
