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
import Rest from './images/logo/family_restroom.svg'
import star from './images/logo/star.svg'
import Cust1 from './images/pic/Customer1.png'
import Cust2 from './images/pic/Cust2.png'
import Cust3 from './images/pic/Cust3.png'
import Logo from './images/logo/Logo.svg'

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

        <div className={main.LocationDiv}>
          <span className={main.LocationSp}>Locations</span>
          <span className={main.Nunc}>Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer lacus urna, aliquet non nisl sit amet.</span>
        </div>

        <div className={main.HouseLocation}>
          <div className={main.LocCard}>

            <div className={main.LocTextWrap}>
            <span>San Francisco, CA</span>
            <a href = "#" className={main.RefDown}>View Properties</a>
            </div> 

          </div>
          <div className={main.LocCard}>

            <div className={main.LocTextWrap}>
              <span>San Francisco, CA</span>
              <a href = "#" className={main.RefDown}>View Properties</a>
            </div> 
          </div>
          <div className={main.LocCard}>

            <div className={main.LocTextWrap}>
              <span>San Francisco, CA</span>
              <a href = "#" className={main.RefDown}>View Properties</a>
            </div> 

          </div>
        </div>

        <div className={main.HouseLocation} id ={main.LocId}>
          <div className={main.LocCard}>
            <div className={main.LocTextWrap}>
              <span>San Francisco, CA</span>
              <a href = "#" className={main.RefDown}>View Properties</a>
            </div> 

          </div>
          
          <div className={main.LocCard}>
            <div className={main.LocTextWrap}>
              <span>San Francisco, CA</span>
              <a href = "#" className={main.RefDown}>View Properties</a>
            </div> 
          </div>

          <div className={main.LocCard}>
            <div className={main.LocTextWrap}>
              <span>San Francisco, CA</span>
              <a href = "#" className={main.RefDown}>View Properties</a>
            </div> 
          </div>
        </div>

        <div className={main.Re} id = {main.LocExp}>
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

      <div className={main.Div4}>

        <div className={main.VeryBigDiv}>
          
          <div className= {main.RectDiv}>
            <div className={main.Square}>
              <img src={Rest} className={main.RestEd}></img>
            </div>

            <span className={main.Text1}>
              Families are our priority
            </span>
            <span className={main.Text2}>
              Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non, placerat vel arcu. In non consectetur lorem. Morbi non varius sapien suscipit mauri.
            </span>
            <button className={main.FamButt}>Get started</button>
          </div>
        </div>
        
        <div className={main.LocationDiv}>
          <span className={main.LocationSp}>What customers say</span>
          <span className={main.Nunc}>Faucibus orci luctus et ultrices posuere cubilia curae.</span>
        </div>

        <div id={main.CardsWrap}>

          <div className={main.CardEd} id ={main.CustSay}>

            <div class ={main.Disc1}>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
            </div>

            <div className={main.SmallText}>
              <span>"Condimentum viverra orci. Pellentesque suscipit odio nisl, non ultricies purus mattis eget. In placerat, lorem a sodales ullamcorper, eros nibh laoreet nisl."</span>
            </div>
            <div className={main.CustCard}>
              <img src = {Cust1} className={main}></img>
              <div className={main.CustName}>
                <span>Jason Stetham</span>
                <span>Actor</span>
              </div>
            </div>
            
          </div>
          
          <div className={main.CardEd} id ={main.CustSay}>
            <div class ={main.Disc1}>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
            </div>

            <div className={main.SmallText}>
              <span>"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium iaculis ultricies. Aenean in leo vitae tortor."</span>
            </div>

            <div className={main.CustCard}>
              <img src = {Cust2} className={main}></img>
              <div className={main.CustName}>
                <span>Eva Elfie</span>
                <span>Customer</span>
              </div>
            </div>

          </div>
          
          <div className={main.CardEd} id ={main.CustSay}>
            <div class ={main.Disc1}>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
            </div>

            <div className={main.SmallText}>
              <span>"Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam."</span>
            </div>

            <div className={main.CustCard}>
              <img src = {Cust3} className={main}></img>
              <div className={main.CustName}>
                <span>Anna Penyaz</span>
                <span>Customer</span>
              </div>
            </div>

          </div>

        </div>

      </div>
      
      <div className={main.Div5}>

        <div className={main.BlogBefCont}>

          <div className={main.BlogEd}>
            <span className={main.BlogTxt}>Blog</span>
          </div>

          <span id = {main.Late}>Latest posts</span>
          <span id = {main.AfterLate}>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent efficitur nibh massa morbi sagittis ornare dui in ornare.</span>
          <button id = {main.ViewButt}>View all</button>
        </div>

        <div className={main.HomeWrap} id = {main.BlogCards}>
          
          <div className={main.ProdCard}>
            <img src={Image4}></img>
            <div className={main.Cozy}>
              <div className={main.Date}>

                <div classname ={main.Trend}>Trends</div>
                <span className={main.CardDate}>10 May,2022</span>

              </div>

              <span>The 9 best homes in New York</span>
              <span>Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.</span>

              <a href = "#">Read More</a>

            </div>
              
            
          </div>
            
          <div className={main.ProdCard}>
            <img src = {Image5}></img>

            <div className={main.Cozy}>
            <div className={main.Date}>

                <div classname ={main.Trend}>Trends</div>
                <span className={main.CardDate}>10 May,2022</span>

              </div>

              <span>The 9 best homes in New York</span>
              <span>Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.</span>

              <a href = "#">Read More</a>


            </div>

          </div>
            
          <div className={main.ProdCard}>
            <img src={Image6}></img>

            <div className={main.Cozy}>
            <div className={main.Date}>

              <div classname ={main.Trend}>Trends</div>
              <span className={main.CardDate}>10 May,2022</span>

              </div>

              <span>The 9 best homes in New York</span>
              <span>Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.</span>

              <a href = "#">Read More</a>
   
            </div>

          </div>
            
        </div>
        
        
      </div>
      
      <div className={main.Div6}>
        <img src={Logo} className={main.LogotipEd}></img>

        <nav className={main.NavbarFoot}>
          <div className={main.NavBar}>
            
            <div className={main.ListEdit1}>
            <span className={main.HeadEd}>Pages</span>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Agent</li>
                <li>Contacts</li>
                <li>FAQ</li>
                <li>Properties</li>
              </ul>
            </div>

            <div className={main.ListEdit1}>
              <span className={main.HeadEd}>CMS Pages</span>
              <ul>
                <li>Property</li>
                <li>Property single</li>
                <li>Blog Categories</li>
                <li>Blog Single</li>
                <li>Agent Single</li>
              </ul>
            </div>

            <div className={main.ListEdit1}>
              <span className={main.HeadEd}>Utility Pages</span>
              <ul>
                <li>Style Guide</li>
                <li>Changelog</li>
                <li>Licenses</li>
                <li>404</li>
                <li>Password</li>
                <li>Search</li>
              </ul>
            </div>

            <div className={main.FootSub}>
              <span>Subscribe</span>
              <span className={main.Join}>Join our newsletter to stay up to date on features and releases.</span>
              <div className={main.EmailEd}>
                <input id = {main.InputEd} placeholder='Enter your email'></input>
                <button id = {main.ButtEd}>Subscribe</button>
              </div>
              <span className = {main.EndSub}>By subscribing you agree to with our  <a href = "#">Private Policy</a>
              </span>
            </div>

          </div>
        </nav>
      </div>
      
    </div>


    
  )
}



export default Main