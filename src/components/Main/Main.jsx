import React from 'react'
import main from './Main.module.css'
import Image1 from './images/pic/Div1Im.svg'
import Leader from './images/logo/Leader.svg'
import LLeader from './images/logo/Vector.svg'


const Main = () => {
  return (
    <div>
      <div className={main.Div1}>

        <div className={main.LeaderWrapper}>
          <img src={Leader} id = {main.LeaderSet}></img>
          <div className = {main.TextBox}>Find your dream place</div>

          <div className= {main.FamilyEdit}><p>Find house for your family in minutes</p>
          </div>
          
          <div className={main.LoremEdit}>
            <p>Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum curabitur eget aliquam elit in mauris purus.</p>
          </div>

          <div className= {main.ListEdit}>
            <ul id = {main.UlEdit}>
              <li>
                <input placeholder="Search" id = {main.SearchEdit}/>
              </li>
              <li>
                <button id={main.ButtonEdit}>Find property</button>
              </li>
            </ul>
          </div>
          
          <div className={main.LLeaderEdit}>
            <img src = {LLeader}></img>
          </div>
        </div>

        

        <div classname = {main.FirstImage}>
            <img src = {Image1} id={main.ImageSet}></img>
        </div>

      </div>

      <div className={main.Div2}>2</div>

      <div className={main.Div3}>3</div>

      <div className={main.Div4}>4</div>
      
      <div className={main.Div5}>5</div>
      
      <div className={main.Div6}>6</div>
      
    </div>


    
  )
}



export default Main