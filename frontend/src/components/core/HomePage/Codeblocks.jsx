import React from 'react'
import CTAButton from './Button'
import { TypeAnimation } from 'react-type-animation'
import HightLightText from './HightLightText'
import { FaArrowRight } from 'react-icons/fa'
const Codeblocks = ({position,heading ,subheading,ctabtn1,ctabtn2,codeblock,backgroundGradient,codeColor }) => {
  return (
    <div className={`flex mx-3 flex-row ${position} my-20 justify-between gap-10 `}>

    <div className='w-[50%] flex flex-col gap-8'>
        {heading}
        <div className='text-richblack-300 font-bold'>
        {subheading}
        </div>

        <div className='flex gap-7 mt-7'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    <FaArrowRight/>
                </div>
            </CTAButton>

            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                    {ctabtn2.btnText}
            </CTAButton>
        </div>
    
    </div>

    <div className='h-fit flex flex-row text-[15px] w-[100%] py-4 lg:w-[500px]'>
        <div className='text-center flex flex-col w-[10%]  text-richblack-200 font-inter font-bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            
        </div>
        <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono text-yellow-100 pr-2`}>
            <TypeAnimation
             sequence={[codeblock,5000,""]}
             repeat={Infinity}   
             cursor={true}
             omitDeletionAnimation={true}
            style={{
                whiteSpace:"pre-line",
                display:"block"
            }}
            />
        </div>
    </div>
    
   
   
    </div>
  )
}

export default Codeblocks