import React from 'react'
import "./EditPortfolio.css"
import PersonalInformationForm from '../../Components/PersonalInformationForm/PersonalInformationForm'
import SocialLinksForm from '../../Components/SocialLinksForm/SocialLinksForm'
import AddSkills from "../../Components/AddSkills/AddSkills"
import AddProjectAndExperience from '../../Components/AddProjectAdnExperience/AddProjectAndExperience'
export default function EditPortfolio() {
  return (
    <>
   <section className='section-edit-portfolio w-full min-h-lvh py-30 flex justify-center items-center text-white gap-5 flex-wrap'>
   <PersonalInformationForm/>
   <SocialLinksForm/>
   <AddSkills/>
 
   </section>
   </>
  )
}
