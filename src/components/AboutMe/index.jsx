import React from 'react'
import s from './index.module.css'

export default function AboutMe() {
  return (
    <div className={s.about_me}>
        <h2>About me</h2>
        <div className={s.about_me_content}>
            <p>Hi, I'm Denis – UX/UI designer from Minsk. <br /> I'm interested in design and everything connected with it.</p>
            <p>I'm studying at courses "Web and mobile design <br /> interfaces" in IT-Academy.</p>
            <p>Ready to implement excellent projects <br /> with wonderful people.</p>
        </div>
    </div>
  )
}
