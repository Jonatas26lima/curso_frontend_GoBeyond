import React from 'react'
import {imageSite4} from '../data'
import './style.css'

function Site4 () {  
  

  return (

    <section>   
      
      <div>
        <div className="content__01">
          <h2>{imageSite4.title}</h2>
          <div className='content__01--img'>
            <img src={imageSite4.thumbnailUrl} alt="imagem-pequena"/>
            <img src={imageSite4.url} alt="imagem-grande"/>
          </div>          
        </div>       
      </div>

    </section>
    
  );

}

export default Site4