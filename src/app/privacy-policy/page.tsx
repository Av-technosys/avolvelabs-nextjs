"use client"
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero / Header Section - Matching your px/py style */}
      <section className="px-8 py-16 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-left mb-10">
            <h1 className="font-playfair text-4xl md:text-[52px] font-bold text-[#032d60] mb-6">
              Privacy Policy
            </h1>
            <p className="font-poppins text-md md:text-[18px] text-gray-700 max-w-4xl leading-relaxed">
              AvolveLabs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a CRM software development company proudly based in India. We are committed to protecting the privacy and security of personal information that our clients, website visitors, and users share with us.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="px-8 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col space-y-12">
            
            {/* Introduction Paragraph */}
            <div className="font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed max-w-5xl border-b border-gray-100 pb-10">
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (www.avolvelabs.com) or engage with our CRM development services. Please read this policy carefully. By using our website or services, you agree to the practices described in this document. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">
                1. Information We Collect
              </h2>
              <p className="font-poppins text-gray-700 text-md md:text-[18px]">We collect information to provide, improve, and personalize our services. The types of information we may collect include:</p>
              
              <div className="grid grid-cols-1 gap-8 ml-2 md:ml-6">
                <div className="space-y-3">
                  <h3 className="font-poppins font-bold text-lg text-[#032d60]">1.1 Information You Provide Directly</h3>
                  <ul className="list-disc ml-5 space-y-2 font-poppins text-gray-700">
                    <li>Contact details such as your name, email address, phone number, and company name when you reach out to us via our website&apos;s contact form, email, or phone.</li>
                    <li>Project requirements, specifications, and business information you provide during client onboarding or consultations.</li>
                    <li>Employment-related information if you apply for a position through our Careers page.</li>
                    <li>Feedback, inquiries, testimonials, or other communications you send to us.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-poppins font-bold text-lg text-[#032d60]">1.2 Information Collected Automatically</h3>
                  <ul className="list-disc ml-5 space-y-2 font-poppins text-gray-700">
                    <li>Log data including your IP address, browser type, operating system, referral URLs, and pages visited on our website.</li>
                    <li>Device information such as hardware model, operating system version, and unique device identifiers.</li>
                    <li>Usage data such as time spent on pages, links clicked, and navigation paths.</li>
                    <li>Cookies and similar tracking technologies (see Section 5 for details).</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-poppins font-bold text-lg text-[#032d60]">1.3 Information from Third Parties</h3>
                  <ul className="list-disc ml-5 space-y-2 font-poppins text-gray-700">
                    <li>Information provided through business partners, referral networks, or publicly available sources to supplement client onboarding.</li>
                    <li>Data from analytics providers or advertising partners to help us understand how our website is used.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. How We Use Your Information */}
            <div className="space-y-6">
              <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">
                2. How We Use Your Information
              </h2>
              <p className="font-poppins text-gray-700 text-md md:text-[18px]">AvolveLabs uses the information we collect for the following purposes:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-poppins text-gray-700">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-[#032d60] mb-2 uppercase text-sm tracking-wider">2.1 Service Delivery</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm md:text-[16px]">
                    <li>To communicate with you, respond to inquiries, and provide support.</li>
                    <li>To understand your project requirements and deliver CRM software development services.</li>
                    <li>To process contracts, invoices, and payments related to our services.</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-[#032d60] mb-2 uppercase text-sm tracking-wider">2.2 Business Operations</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm md:text-[16px]">
                    <li>To operate, maintain, and improve our website and services.</li>
                    <li>To analyze usage trends and measure the effectiveness of our marketing and communications.</li>
                    <li>To conduct internal research and product development.</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-[#032d60] mb-2 uppercase text-sm tracking-wider">2.3 Legal and Compliance</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm md:text-[16px]">
                    <li>To comply with applicable laws, regulations, and legal processes in India and other relevant jurisdictions.</li>
                    <li>To protect the rights, property, and safety of AvolveLabs, our clients, and the public.</li>
                    <li>To detect and prevent fraud, abuse, or other harmful activities.</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-[#032d60] mb-2 uppercase text-sm tracking-wider">2.4 Communications</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm md:text-[16px]">
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
              <div className="font-poppins text-gray-700 space-y-4">
                <p>We process your personal data under the following legal bases, in accordance with applicable Indian data protection law (including the Digital Personal Data Protection Act, 2023, where applicable) and international standards:</p>
                <ul className="space-y-3 ml-2">
                  <li className="flex gap-4">
                    <span className="font-bold text-[#032d60]">• Consent:</span> 
                    <span>Where you have given us clear, informed consent to process your data for a specific purpose.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-[#032d60]">• Contractual Necessity:</span> 
                    <span>Where processing is necessary to enter into or fulfill a contract with you or your organization.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-[#032d60]">• Legal Obligation:</span> 
                    <span>Where we are required to process data to comply with a legal or regulatory obligation.</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-[#032d60]">• Legitimate Interests:</span> 
                    <span>Where processing is necessary for our legitimate business interests, provided these do not override your fundamental rights and freedoms.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4 to 8. Mid Sections */}
            <div className="grid grid-cols-1 gap-12 font-poppins text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">4. Sharing Your Information</h2>
                <p>We do not sell your personal information. We may share your information with the following categories of parties:</p>
                <div className="ml-6 space-y-4">
                  <p><strong>4.1 Service Providers:</strong> We may engage trusted third-party vendors and service providers who assist us in operating our business, such as cloud hosting providers, analytics platforms, communication tools, and payment processors. These parties are contractually obligated to use your information only as directed by us and to maintain appropriate security measures.</p>
                  <p><strong>4.2 Business Partners:</strong> In some engagements, we may collaborate with partner agencies or technology vendors. We will only share information necessary for the specific project, and we ensure such parties maintain adequate privacy protections.</p>
                  <p><strong>4.3 Legal Requirements:</strong> We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe in good faith that such disclosure is necessary to protect our rights, your safety, or the safety of others.</p>
                  <p><strong>4.4 Business Transfers:</strong> In the event of a merger, acquisition, restructuring, or sale of all or part of our business assets, your information may be transferred to the acquiring entity. We will notify you via email or a prominent notice on our website before your personal data becomes subject to a different privacy policy.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">5. Cookies and Tracking Technologies</h2>
                <p>Our website uses cookies and similar technologies to enhance your experience and analyze website traffic.</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly. These cannot be disabled.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics). Data collected is aggregated and anonymized.</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences to personalize your experience.</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track the effectiveness of campaigns. These are only used where permitted by applicable law.</li>
                </ul>
                <p className="mt-4  text-sm"><strong>5.2 Managing Cookies:</strong> You can control and manage cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">6. Data Retention</h2>
                <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. Specifically:</p>
                <ul className="list-disc ml-6 space-y-2 bg-gray-50 p-6 rounded-lg">
                  <li>Client project data is retained for the duration of the engagement and for a period of up to seven (7) years thereafter for legal, tax, and audit purposes.</li>
                  <li>Website inquiry and contact form data is retained for up to two (2) years unless you request earlier deletion.</li>
                  <li>Job applicant data is retained for up to one (1) year after the conclusion of a hiring process unless you have joined our team.</li>
                  <li>Analytics and cookie data is retained in accordance with the policies of our third-party analytics providers, typically between 14 and 26 months.</li>
                </ul>
                <p>When your data is no longer required, we will securely delete or anonymize it.</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">7. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your data including:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Encrypted data transmission using HTTPS/TLS protocols.</li>
                  <li>Access controls and authentication protocols for our internal systems.</li>
                  <li>Regular security assessments and audits.</li>
                  <li>Confidentiality obligations for all employees and contractors who handle personal data.</li>
                </ul>
                <p>While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security, but we are committed to promptly notifying you and relevant authorities in the event of a data breach where required by law.</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">8. International Data Transfers</h2>
                <p>AvolveLabs is based in India and our services are primarily delivered from India. If you access our website or services from outside India, your information may be transferred to and processed in India or other countries where our service providers operate. We ensure that any such transfers are conducted in accordance with applicable data protection laws.</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">9. Your Privacy Rights</h2>
                <p>Depending on your location and applicable law, you may have the following rights:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2">
                  {[
                    "Right of Access", "Right to Rectification", "Right to Erasure", 
                    "Right to Restriction", "Right to Data Portability", 
                    "Right to Object", "Right to Withdraw Consent"
                  ].map((right) => (
                    <div key={right} className="border-b border-gray-100 py-2 font-bold text-[#032d60]">• {right}</div>
                  ))}
                </div>
                <p className="mt-4">To exercise any of these rights, please contact us at the details provided in Section 12. We will respond to all valid requests within 30 days.</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">10. Children&apos;s Privacy</h2>
                <p>Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a minor, please contact us immediately.</p>
              </div>

              <div className="space-y-4">
                <h2 className="font-playfair text-2xl md:text-[32px] font-bold text-[#032d60]">11. Third-Party Links and Services</h2>
                <p>Our website may contain links to third-party websites. This Privacy Policy applies only to our website and services. We are not responsible for the privacy practices of third-party sites and encourage you to review their privacy policies.</p>
              </div>
            </div>

            {/* 12. Contact Us - Styled like a Call to Action */}
            <div className="bg-[#032d60] text-white p-10 md:p-16 rounded-3xl text-center space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold">12. Contact Us</h2>
              <p className="font-poppins opacity-90 text-md md:text-lg">If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
              <div className="font-poppins space-y-2 text-lg">
                <p className="font-bold">AvolveLabs</p>
                <p>Website: <a href="https://www.avolvelabs.com" className="underline hover:text-blue-200 transition">www.avolvelabs.com</a></p>
                <p>Email: <a href="mailto:privacy@avolvelabs.com" className="underline hover:text-blue-200 transition">privacy@avolvelabs.com</a></p>
                <p>Location: India</p>
              </div>
            </div>

            {/* 13. Changes to Policy */}
            <div className="pt-10 border-t border-gray-100">
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#032d60] mb-4">13. Changes to This Privacy Policy</h2>
              <p className="font-poppins text-gray-600 leading-relaxed text-sm md:text-md">
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this policy and, where appropriate, notify you via email or a prominent notice on our website. Your continued use of our website or services after any changes constitutes your acceptance of the revised policy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy