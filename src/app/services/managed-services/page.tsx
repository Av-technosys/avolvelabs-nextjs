import CrmTech from '@/components/crmTech'
import FAQ from '@/components/faq'
import ManageAgentSuite from '@/components/manageAgentSuite'
import ManageApproach from '@/components/manageApproach'
import ManageBook from '@/components/manageBook'
import ManageHero from '@/components/manageHero'
import ManagesBusinessValueDemo from '@/components/managesBusinessValueDemo'
import ManageTeams from '@/components/manageTeams'
import ManageWhat from '@/components/manageWhat'
import ManageWhyPartner from '@/components/manageWhyPartner'
import React from 'react'

const page = () => {
  return (
    <div>
      <ManageHero/>
      <ManageTeams/>
      <ManageWhat/>
      <ManageBook/>
      <ManageApproach/>
      <CrmTech 
       bgClass="bg-[#FEEAC9]"
         titleColor=""
         borderColor="border-black/40"
         title={`Powered by the\nManage Tech Stack`}
          description="Our managed services leverage a robust Manage Services and AI technology stack to deliver scalable, secure, and future-ready solutions."
         orbit1={["Salesforce", "HubSpot", "Zoho", "Dynamics"]}
         orbit2={["OpenAI", "Claude", "Gemini", "Llama"]}/>
         <ManageAgentSuite/>
         <ManageWhyPartner/>
        <ManagesBusinessValueDemo/>
      <FAQ
           textColor="#0f172a"
           hoverColor="#3291B6"
           iconBg="#FEEAC9"
          iconHoverBg="#3291B6"
            />
    </div>
  )
}

export default page
