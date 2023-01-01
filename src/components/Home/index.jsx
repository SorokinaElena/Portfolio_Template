import React from 'react'
import home_photo from './images/home_photo.png'
import s from './index.module.css'

export default function Home() {
  return (
    <div className={['wrapper', s.home].join(' ')}>
        <div className={s.home_content}>
            
            <h1>Denis <br /> Novik</h1>
            <p>UX | UI designer <br /> 24 years old, Minsk</p>
            <h2> <span className={s.ru_text_color}>RU</span> | ENG </h2>
        </div>
        <img src={home_photo} alt="photo" />
        <a name="about_me"></a>
    </div>
  )
}
