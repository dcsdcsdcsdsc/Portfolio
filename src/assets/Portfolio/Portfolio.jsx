import React from 'react'
import img from '../img/Image.png'
import Img from '../img/Ola.png'

const Portfolio = () => {
  return (
<div className="container">
         
   <div className='what'>
         <div className="main">
         <nav className="navbar">
               <div className="logo">
               <h1 className='hero-text'>
                  <span>O</span>
                  <span>d</span>
                  <span>i</span>
                  <span>l</span>
                  <span>b</span>
                  <span>e</span>
                  <span>k</span>
                </h1>
               </div>
           </nav>
         </div>
              <br />  <br /><br /><br />
           <div className="intro">
              <div className="text">
                <h1 className="job">
                    I am a <span className='w'>web designer</span> and  <span className="w">front-end developer</span>
                </h1>
                <br />
                <p className="do">
                    I craft responsive websites where technologies meet creativity
                </p>
                <button className='contact'><a href="mailto: ozubarjanov@gmail.com" className="contact_btn">Contact me !!</a></button>
             </div>
             <div className="imgpage">
                <img className='black' src={img} alt="" />
             </div>
              <div className="black"> 
              </div>
           </div>
               <h1 className="skill"><span className='w'>#</span> skills</h1>
               <hr className="salom" />
           <div className="dots">
                
                    <div className="scapes">
                        <div className="scape"></div>
                        <div className="scape2"></div>
                        <div className="scape3"></div>
                        <div className="scape4"></div>
                        <div className="scape5"></div>
                    </div>
                    <div className="salom5">
                    <div className="all">
                   <div className="language">
                        <h3 className="lang">Languages</h3>
                        <p className="tpe1"> Python JavaScript</p>
                     </div>
                     <div className="tool">
                        <h3 className="tool2">Tools</h3>
                        <p className="tpe2">VSCode Figma Linux PhotoShop</p>
                     </div>
                     <div className="other">
                        <h3 className="type3">Others</h3>
                        <p className="tpe4">HTML CSS SCSS</p>
                     </div>
                    </div>
             
                  
                 </div> 
           </div>
           <h1 className="salom3">
               <span className="w">#</span> about-me   
           </h1>
           <hr className="salomhr" />
           <br />
           <div className="aboutme">
                <div className="first">
                   <p className="wordsw">
                     Hello, I am Odilbek!
                     <br /> <br />
                     I am a self-taught front-end developer based in Andijan, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
                        <br /> <br />
                      Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.                     
                   </p>
                </div>
                <div className="second">
                  <img src={Img} alt=""  className='imgsec' />
                </div>
           </div>
           <div className="united">
              <h1 className="salom5"><span className="w">#</span> contacts</h1>
              <hr className="salomhr2" />
           </div>
           <div className="contactsec">
              <p className="contactme">
              I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
              </p>
              <div className="navigate">
                 <h3 className="white">Message me here</h3>
                 <p className="gmail">
                  <a className='nav__section__lik' href="mailto: ozubarjanov@gmail.com">ozubarjanov@gmail.com</a>
                 </p>
                 <p className="telegram">
                  <a className='nav__section__lik' href="https://t.me/Odiusm">@Odiusm</a>
                 </p>
              
              </div>
           </div>
           <hr className="fynalhr" />
           <div className="end">
                <div className="end-div">
                  <div className="main-logo">
               <div className="cola">
                     <h1 className='hero-text'>
                  <span>O</span>
                  <span>d</span>
                  <span>i</span>
                  <span>l</span>
                  <span>b</span>
                  <span>e</span>
                  <span>k</span>
                </h1>
                 <div className="navigate2">
                 <p className="gmail">
                  <a className='nav__section__link' href="mailto: ozubarjanov@gmail.com">ozubarjanov@gmail.com</a>
                 </p>
                 <p className="telegram">
                  <a className='nav__section__link' href="https://t.me/Odiusm">@Odiusm</a>
                 </p>
                 </div>
                   <div className="topic">
                   <p className="finally">
                     Web designer and front-end developer
                  </p>
                   </div>
               </div>
                   <div className="whose">
                      <p className="when">Created in 2023. Made by Odilbek</p>
                   </div>
                  </div>
                </div>
              </div>






       </div>
  </div>
  )
}

export default Portfolio
