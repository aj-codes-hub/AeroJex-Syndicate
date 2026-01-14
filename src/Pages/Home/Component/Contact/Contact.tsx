import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import Botton from '../../../../Components/Layout/Botton'
import Input from './Component/Input'
import SelectInput from './Component/InputSelector'
import SectionHeading from '../../../../Components/Layout/SectionHeading'
import CustomStarsLogo from './Component/StarsLogo'
import StarsLogo from './Component/StarsLogo'

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
        

        <SectionHeading
          headingStart='Get '
          headingMid='in '
          headingend='Touch'
          SubHeading="Share your Idea's here.."
          UnderLineWidth='w-[46%] sm:w-[22%] lg:w-[23%]'
          className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'
          />

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
          <div className='hidden lg:block lg:w-[40%] '>
            <StarsLogo />
          </div>
          
        </div>
        
      </div>
      
    </div>
  )
}

export default Contact