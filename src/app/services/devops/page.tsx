import React from 'react'
import HomeLatest from '@/components/homeLatest'
import BrandCarousel from '@/components/brandCarousel'
import DevOpsWhat from '@/components/devOpsWhat'
import DevOpsApproach from '@/components/devOpsApproach'
import DevOpsTech from '@/components/devOpsTech'
import DevOpsAgentSuite from '@/components/devOpsAgentSuite'
import DevOpsHero from '@/components/devOpsHero'


export const metadata = {
  title: "DevOps Consulting & Automation Services | AvolveLabs",
  description: "AvolveLabs provides end-to-end DevOps consulting, CI/CD automation, and cloud infrastructure management to accelerate your software delivery.",
  alternates: {
    canonical: "https://avolvelabs.com/services/devops",
  }
}

const page = () => {
  return (
    <div className="bg-white">
      <DevOpsHero/>
     
      <DevOpsWhat/>
      <DevOpsApproach /> 
      <DevOpsTech />
      <DevOpsAgentSuite/>
      <BrandCarousel /> 
      <HomeLatest />
    </div>
  )
}

export default page