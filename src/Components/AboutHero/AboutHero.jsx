import React from 'react'
import "./AboutHero.css"
import TitleComponent from '../TitleComponent/TitleComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { FaArrowAltCircleRight } from 'react-icons/fa';
export default function AboutHero() {
  return (
   <section className=" aboutHeroSection flex justify-center items-end w-full relative ">
          <div className="layer-about w-full absolute"></div>
          <div className="hero-content ">
            <TitleComponent
              title1=" About "
              title2="Website "
              span1="PORTA "
              text="PORTA was born out of a desire to empower professionals with world-class solutions that drive results."
            />
            <div className=" flex justify-center items-center mt-8 gap-4 flex-wrap mb-15">
            
              <ButtonComponent
                text="Contact Us  "
                typeclass="btn-1"
                icon={FaArrowAltCircleRight}
                padding="px-10 py-4"
              />{" "}
            </div>
          </div>
        </section>
  )
}
