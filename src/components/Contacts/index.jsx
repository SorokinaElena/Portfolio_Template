import React from 'react'
import { LinkedinOutlined } from '@ant-design/icons'
import { InstagramOutlined } from '@ant-design/icons'
import { BehanceOutlined } from '@ant-design/icons'
import dribble from './images/dribble.svg'
import s from './index.module.css'

export default function Contacts() {
  return (
    <div className={s.contacts}>
        
        <h2>Contacts</h2>
        <p>Want to know more or just chat? <br /> You are welcome!</p>
        <button>Send message</button>
        <div className={s.icons_container}>
          <a href="https://www.linkedin.com/home" target='_ blank'>
            <LinkedinOutlined className={[s.contacts_icon, s.icon_linkedIn].join(' ')}/>
          </a>
          <a href="https://www.instagram.com/" target='_ blank'>
            <InstagramOutlined className={[s.contacts_icon, s.icon_instagram].join(' ')}/>
          </a>
          <a href="https://www.behance.net/" target='_ blank'>
            <BehanceOutlined className={s.contacts_icon} style={{border: '3px solid black', borderRadius: '6px', fontSize: '33px', padding: '3px 3px 0 3px'}}/>
          </a>  
          <a href="https://dribbble.com/" target='_ blank'>
            <img src={dribble} alt="image" />
          </a>  
        </div>
        <p className={s.like_me}>Like me on <br /> LinkedIn, Instagram, Behance, Dribble</p>
    </div>
  )
}
