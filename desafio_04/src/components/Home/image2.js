import React from 'react'
import {imageSite2} from '../data'
import './style.css'

function Site2 () {  
  

  return (

    <section>   
      
      <div>
        <div className="content__01">
          <h2>{imageSite2.title}</h2>
          <div className='content__01--img'>
            <img src={imageSite2.thumbnailUrl} alt="imagem-pequena"/>
            <img src={imageSite2.url} alt="imagem-grande"/>
          </div>          
        </div>       
      </div>
    
    </section>
    
  );

}

export default Site2