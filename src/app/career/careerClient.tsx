'use client'

import React, { useState, useEffect } from 'react'

const CareerClient = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const [visibleElements, setVisibleElements] = useState<{ [key: string]: boolean }>({})
    
    // State for role selection
    const [selectedRole, setSelectedRole] = useState('')

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('data-animate-id')
                    if (id) {
                        setVisibleElements((prev) => ({ ...prev, [id]: true }))
                    }
                }
            })
        }, observerOptions)

        const elements = document.querySelectorAll('[data-animate-id]')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        setStatus('idle')
        setErrorMessage('')

        const form = event.currentTarget
        const formData = new FormData(form)

        // Client-side File Size Validation (5MB)
        const resumeFile = formData.get('resume') as File
        if (resumeFile && resumeFile.size > 5 * 1024 * 1024) {
            setErrorMessage('File size too large. Please upload a file under 5MB.')
            setStatus('error')
            setIsSubmitting(false)
            return
        }

        try {
            const response = await fetch('/api/sendmail', {
                method: 'POST',
                body: formData, // FormData directly bhejna hai, JSON stringify nahi karna
            })

            const data = await response.json().catch(() => ({}))

            if (!response.ok) {
                setErrorMessage(data?.error || 'Something went wrong. Please try again.')
                setStatus('error')
            } else {
                setStatus('success')
                form.reset()
                setSelectedRole('') // Reset dropdown state
            }
        } catch (error) {
            setErrorMessage('Network error. Please check your internet and try again.')
            setStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-white text-slate-900 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="mx-auto max-w-6xl px-6 pb-16 pt-24">
                    <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="slide-up">
                            <p className="mb-4 inline-flex font-poppins items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur animate-in fade-in slide-in-from-bottom-6 duration-700">
                                Careers at avolvelabs
                            </p>
                            <h1 className="text-3xl md:text-[35px] font-playfair font-bold text-[#032d60] leading-tight">
                                Build AI products that move real businesses
                            </h1>
                            <p className="mt-4 max-w-xl font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed ">
                                We are a product-minded team designing practical AI systems for growth, automation, and insight. Join us
                                to ship meaningful work with high standards and real impact.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                                <a href="#open-roles" className="group relative rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-0.5 hover:bg-slate-800 hover:shadow-lg overflow-hidden">
                                    <span className="relative z-10 font-poppins">View open roles</span>
                                </a>
                                <a href="#apply" className="rounded-full font-poppins border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:translate-y-0.5 hover:border-slate-400 hover:shadow-lg hover:bg-slate-50">
                                    Apply now
                                </a>
                            </div>
                            <div className="mt-10 grid gap-6 sm:grid-cols-3">
                                {[
                                    { label: 'Distributed team', value: 'Remote-first' },
                                    { label: 'Work style', value: 'Deep focus' },
                                    { label: 'Growth', value: 'Learning budget' },
                                ].map((item, idx) => (
                                    <div
                                        key={item.label}
                                        data-animate-id={`hero-card-${idx}`}
                                        className={`rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-2 hover:shadow-md hover:border-sky-200 ${visibleElements[`hero-card-${idx}`] ? 'slide-up' : 'opacity-0'}`}
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-poppins">{item.label}</p>
                                        <p className="mt-2 text-lg font-semibold text-slate-900 font-poppins">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="scale-in">
                            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl hover:border-sky-100">
                                <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-sky-100 blur-2xl" />
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-poppins">Team snapshot</p>
                                <h3 className="mt-3 text-2xl font-bold text-[#032d60] font-playfair">Small, senior, high-trust</h3>
                                <p className="mt-3 font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed">
                                    We keep teams lean and highly collaborative. You will own problems end-to-end and work closely with
                                    founders, designers, and clients.
                                </p>
                                <div className="mt-6 grid gap-4">
                                    {['Ship weekly with measurable outcomes', 'Design systems that scale', 'Work with modern stacks and real data'].map((line) => (
                                        <div key={line} className="flex items-start gap-3">
                                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500" />
                                            <p className="text-sm text-slate-600 font-poppins">{line}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Roles Section */}
            <section id="open-roles" className="border-t border-slate-200 bg-slate-50/60">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between slide-up">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-poppins">Open roles</p>
                            <h2 className="mt-3 text-3xl md:text-[35px] font-playfair font-bold text-[#032d60] leading-tight ">Join the team</h2>
                        </div>
                        <p className="max-w-xl font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed">
                            We are always looking for builders who love shipping and learning. Explore a few priority openings below.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {[
                            { title: 'Business Analyst', type: 'Internship', desc: 'We are looking for a Business Analyst Intern to support Salesforce and Zoho CRM projects through requirement gathering and process analysis.' },
                            { title: 'Java Developer (0–3 Years)', type: 'Full time - Onsite', desc: 'Hiring a Java Developer with hands-on experience in Core Java, Spring Boot, REST APIs, and database-driven applications.' },
                            { title: 'Salesforce Developer (2–3 Years)', type: 'Full time - Onsite', desc: 'Skilled in Apex, LWC, Flows, and Salesforce customization to build scalable CRM solutions.' },
                            { title: 'Zoho Developer', type: 'Full time - Onsite', desc: 'We are hiring a Zoho Developer experienced in Deluge scripting, Zoho CRM customization, workflows, and third-party integrations.' },
                        ].map((role, idx) => (
                            <div
                                key={role.title}
                                data-animate-id={`role-card-${idx}`}
                                className={`group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#032d60] hover:shadow-xl ${visibleElements[`role-card-${idx}`] ? 'slide-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${idx * 150}ms` }}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-[#032d60] font-poppins">{role.title}</h3>
                                    <span className="rounded-full font-poppins bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 group-hover:bg-sky-100 group-hover:text-[#032d60] transition">
                                        {role.type}
                                    </span>
                                </div>
                                <p className="mt-4 font-poppins text-md text-gray-700 leading-relaxed">{role.desc}</p>
                                <a href="#apply" className="mt-8 font-poppins inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:gap-3 group-hover:text-[#032d60]">
                                    Apply for this role
                                    <span aria-hidden className="text-lg transition-transform group-hover:translate-x-1">-&gt;</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Process Section */}
            <section className="border-t border-slate-200">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div className="slide-up">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-poppins">Hiring process</p>
                            <h2 className="mt-3 text-3xl md:text-[35px] font-playfair font-bold text-[#032d60] leading-tight">Transparent from hello to offer</h2>
                            <p className="mt-4 font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed">
                                We move quickly and keep communication clear at every step. Expect thoughtful feedback and a respectful
                                experience.
                            </p>
                        </div>
                        <div className="grid gap-4">
                            {[
                                { step: '01', title: 'Intro call', text: 'A short chat to learn about your goals and our needs.' },
                                { step: '02', title: 'Skill interview', text: 'Deep dive into your craft with our team.' },
                                { step: '03', title: 'Practical exercise', text: 'A real-world prompt, scoped to be fair and fast.' },
                                { step: '04', title: 'Final fit', text: 'Meet leadership and align on values and scope.' },
                            ].map((item, idx) => (
                                <div
                                    key={item.step}
                                    data-animate-id={`process-card-${idx}`}
                                    className={`flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-sky-200 ${visibleElements[`process-card-${idx}`] ? 'slide-up' : 'opacity-0'}`}
                                    style={{ animationDelay: `${idx * 150}ms` }}
                                >
                                    <div className="text-sm font-bold text-sky-600 bg-sky-50 rounded-lg px-3 py-2 font-poppins">{item.step}</div>
                                    <div>
                                        <p className="text-lg font-bold text-[#032d60] font-poppins">{item.title}</p>
                                        <p className="mt-1 text-md text-slate-600 font-poppins">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section id="apply" className="border-t border-slate-200 bg-slate-50/60">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
                        <div className="slide-up">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-poppins">Apply</p>
                            <h2 className="mt-3 text-3xl md:text-[35px] font-playfair font-bold text-[#032d60] leading-tight">Tell us about yourself</h2>
                            <p className="mt-4 font-poppins text-md md:text-[18px] text-gray-700 leading-relaxed">
                                Share your background and what you want to build next. We respond to every application within 7 days.
                            </p>
                            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
                                <h3 className="text-lg font-bold text-[#032d60] font-poppins">What we value in applicants</h3>
                                <ul className="mt-6 grid gap-4 text-md text-gray-700 font-poppins">
                                    {[
                                        'Clear communication and ownership',
                                        'Evidence of shipped work',
                                        'Curiosity about AI and systems',
                                        'Ability to collaborate across disciplines',
                                    ].map((line, idx) => (
                                        <li key={line} className="flex items-center gap-3">
                                            <span className="h-2 w-2 rounded-full bg-sky-500" />
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <label className="grid gap-2 text-sm font-bold text-slate-700 font-poppins">
                                    Full Name
                                    <input className="h-12 rounded-xl border border-slate-200 px-4 focus:border-sky-500 outline-none" name="fullName" type="text" required />
                                </label>

                                <label className="grid gap-2 text-sm font-bold text-slate-700 font-poppins">
                                    Email Address
                                    <input className="h-12 rounded-xl border border-slate-200 px-4 focus:border-sky-500 outline-none" name="email" type="email" required />
                                </label>

                                <label className="grid gap-2 text-sm font-bold text-slate-700 font-poppins">
                                    Mobile Number
                                    <input className="h-12 rounded-xl border border-slate-200 px-4 focus:border-sky-500 outline-none" name="mobile" type="tel" required />
                                </label>

                                <label className="grid gap-2 text-sm font-bold text-slate-700 font-poppins">
                                    Current Location
                                    <input className="h-12 rounded-xl border border-slate-200 px-4 focus:border-sky-500 outline-none" name="location" type="text" required />
                                </label>

                                <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2 font-poppins">
                                    Job Role
                                    <select 
                                        name="role" 
                                        className="h-12 rounded-xl border border-slate-200 px-4 bg-white focus:border-sky-500 outline-none"
                                        value={selectedRole}
                                        onChange={(e) => setSelectedRole(e.target.value)}
                                        required
                                    >
                                        <option value="">Select a role</option>
                                        <option value="Java Developer">Java Developer</option>
                                        <option value="Salesforce Developer">Salesforce Developer</option>
                                        <option value="Business Analyst">Business Analyst</option>
                                        <option value="Zoho Developer">Zoho Developer</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </label>

                                {selectedRole === "Other" && (
                                    <input 
                                        className="h-12 rounded-xl border border-slate-200 px-4 sm:col-span-2 animate-in fade-in slide-in-from-top-2" 
                                        placeholder="Please specify your role" 
                                        name="otherRole" 
                                        required 
                                    />
                                )}

                                <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2 font-poppins">
                                    Career objective (Max 50 words)
                                    <textarea 
                                        className="min-h-30 rounded-xl border border-slate-200 px-4 py-3 focus:border-sky-500 outline-none" 
                                        name="project" 
                                        maxLength={400} 
                                        required 
                                    />
                                </label>

                                <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2 font-poppins">
                                    Upload Resume (PDF/DOCX - Max 5MB)
                                    <input 
                                        type="file" 
                                        name="resume" 
                                        accept=".pdf,.docx" 
                                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 cursor-pointer" 
                                        required 
                                    />
                                </label>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting} 
                                className="mt-8 w-full rounded-full bg-[#032d60] py-4 text-white font-bold transition hover:bg-[#021b3a] disabled:opacity-70"
                            >
                                {isSubmitting ? 'Processing...' : 'Submit Application'}
                            </button>

                            {status === 'success' && <p className="mt-4 text-emerald-600 text-center font-semibold">🎉 Application Sent Successfully!</p>}
                            {status === 'error' && <p className="mt-4 text-red-500 text-center text-sm">{errorMessage}</p>}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CareerClient; // Ye line check karo