import React from 'react'
import "./Home.css"
import HomeHero from "../../Components/HomeHero/HomeHero";
import FeaturedPortfolioSection from '../../Components/FeaturedPortfolioSection/FeaturedPortfolioSection';
import CategoriesSection from '../../Components/CategoriesSection/CategoriesSection';
export default function Home() {
  return (
  <>
<HomeHero/>
<FeaturedPortfolioSection/>
<CategoriesSection/>
  </>
  )
}
