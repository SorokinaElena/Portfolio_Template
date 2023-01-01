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
            <LinkedinOutlined className={[s.contacts_icon, s.icon_linkedIn].join(' ')}/>
            <InstagramOutlined className={[s.contacts_icon, s.icon_instagram].join(' ')}/>
            <BehanceOutlined className={s.contacts_icon} style={{border: '3px solid black', borderRadius: '6px', fontSize: '33px', padding: '3px 3px 0 3px'}}/>
            <img src={dribble} alt="image" />
        </div>
        <p className={s.like_me}>Like me on <br /> LinkedIn, Instagram, Behance, Dribble</p>
    </div>
  )
}
