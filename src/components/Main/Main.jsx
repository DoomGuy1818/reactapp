import React from 'react'
import main from './Main.module.css'
import Image1 from './images/pic/Div1Im.svg'
import Leader from './images/logo/Leader.svg'
import LLeader from './images/logo/Vector.svg'
import House from './images/logo/house.svg'
import Receipt from './images/logo/receipt.svg'
import Key from './images/logo/key.svg'
import Image2 from './images/pic/IMAGE (1).png'
import Image3 from './images/pic/IMAGE (2).png'
import Pay from './images/logo/payments.svg'
import Desc from './images/logo/description.svg'
import Image4 from './images/pic/IMAGE (9).png'
import Image5 from './images/pic/IMAGE (10).png'
import Image6 from './images/pic/IMAGE (11).png'
import Image7 from './images/pic/IMAGE (6).png'
import Image8 from './images/pic/IMAGE (7).png'
import Image9 from './images/pic/IMAGE (8).png'
import Location from './images/logo/place.svg'
import bath from './images/logo/bathtub.svg'
import bed from './images/logo/bed.svg'
import foot from './images/logo/square_foot.svg'
import LowLeader from './images/logo/LowerLeader.svg'



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
            <ul className = {main.UlEdit}>
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

      <div className={main.Div2}>
        <div className={main.TextBoxEdit}>As seen on the world's best magazines and media</div>
        <div className={main.AnotherTextBox}>How it works</div>
        <div className={main.Textbox3}>Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur pellentesque. Maecenas varius felis felis.</div>
        
        <div id={main.CardsWrap}>

          <div className={main.CardEd}>

            <div className={main.HouseWrap}>
              <img src={House} className={main.IcoWrapper}/>
            </div>

            <div className={main.TextWrapper}>
              <span>Find property</span>
            </div>

            <div className={main.SmallText}>
              <span>Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.</span>
            </div>
          </div>
          
          <div className={main.CardEd}>
            <div className={main.HouseWrap}>
              <img src={Receipt} className={main.IcoWrapper}/>
            </div>

            <div className={main.TextWrapper}>
              <span>Make a deal</span>
            </div>

            <div className={main.SmallText}>
              <span>Pellentesque suscipit mauris. Nam dictum, erat a volutpat varius, urna nisi sollicitudin orci, sagittis facilisis odio tortor ac mi.</span>
            </div>
          </div>
          
          <div className={main.CardEd}>
          <div className={main.HouseWrap}>
              <img src={Key} className={main.IcoWrapper}/>
            </div>

            <div className={main.TextWrapper}>
              <span>Get your keys</span>
            </div>

            <div className={main.SmallText}>
              <span>Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum. Duis semper, metus vitae fermentum consequat.</span>
            </div>
          </div>

        </div>

        <div className={main.Pic}>

        <div className = {main.FuncWrap}>
          <div id={main.TextEdit}>
            <span className={main.Comfort}>Comfort first</span>
          </div>

          <div id={main.FComfort}>
            <span className={main.FComfortT}>The best houses for family comfort</span>
          </div>

          <div id={main.SmallText2}>
            <span className = {main.LoremEd}>Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin sollicitudin, lorem non posuere blandit.</span>
          </div>

          <div className={main.ButtList}>
            <ul className={main.UlEdit}>
              <li>
                <button className={main.Explore}>
                  <span>Explore properties</span>
                </button>
              </li>
              <li>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>Contact agent</a>
              </li>
            </ul>
          </div>
          <div className={main.imga}>
            <img src ={Image2}></img>
          </div>
        </div>
        </div>

        <div className={main.Pic}>
          <div class className = {main.trdImage}><img src = {Image3}></img></div>
          <div className={main.Quick}>

            <div className={main.Easy}>
              <span className={main.SpanEd}>Quick and easy</span>
            </div>
            <div id={main.Fast}>
              <span>Fast forward process</span>
            </div>
            <div id={main.Ut}>
              <span>
              Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet mi arcu praesent nec felis nisl.
              </span>
            </div>
            <div className={main.CardWrapper}>

              <div className={main.FastForward}>
                  <div className={main.PayWrap}>
                    <img src={Pay} className={main.IcoWrapper1}></img>
                  </div>
                  <div className = {main.AfforEd}>
                    <span>Affordable prices</span>
                  </div>
                  
                  <div className = {main.IpsumEd}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</span>

                  </div>

                  <div className={main.Re}>
                    <ul>
                      <li>
                        <button className={main.Explore}>Explore properties</button>
                      </li>
                      <li>
                        <span>Contact agent</span>
                      </li>
                    </ul>
                  </div>
                  
              </div>

                <div className={main.DescWrap}>
                  <div className={main.PayWrap}>
                    <img src={Desc} className={main.IcoWrapper1}></img>
                  </div>
                  <div className = {main.AfforEd}>
                    <span>Less paper work</span>
                  </div>
                  
                  <div className = {main.IpsumEd}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</span>
                  </div>

                </div>

            </div>
              

          </div>
        </div>
      </div>

      <div className={main.Div3}>
        <div className={main.TextBox} id = {main.div3}>
          <span className={main.SpanEd} id={main.div3Sp}>Properties</span>
        </div>
        <span className={main.House}>Houses in your favorite area</span>

        <div className={main.HomeWrap}>
          
          <div className={main.ProdCard}>
            <img src={Image4}></img>
            <div className={main.Cozy}>
              <span>Cozy studio in Los Angeles</span>
              <span>$ 12000000 USD</span>
              <span>
                <img src={Location}></img>
                2263 Southlea, Los Angeles
              </span>

              <div className={main.ProdEd}>
                <div className={main.LogoEd} id = {main.FirstLogo}>
                  <img src={bath}></img>
                  <span className={main.showcout}>2</span>
                </div>
                
                <div className={main.LogoEd}>
                  <img src={bed}></img>
                  <span className={main.showcout}>2</span>
                </div>

                <div className={main.LogoEd}>
                  <img src={foot}></img>
                  <span className={main.showcout}>840sqft </span>
                </div>
               
                
              </div>

            </div>
              
            
          </div>
            
          <div className={main.ProdCard}>
            <img src = {Image5}></img>

            <div className={main.Cozy}>
            <span>Cozy studio in Los Angeles</span>
              <span>$ 12000000 USD</span>
              <span>
                <img src={Location}></img>
                2569 El Segundo, San Diego
              </span>

              <div className={main.ProdEd}>
                <div className={main.LogoEd} id = {main.FirstLogo}>
                  <img src={bath}></img>
                  <span className={main.showcout}>2</span>
                </div>
                
                <div className={main.LogoEd}>
                  <img src={bed}></img>
                  <span className={main.showcout}>2</span>
                </div>

                <div className={main.LogoEd}>
                  <img src={foot}></img>
                  <span className={main.showcout}>840sqft </span>
                </div>
            </div>

              </div>

          </div>
            
          <div className={main.ProdCard}>
            <img src={Image6}></img>

            <div className={main.Cozy}>

            <span>Cozy studio in Los Angeles</span>
              <span>$ 12000000 USD</span>
              <span>
                <img src={Location}></img>
                4489 Smity Fielda, New York
              </span>

              <div className={main.ProdEd}>
                <div className={main.LogoEd} id = {main.FirstLogo}>
                  <img src={bath}></img>
                  <span className={main.showcout}>2</span>
                </div>
                
                <div className={main.LogoEd}>
                  <img src={bed}></img>
                  <span className={main.showcout}>2</span>
                </div>

                <div className={main.LogoEd}>
                  <img src={foot}></img>
                  <span className={main.showcout}>840sqft </span>
                </div>
               

            </div>
            
                
              </div>
          </div>
            
        </div>

        <div className={main.HomeWrap1}>

          <div className={main.ProdCard}>
            <img src={Image7}></img>

            <div className={main.Cozy}>
            <span>Cozy studio in Los Angeles</span>
            <span>$ 12000000 USD</span>
            <span>
              <img src={Location}></img>
              2263 Southlea, Los Angeles
            </span>

            <div className={main.ProdEd}>
                <div className={main.LogoEd} id = {main.FirstLogo}>
                  <img src={bath}></img>
                  <span className={main.showcout}>2</span>
                </div>
                
                <div className={main.LogoEd}>
                  <img src={bed}></img>
                  <span className={main.showcout}>2</span>
                </div>

                <div className={main.LogoEd}>
                  <img src={foot}></img>
                  <span className={main.showcout}>840sqft </span>
                </div>
               
                
              </div>



            </div>

            
          </div>
            
          <div className={main.ProdCard}>
            <img src={Image8}></img>

            <div className={main.Cozy}>

            <span>Cozy studio in Los Angeles</span>
            <span>$ 12000000 USD</span>
            <span>
              <img src={Location}></img>
              2569 El Segundo, San Diego
            </span>

            <div className={main.ProdEd}>
                <div className={main.LogoEd} id = {main.FirstLogo}>
                  <img src={bath}></img>
                  <span className={main.showcout}>2</span>
                </div>
                
                <div className={main.LogoEd}>
                  <img src={bed}></img>
                  <span className={main.showcout}>2</span>
                </div>

                <div className={main.LogoEd}>
                  <img src={foot}></img>
                  <span className={main.showcout}>840sqft </span>
                </div>

            </div>

            
               
                
              </div>

          </div>
          
          <div className={main.ProdCard}>
            <img src={Image9}></img>

            <div className={main.Cozy}>

            <span>Cozy studio in Los Angeles</span>
            <span>$ 12000000 USD</span>
            <span>
              <img src={Location}></img>
              2569 Halls Corner, Las Vegas
            </span>

            <div className={main.ProdEd}>
                <div className={main.LogoEd} id = {main.FirstLogo}>
                  <img src={bath}></img>
                  <span className={main.showcout}>2</span>
                </div>
                
                <div className={main.LogoEd}>
                  <img src={bed}></img>
                  <span className={main.showcout}>2</span>
                </div>

                <div className={main.LogoEd}>
                  <img src={foot}></img>
                  <span className={main.showcout}>840sqft </span>
                </div>
               

            </div>
            
                
              </div>

          </div>

        </div>

        <div className={main.Re} id = {main.CozyExp}>
          <ul>
            <li>
            <button className={main.Explore}>Explore properties</button>
            </li>
            <li>
              <span>Contact agent</span>
            </li>
          </ul>
        </div>

        <img src={LowLeader} className={main.LowLeaderEd}></img>

      </div>

      <div className={main.Div4}>4</div>
      
      <div className={main.Div5}>5</div>
      
      <div className={main.Div6}>6</div>
      
    </div>


    
  )
}



export default Main