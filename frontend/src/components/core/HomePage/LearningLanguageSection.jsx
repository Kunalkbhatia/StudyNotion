import React from 'react'
import HightLightText from './HightLightText'
import CTAButton from "./Button"
const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
      <div className='flex flex-col gap-5 items-center'>
        <div className='text-4xl font-semibold text-center'>
          Your Swiss Knife for
          <HightLightText text={"learning any language"}/>
        </div>
        <div className='text-center text-richblack-200 mx-auto text-base font-medium w-[70%]'>
        Using spin  making learning multiple languages easy with 20+ languages realistic voice-over,
        progress tracking custom schedule and more.
        
        </div>
        <div className='flex flex-row items-center justify-center mt-5'>
        
        
        </div>
        <div className='w-fit'>
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn More</div>
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default LearningLanguageSection