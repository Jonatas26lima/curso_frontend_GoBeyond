import React from 'react'
import {imageSite1} from '../data'
import './style.css'

function Site1 () {  
  

  return (

    <section >   
      
      <div>
        <div className="content__01">
          <h2>{imageSite1.title}</h2>
          <div className='content__01--img'>
            <img src={imageSite1.thumbnailUrl} alt="imagem-pequena"/>
            <img src={imageSite1.url} alt="imagem-grande"/>
          </div>          
        </div>       
      </div>

    </section>
    
  );

}

export default Site1