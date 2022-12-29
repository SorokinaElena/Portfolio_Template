import React from 'react'
import OneStar from '../Stars/OneStar';
import TwoStars from '../Stars/TwoStars';
import ThreeStars from '../Stars/ThreeStars';
import FourStars from '../Stars/FourStars';
import FiveStars from '../Stars/FiveStars';
import s from './index.module.css'

export default function SkillItem({id, image, title, sub_title, rate}) {

  const figma = id === 4 
  ? {
    backgroundColor: 'white',
    width: '90px',
    height: '90px',
  }
  : {
    backgroundColor: 'black',
  };

  const sub_title_margin = id === 4
  ? {
    marginBottom: '58px',
  }
  : {
    marginBottom: '40px'
  }

  const stars_value = (rate) => {
    switch(rate) {

      case 1:  // if (rate === 'value1')
        return <OneStar />;
    
      case 2: 
        return <TwoStars />;
    
      case 3:
        return <ThreeStars />;
      
      case 4:
        return <FourStars />;

      case 5: 
        return <FiveStars />;

    }
  }
  
  return (
    <div className={s.skill_item}>

        <img src={image} alt="image" style={figma}/>
          <h3 className={s.title}>{title}</h3>
          <h3 className={s.sub_title} style={sub_title_margin}>{sub_title}</h3>
        <div>{stars_value(rate)}</div>

    </div>
  )
}
