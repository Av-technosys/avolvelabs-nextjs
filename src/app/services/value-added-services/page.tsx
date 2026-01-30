import CrmTech from '@/components/crmTech'
import FAQ from '@/components/faq'
import HomeLatest from '@/components/homeLatest'
import ValueAgentSuite from '@/components/valueAgentSuite'
import ValueApproach from '@/components/valueApproach'
import ValueBook from '@/components/valueBook'
import ValueBusinessValueDemo from '@/components/valueBusinessValueDemo'
import ValueHero from '@/components/valueHero'
import ValueNew from '@/components/valueNew'
import ValueTeams from '@/components/valueTeams'
import ValueWhat from '@/components/valueWhat'
import ValueWhyPartner from '@/components/valueWhyPartner'
import React from 'react'

export const metadata  = {
  title:"Value Added Services for Salesforce & Zoho CRM | AvolveLabs",
  description:"AvolveLabs offers CRM value-added services for Salesforce and Zoho, including workflow optimisation, automation, integration, and business-aligned solutions.",
  alternates:{
    canonical:"https://avolvelabs.com/services/value-added-services",
  }
}

const page = () => {
  return (
    <div>
       <ValueHero/>
       <ValueTeams/>
       <ValueWhat/>
       <ValueBook/>
       {/* <ValueApproach/> */}
         {/* <CrmTech 
       bgClass="bg-[#EDFFF0]"
         titleColor="text-[#032d60]"
         borderColor="border-black/40"
         title={`Powered by the\nManage Tech Stack`}
          description="Our managed services leverage a robust Manage Services and AI technology stack to deliver scalable, secure, and future-ready solutions."
         orbit1={["Salesforce", "HubSpot", "Zoho", "Dynamics"]}
         orbit2={["OpenAI", "Claude", "Gemini", "Llama"]}/> */}
       <ValueAgentSuite/>
       <ValueWhyPartner/>
       <ValueNew/>
       {/* <ValueBusinessValueDemo/> */}
       <HomeLatest/>
      {/* <FAQ
        textColor="#0f172a"
           hoverColor="#3291B6"
           iconBg="#EDFFF0"
          iconHoverBg="#3291B6"/> */}
    </div>
  )
}

export default page
