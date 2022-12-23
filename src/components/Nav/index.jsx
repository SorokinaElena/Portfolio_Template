import React from 'react'
import s from './index.module.css'

export default function Nav() {
  return (
    <nav className={['wrapper', s.nav_block].join(' ')}>
      <div>Home</div>
      <div>About me</div>
      <div>Skills</div>
      <div>Portfolio</div>
      <div>Contacts</div>
    </nav>
  )
}
