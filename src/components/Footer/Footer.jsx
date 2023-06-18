import React from 'react';
import footer from './Footer.module.css';


const Footer = () => {
  return (
    
   <div className={footer.footer}>
      <p className={footer.TextStyle}>© Realco by Minimal Square</p>
        <ul className='icons'>
        <li>
        <a href="https://www.flaticon.com/ru/free-icons/linkedin" >Linkedin иконки от Google - Flaticon</a>
        </li>
        </ul>
   </div>
   


  )
}

export default Footer