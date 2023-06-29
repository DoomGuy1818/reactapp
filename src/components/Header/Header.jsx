import React from 'react';
import styles from './Header.module.css';
import logo from './logos/Vector.svg';
import arrow from './logos/arrow.svg';
import search from './logos/search.svg'


const Header = () => {
  return (
    <div className='Wrapper'>
      <div className = {styles.HeaderTop}>
        <div className ={styles.TextBox}>Get your dream house in a week</div>
      </div>

      <div className ={styles.HeaderBottom}>
        <div className={styles.LogoWrapper}>
          <div className = {styles.Rectangle}></div>
          <div className= {styles.Logo}>
          <img src={logo} alt ="LOGO" ></img> 
          </div>

        </div>
        
        <div className={styles.TextWrapper}>
          
            <ul>
              <li><a href ='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>Home</a>
              </li>

              <li><a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Properties</a></li>
              <li id={styles.Img}><img src ={arrow}></img></li>

              <li><a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">About</a></li>

              <li><a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Contact</a></li>

              <li id={styles.Search}><img src ={search}></img></li>

              <li><a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Search</a></li>
            </ul>
          
        </div>
        <div className= {styles.StuffAside}>
          <ul>
            <li>
              <button className={styles.ButtonEdit}>Cart</button>
            </li>

            <li>
              <button className={styles.PropertyEdit}>Find a property</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
