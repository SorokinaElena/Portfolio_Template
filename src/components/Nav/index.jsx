import React from 'react'
import s from './index.module.css'

export default function Nav() {
  return (
    <nav>
      <div className={['wrapper', s.nav_block].join(' ')}>
        <a href='#home'>Home</a>
        <a href='#about_me'>About me</a>
        <a href='#skills'>Skills</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#contacts'>Contacts</a>
      </div>
      <a name='home'></a>
    </nav>
  )
}
