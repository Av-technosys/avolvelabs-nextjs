import BrandCarousel from '@/components/brandCarousel'
import CrmAgentSuite from '@/components/crmAgentSuite'
import CrmApproach from '@/components/crmApproach'
import CrmBook from '@/components/crmBook'
import CrmBusinessValueDemo from '@/components/crmBusinessValueDemo'
import CrmHero from '@/components/crmHero'
import CrmNew from '@/components/crmNew'
import CrmTeams from '@/components/crmTeams'
import CrmTech from '@/components/crmTech'
import CrmWhat from '@/components/crmWhat'
import CrmWhyPartner from '@/components/crmWhyPartner'
import FAQ from '@/components/faq'
import HomeCarousel from '@/components/homeCarousel'
import HomeLatest from '@/components/homeLatest'
import React from 'react'

export const metadata  = {
  title:"CRM Strategy & Implementation Services | AvolveLabs",
  description:"AvolveLabs offers professional CRM strategy and implementation services that align your business goals to improve adoption, workflows, efficiency, and revenue.",
  alternates:{
    canonical:"https://avolvelabs.com/services/crm-strategy-implementation",
  }
}

const page = () => {
  return (
    <div>
      <CrmHero/>
      <CrmTeams/>
       <CrmWhat/>
      {/* <CrmBook/> */}
      <CrmApproach/>
      <CrmTech/>
      <CrmNew/>
      <CrmAgentSuite/>
      {/* <CrmWhyPartner/>  */}
      {/* <CrmBusinessValueDemo/>  */}
      <HomeLatest/>
        {/* <HomeCarousel /> */}
      {/* <FAQ/>   */}
    </div>
  )
}

export default page
