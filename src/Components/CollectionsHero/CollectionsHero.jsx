import React from 'react'
import "./CollectionsHero.css"
import TitleComponent from '../TitleComponent/TitleComponent';
export default function CollectionsHero() {
  return (
   <section className=" collectionsHeroSection flex justify-center items-end w-full relative ">
          <div className="layer-collections w-full absolute"></div>
          <div className="hero-content mb-20">
            <TitleComponent
              title1=" PORTA "
              span1="Collections"
              text="Browse our premium collection of portfolios and connect with the minds shaping the digital future."
            />
            
          </div>
        </section>
  )
}
