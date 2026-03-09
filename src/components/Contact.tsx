// 3rd 
"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";

export default function Contact() {
    const { contact, social } = portfolioData.personalInfo;

    const contactCards = [
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Location",
            value: contact.address,
            href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`,
        },
        // {
        //   icon: <Phone className="w-5 h-5" />,
        //   title: "Phone",
        //   value: contact.phone,
        //   href: `tel:${contact.phone.replace(/\s/g, "")}`,
        // },
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Email",
            value: contact.email,
            href: `mailto:${contact.email}`,
        },
    ];

    const socialLinks = [
        {
            name: "Facebook",
            href: social.facebook,
            path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        },
        {
            name: "LinkedIn",
            href: social.linkedin,
            path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        },
        {
            name: "GitHub",
            href: social.github,
            path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        },
        {
            name: "Twitter",
            href: social.twitter,
            path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        },
    ];

    return (
        <section id="contact" className="relative py-24 sm:py-32 bg-background overflow-hidden">
            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-3 text-primary mb-4">
                        <Send size={18} />
                        <span className="text-xs font-black uppercase tracking-[0.2em]">Connect</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Let's Start a <span className="text-gradient">Conversation.</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                        Whether you have a specific project in mind or just want to say hi,
                        I'm always open to discussing new opportunities.
                    </p>
                </motion.div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        // md:col-span-2 ensures it takes full width on tablets before splitting in 5 on LG
                        className="md:col-span-2 lg:col-span-2 space-y-4"
                    >
                        {contactCards.map((card, i) => (
                            <a
                                key={card.title}
                                href={card.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-6 p-6 rounded-[2rem] glass-panel border-white/5 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                                    {card.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">
                                        {card.title}
                                    </p>
                                    <p className="text-foreground font-bold tracking-tight">
                                        {card.value}
                                    </p>
                                </div>
                            </a>
                        ))}

                        {/* <div className="p-5 rounded-[2rem] bg-secondary/20 border border-white/5">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-6 text-center">Digital Presence</p>
                            <div className="flex justify-center gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl glass-panel border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all group"
                                    >
                                        <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={link.path} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div> */}
                        {/* <div className="pt-8">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Follow Me</p>
                            <div className="flex gap-4"> */}
                        <div className="pt-8 text-center md:text-left">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Follow Me</p>
                            <div className="flex justify-center md:justify-start gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-2xl glass-panel border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all group"
                                    >
                                        <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={link.path} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Large CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 lg:col-span-3"
                    >
                        <div className="relative h-full p-8 sm:p-12 rounded-[2.5rem] glass-panel border-primary/10 overflow-hidden flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />

                            <h3 className="text-3xl font-black mb-6 tracking-tight">Project Inquiries?</h3>
                            <p className="text-muted-foreground mb-10 leading-relaxed font-medium text-lg">
                                For a faster response regarding collaborations, please use my
                                detailed questionnaire. It helps me understand your needs before we talk.
                            </p>

                            <a
                                href={contact.questionFormLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-between gap-4 px-8 py-5 rounded-2xl bg-primary text-white font-black hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95"
                            >
                                <span>Complete Project Form</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </a>

                            <div className="mt-12 flex items-center gap-3">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </div>
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                    Available for new opportunities
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


// "use client";

// import { motion } from "framer-motion";
// import portfolioData from "@/data/portfolio.json";
// import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

// export default function Contact() {
//     const { contact, social } = portfolioData.personalInfo;

//     const contactCards = [
//         {
//             icon: <MapPinIcon className="w-5 h-5" />,
//             title: "Address",
//             value: contact.address,
//             href: `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`,
//         },

//         {
//             icon: <EnvelopeIcon className="w-5 h-5" />,
//             title: "Email",
//             value: contact.email,
//             href: `mailto:${contact.email}`,
//         },
//     ];

//     const socialLinks = [
//         { name: "LinkedIn", href: social.linkedin, icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
//         { name: "GitHub", href: social.github, icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
//         { name: "Twitter", href: social.twitter, icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
//     ];

//     return (
//         <section id="contact" className="relative py-32 bg-slate-950 overflow-hidden">
//             {/* Background Accent */}
//             <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />

//             <div className="max-w-6xl mx-auto px-6">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                     className="text-center mb-20"
//                 >
//                     <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-6">
//                         Get In Touch
//                     </span>
//                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
//                         Let's Start a <span className="text-indigo-400">Conversation</span>
//                     </h2>
//                     <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
//                         Ready to take your next digital project to the level?
//                         Reach out and let's create something extraordinary together.
//                     </p>
//                 </motion.div>

//                 <div className="grid lg:grid-cols-5 gap-12 items-stretch">
//                     {/* Contact Info Card */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="lg:col-span-2 space-y-6"
//                     >
//                         {contactCards.map((card, i) => (
//                             <motion.a
//                                 key={card.title}
//                                 href={card.href}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.4, delay: i * 0.1 }}
//                                 className="group block p-6 rounded-3xl glass border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
//                             >
//                                 <div className="flex items-center gap-6">
//                                     <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
//                                         {card.icon}
//                                     </div>
//                                     <div>
//                                         <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">
//                                             {card.title}
//                                         </p>
//                                         <p className="text-white font-medium">
//                                             {card.value}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </motion.a>
//                         ))}

//                         <div className="pt-8">
//                             <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Follow Me</p>
//                             <div className="flex gap-4">
//                                 {socialLinks.map((link) => (
//                                     <a
//                                         key={link.name}
//                                         href={link.href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300 group"
//                                     >
//                                         <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d={link.icon} />
//                                         </svg>
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </motion.div>

//                     {/* CTA Card */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="lg:col-span-3"
//                     >
//                         <div className="relative h-full p-10 rounded-[2.5rem] glass overflow-hidden border border-white/5">
//                             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -z-10" />

//                             <h3 className="text-3xl font-bold text-white mb-6">Have a specific question?</h3>
//                             <p className="text-slate-400 mb-10 leading-relaxed">
//                                 Feel free to use my dedicated questionnaire form if you have
//                                 specific inquiries about a project or collaboration.
//                                 I'll get back to you within 24 hours.
//                             </p>

//                             <a
//                                 href={contact.questionFormLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-600/20"
//                             >
//                                 <span>Complete the Form</span>
//                                 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                                 </svg>
//                             </a>

//                             <div className="mt-16 flex items-center gap-3 text-slate-500 text-sm">
//                                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                                 <span>Currently accepting new freelance projects</span>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }