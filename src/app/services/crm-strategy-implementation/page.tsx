import CrmAgentSuite from '@/components/crmAgentSuite'
import CrmApproach from '@/components/crmApproach'
import CrmBook from '@/components/crmBook'
import CrmBusinessValueDemo from '@/components/crmBusinessValueDemo'
import CrmHero from '@/components/crmHero'
import CrmTeams from '@/components/crmTeams'
import CrmTech from '@/components/crmTech'
import CrmWhat from '@/components/crmWhat'
import CrmWhyPartner from '@/components/crmWhyPartner'
import FAQ from '@/components/faq'
import React from 'react'

const page = () => {
  return (
    <div>
      <CrmHero/>
      <CrmTeams/>
      <CrmWhat/>
      <CrmBook/>
      <CrmApproach/>
      <CrmTech/>
      <CrmAgentSuite/>
      <CrmWhyPartner/> 
      <CrmBusinessValueDemo/> 
      <FAQ/>
    </div>
  )
}

export default page
