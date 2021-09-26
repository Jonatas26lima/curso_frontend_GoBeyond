import React from 'react'
import {imageSite3} from '../data'
import './style.css'

function Site3 () {  
  

  return (

    <section>   
      
      <div>
        <div className="content__01">
          <h2>{imageSite3.title}</h2>
          <div className='content__01--img'>
            <img src={imageSite3.thumbnailUrl} alt="imagem-pequena"/>
            <img src={imageSite3.url} alt="imagem-grande"/>
          </div>          
        </div>       
      </div>

    </section>
    
  );

}

export default Site3