import React from 'react'
import './hero.scss'

const Hero = () => {
  return (
    <>
      <section id='hero'>
        <div className="container">
            <div className="hero">
                <div className="row ">
                    <div className="col-lg-7 col-12 h-left">
                    <h1>Select Your New Perfect Style</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quis asperiores nam quidem iste veritatis minus dolores aut corporis recusandae!</p>   <button class='btnbig'>SHOP NOW</button>
                </div>
                <div className="col-lg-5 right">
                      <figure>
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
                      </figure>
                 

                </div>  
                </div>
              
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
