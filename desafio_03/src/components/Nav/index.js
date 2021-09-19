import  React from 'react';
import "./style.css";


const Nav = ({
  Stack,
  Design,
  links
}) =>{
  return(
    <section className="nav">
      <div className="nav-bar">
        <ul>
          <li><a>Stack</a></li>
          <li><a>Design</a></li>
          <li><a>Links</a></li>
        </ul>
      </div>
    </section>      
  );
}


export default Nav;