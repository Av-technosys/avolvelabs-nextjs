"use client"
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero / Header Section */}
      <section className="px-8 py-16 md:py-16 ">
        <div className="mx-auto max-w-7xl">
          <div className="text-left ">
            <h1 className="font-playfair text-center text-4xl md:text-[52px] font-bold text-[#032d60] mb-6">
              Privacy Policy
            </h1>
            <p className="font-poppins mx-auto text-center text-md md:text-[18px] text-gray-700 max-w-4xl leading-relaxed">
              AvolveLabs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a CRM software development company proudly based in India. We are committed to protecting the privacy and security of personal information that our clients, website visitors, and users share with us.
            </p>
            <p className="mt-3 font-poppins mx-auto text-center text-md md:text-[18px] text-gray-700 max-w-4xl leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.avolvelabs.com) or engage with our CRM development services. Please read this policy carefully. By using our website or services, you agree to the practices described in this document. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="px-8 py-12 md:py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col space-y-12">
            
            {/* 1. Information We Collect */}
            <div className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">
                1. Information We Collect
              </h2>
              <p className="font-poppins text-gray-700 text-md md:text-[18px]">
                We collect information to provide, improve, and personalize our services. The types of information we may collect include:
              </p>
              
              <div className="grid grid-cols-1 gap-8 ml-2 md:ml-6">
                <div className="space-y-3">
                  <h3 className="font-poppins font-bold text-lg text-[#032d60]">1.1 Information You Provide Directly</h3>
                  <ul className="list-disc ml-5 space-y-2 font-poppins text-gray-700 text-md md:text-[18px]">
                    <li>Contact details such as your name, email address, phone number, and company name when you reach out to us via our website&apos;s contact form, email, or phone.</li>
                    <li>Project requirements, specifications, and business information you provide during client onboarding or consultations.</li>
                    <li>Employment-related information if you apply for a position through our Careers page.</li>
                    <li>Feedback, inquiries, testimonials, or other communications you send to us.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-poppins font-bold text-lg text-[#032d60]">1.2 Information Collected Automatically</h3>
                  <ul className="list-disc ml-5 space-y-2 font-poppins text-gray-700 text-md md:text-[18px]">
                    <li>Log data including your IP address, browser type, operating system, referral URLs, and pages visited on our website.</li>
                    <li>Device information such as hardware model, operating system version, and unique device identifiers.</li>
                    <li>Usage data such as time spent on pages, links clicked, and navigation paths.</li>
                    <li>Cookies and similar tracking technologies (see Section 5 for details).</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-poppins font-bold text-lg text-[#032d60]">1.3 Information from Third Parties</h3>
                  <ul className="list-disc ml-5 space-y-2 font-poppins text-gray-700 text-md md:text-[18px]">
                    <li>Information provided through business partners, referral networks, or publicly available sources to supplement client onboarding.</li>
                    <li>Data from analytics providers or advertising partners to help us understand how our website is used.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. How We Use Your Information */}
            <div className="space-y-4">
              <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">
                2. How We Use Your Information
              </h2>
              <p className="font-poppins text-gray-700 text-md md:text-[18px]">AvolveLabs uses the information we collect for the following purposes:</p>
              <div className="grid grid-cols-1 md:grid-cols-1 font-poppins text-gray-700">
                <div className="p-4 rounded-xl">
                  <h4 className="font-bold text-[#032d60] mb-2 uppercase text-sm tracking-wider">2.1 Service Delivery</h4>
                  <ul className="list-disc ml-5 space-y-1 text-md md:text-[18px]">
                    <li>To communicate with you, respond to inquiries, and provide support.</li>
                    <li>To understand your project requirements and deliver CRM software development services.</li>
                    <li>To process contracts, invoices, and payments related to our services.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl">
                  <h4 className="font-bold text-[#032d60] mb-2 uppercase text-sm tracking-wider">2.2 Business Operations</h4>
                  <ul className="list-disc ml-5 space-y-1 text-md md:text-[18px]">
                    <li>To operate, maintain, and improve our website and services.</li>
                    <li>To analyze usage trends and measure the effectiveness of our marketing and communications.</li>
                    <li>To conduct internal research and product development.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl">
                  <h4 className="font-bold text-[#032d60] mb-2 uppercase text-sm tracking-wider">2.3 Legal and Compliance</h4>
                  <ul className="list-disc ml-5 space-y-1 text-md md:text-[18px]">
                    <li>To comply with applicable laws, regulations, and legal processes in India and other relevant jurisdictions.</li>
                    <li>To protect the rights, property, and safety of AvolveLabs, our clients, and the public.</li>
                    <li>To detect and prevent fraud, abuse, or other harmful activities.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl">
                  <h4 className="font-bold text-[#032d60] mb-2 uppercase text-sm tracking-wider">2.4 Communications</h4>
                  <ul className="list-disc ml-5 space-y-1 text-md md:text-[18px]">
                    <li>To send service-related notifications, updates, and administrative messages.</li>
                    <li>To send marketing communications about our services, case studies, and industry insights, where you have consented or where permitted by law.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Legal Basis */}
            <div className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">
                3. Legal Basis for Processing (Applicable Regulations)
              </h2>
              <div className="font-poppins text-gray-700 space-y-4 text-md md:text-[18px]">
                <p>We process your personal data under the following legal bases, in accordance with applicable Indian data protection law (including the Digital Personal Data Protection Act, 2023, where applicable) and international standards:</p>
                <ul className="space-y-3 ml-2">
                  <li className="flex gap-1">
                    <span className="font-bold text-gray-700 min-w-[100px]">Consent Necessity: </span> 
                    <span>Where you have given us clear, informed consent to process your data for a specific purpose.</span>
                  </li>
                  <li className="flex gap-1">
                    <span className="font-bold text-gray-700 min-w-[100px]">Contractual Necessity:</span> 
                    <span>Where processing is necessary to enter into or fulfill a contract with you or your organization.</span>
                  </li>
                  <li className="flex gap-1">
                    <span className="font-bold text-gray-700 min-w-[100px]"> Legal Obligation:</span> 
                    <span>Where we are required to process data to comply with a legal or regulatory obligation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4 to 11. Sections */}
            <div className="grid grid-cols-1 gap-12 font-poppins text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">4. Sharing Your Information</h2>
                <p className="text-md md:text-[18px]">We do not sell your personal information. We may share your information with the following categories of parties:</p>
                <div className="ml-6 space-y-4 text-md md:text-[18px]">
                  <p><strong>4.1 Service Providers:</strong> We may engage trusted third-party vendors and service providers who assist us in operating our business. These parties are contractually obligated to use your information only as directed by us.</p>
                  <p><strong>4.2 Business Partners:</strong> In some engagements, we may collaborate with partner agencies or technology vendors. We ensure such parties maintain adequate privacy protections.</p>
                  <p><strong>4.3 Legal Requirements:</strong> We may disclose your information if required to do so by law, court order, or governmental authority.</p>
                  <p><strong>4.4 Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred. We will notify you before your data becomes subject to a different policy.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">5. Cookies and Tracking Technologies</h2>
                <p className="text-md md:text-[18px]">Our website uses cookies and similar technologies to enhance your experience and analyze website traffic.</p>
                <ul className="list-disc ml-6 space-y-2 text-md md:text-[18px]">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements where permitted by law.</li>
                </ul>
                <p className="mt-4 text-md md:text-[18px]"><strong>5.2 Managing Cookies:</strong> You can control and manage cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">6. Data Retention</h2>
                <p className="text-md md:text-[18px]">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. Specifically:</p>
                <ul className="list-disc ml-6 space-y-2 text-md md:text-[18px]">
                  <li>Client project data is retained for the duration of the engagement and for a period of up to seven (7) years thereafter.</li>
                  <li>Website inquiry and contact form data is retained for up to two (2) years.</li>
                  <li>Job applicant data is retained for up to one (1) year.</li>
                  <li>Analytics and cookie data is retained typically between 14 and 26 months.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">7. Data Security</h2>
                <p className="text-md md:text-[18px]">We implement appropriate technical and organizational measures to protect your data including:</p>
                <ul className="list-disc ml-6 space-y-2 text-md md:text-[18px]">
                  <li>Encrypted data transmission using HTTPS/TLS protocols.</li>
                  <li>Access controls and authentication protocols for our internal systems.</li>
                  <li>Regular security assessments and audits.</li>
                  <li>Confidentiality obligations for all employees and contractors.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">8. International Data Transfers</h2>
                <p className="text-md md:text-[18px]">AvolveLabs is based in India and our services are primarily delivered from India. If you access our website from outside India, your information may be processed in India or other countries where our providers operate. We ensure transfers comply with data protection laws.</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">9. Your Privacy Rights</h2>
                <p className="text-md md:text-[18px]">Depending on your location and applicable law, you may have the following rights:</p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-0 ml-2">
                  {[
                    "Right of Access", "Right to Rectification", "Right to Erasure", 
                    "Right to Restriction", "Right to Data Portability", 
                    "Right to Object", "Right to Withdraw Consent"
                  ].map((right) => (
                    <div key={right} className=" py-2 font-semibold text-gray-700 text-md md:text-[18px]">• {right}</div>
                  ))}
                </div>
                <p className="mt-4 text-md md:text-[18px]">To exercise any of these rights, please contact us at the details provided in Section 12. We will respond within 30 days.</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">10. Children&apos;s Privacy</h2>
                <p className="text-md md:text-[18px]">Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a minor, please contact us immediately.</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">11. Third-Party Links and Services</h2>
                <p className="text-md md:text-[18px]">Our website may contain links to third-party websites. This Privacy Policy applies only to our website. We are not responsible for the privacy practices of third-party sites.</p>
              </div>
            </div>
          
            {/* 12. Final Section */}
            <div className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">
               12. Changes to This Privacy Policy
              </h2>
              <div className="font-poppins text-gray-700 space-y-4 text-md md:text-[18px]">
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. When we make material changes, we will update the "Last Updated" date at the top of this policy and, where appropriate, notify you via email or a prominent notice on our website.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy