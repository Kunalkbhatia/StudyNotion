import React from 'react'
import instructorimg from "../../../assets/Images/Instructor.png"
import HightLightText from './HightLightText'
import CTAButton from "./Button";
const InstructionSection = () => {
  return (
    <div className='mt-16'>
        <div className='flex flex-row gap-20 items-center'>
            <div className='w-[50%]'>
                <img
                src={instructorimg}
                alt=""
                className='shadow-white'
                />

            </div>
            <div className='w-[50%] flex flex-col gap-10'>
                <div className='text-4xl font-semibold w-[50%]'>
                    Become an
                    <HightLightText text={"Instructor"}/>

                </div>
                <p className='font-medium text-[16px] w-[80%] text-richblack-200'>
                Instructions from around the world teach millions of students on studynotion. We provide the tools and skills to teach what you love.

                </p>
                <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                <div className='flex flex-row gap-2 items-center '>
                    Start Learning Today

                </div>

            </CTAButton>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default InstructionSection