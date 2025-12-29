import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import Botton from '../../../../Components/Layout/Botton'
import Input from './Component/Input'
import SelectInput from './Component/InputSelector'

const Contact: React.FC = () => {
  
  const [selectedService, setSelectedService] = useState("")
  const [selectedPlan, setSelectedPlan] = useState("")

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ecommerce', label: 'E-commerce Solutions' },
    { value: 'seo', label: 'SEO & Digital Marketing' },
    { value: 'custom-project', label: 'Custom Project' }
  ]

  const planOptions = [
    { value: 'basic', label: 'Basic Plan' },
    { value: 'standard', label: 'Standard Plan' },
    { value: 'premium', label: 'Premium Plan' },
  ]
  
  return (
    <div id='contact' className='w-full md:h-[600px] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20'>
      
      <div className='w-full max-w-7xl relative'>
        
        {/* Header */}
        <div className='text-[#3AC3F9] font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          <h1 className='text-[26px] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[35px] 2xl:text-[45px] md:leading-10 leading-6'>
            Get<span className='text-[#3AF9EF]'> in </span>Touch
          </h1>
          <p className='text-[10px] sm:text-sm md:text-base lg:text-sm xl:text-base text-[#3AF9EF] font-medium'>
            Share your Idea's here..
          </p>
          <div className='h-[2px] w-[46%] sm:w-[22%] lg:w-[23%] bg-gradient-to-l from-[#3AF9EF] to-[#3af9ef20]'/>
          <div className='h-[2px] w-[46%] sm:w-[22%] lg:w-[23%] bg-gradient-to-l from-[#3af9ef1d] to-[#3AF9EF] mt-[2px]'/>
        </div>
        
        {/* Main Content Area */}
        <div className='relative flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16'>
          
          {/* Form Section */}
          <div className='w-full lg:w-[60%]'>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12'>
              
              {/* Left Column - Inputs */}
              <div className='w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:gap-8'>
                <Input PlaceHolder='Full Name'/>
                <Input PlaceHolder='@Email Address'/>
                <Input PlaceHolder='Phone'/>
                <Input PlaceHolder='Country'/>
              </div>
              
              {/* Right Column - Selects & Textarea */}
              <div className='w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:gap-4'>
                <SelectInput 
                  options={serviceOptions}
                  placeholder="Service"
                  value={selectedService}
                  onChange={setSelectedService}
                  className="text-white"
                  name="service"
                />
                
                <SelectInput 
                  options={planOptions}
                  placeholder="Plan"
                  value={selectedPlan}
                  onChange={setSelectedPlan}
                  className="text-white"
                  name="plan"
                />

                <textarea 
                  placeholder='Project Details'
                  className='w-full border-2 border-[#3ac3f975] rounded-sm p-3 sm:p-4 
                           h-[120px] sm:h-[140px] md:h-[160px] lg:h-[125px] xl:h-[140px]
                           bg-transparent text-white focus:outline-none focus:border-[#3AF9EF] 
                           resize-none text-sm sm:text-base'
                />
                
                {/* Buttons - Mobile: Stacked, Desktop: Side by side */}
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
                  <Botton 
                    Title='Clear' 
                    className='w-full sm:w-auto px-8 py-3 bg-transparent text-[#3AF9EF] hover:bg-[#3AF9EF]'
                  />
                   <Botton 
                    Title='Submit' 
                    className='w-full sm:w-auto px-8 py-3 border-[1.5px]'
                  />
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Robot Section - Hidden on screens smaller than lg */}
          <div className='hidden lg:block lg:w-[40%] relative'>
            <div className='h-[130%] w-[130%] absolute -top-16 -right-8 xl:-right-12'>
              <Spline 
                scene="https://prod.spline.design/6DlxZ6E4BKk3LTCW/scene.splinecode"
                className='w-full h-full'
              />
            </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
  )
}

export default Contact