import React from 'react';
import "./style.css";


const Header = ({
  background,
  picture,
  name,
  description,
  whatsApp,
  linkedin,
  github,
}) => {
return (
  <section className="hero">
    <div className="hero-background" style={{ backgroundImage: `url(${background})`}} />
    <img className="picture" src={picture} alt={`${name} profile`}/>
    <h1 className="name">{name}</h1>
    <h2 className="description">{description}</h2>
    <div className="social">
        <a href=" https://api.whatsapp.com/send?phone=5516981197715&text=Ol%C3%A1%2C%20deixe%20sua%20mensagem%20que%20em%20breve%20retornarei!" target="_blank"><img className="whatsApp" src={whatsApp} alt={`${whatsApp} whatsApp`} /></a>
        <a href=" https://www.linkedin.com/in/jonataswlima/" target="_blank"><img className="linkedin" src={linkedin} alt={`${linkedin} linkedin`} /></a>
        <a href=" https://github.com/Jonatas26lima" target="_blank"><img className="github" src={github} alt={`${github} github`}/></a>
    </div>    
  </section>
);
}

export default Header;
