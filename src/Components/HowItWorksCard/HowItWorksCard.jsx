import React from 'react'
import "./HowItWorksCard.css"
export default function HowItWorksCard({icon:Icon,title,id,text}) {
  return (
    <div className='how-work-card flex flex-col justify-center items-center py-5 px-10 rounded-lg text-white mb-5'>
      <div className='icon-work-card-div border-2 rounded-full p-10 text-4xl'> <Icon id="card-work-icon"/></div>
      <h3><span className='title-span-card-work '>{id}</span>.{title}</h3>
      <p className='text-center'>{text}</p>
    </div>
  )
}
