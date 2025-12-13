"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const experienceData = [
    {
        id: 1,
        company: "Brother's Group Ngo",
        location: "Agra, India",
        position: "Chairman",
        duration: "Feb 2025 – Present",
        logo: "https://play-lh.googleusercontent.com/x1pAYXX5-xn4NVMJV8pYELyDJgqn_J3vYeWT81GMEETzZkJcR3XbFMBMdUQXeO2IQsw", // Place your logo as /public brothes group logo
        website: "#",
        description:
            "As the Chairman of Brothers Group, a growing NGO in India, I lead initiatives for youth empowerment and social welfare.\n" +
            "We focus on youth development, education for underprivileged children, and humanitarian projects.\n" +
            "Our mission is to create positive social impact and strengthen humanity across India.",
        skills: [" Event & Campaign Management", " Leadership & Team Management", " Analytical Thinking", " Communication & Public Speaking","Community Building & Social Impact Strategy"],

    },

    {
    id: 2,
    company: "MatchWith (Footwear Brand)",
    location: "Agra, India",
    position: "Founder",
    duration: "2023 – Aug 2025",
    logo: "/matchwith-logo.png", // Place your logo as /public/matchwith-logo.png
    website: "#",
    description:
        "Founded a footwear startup focused on innovative products, marketing, and customer engagement. Managed business operations and drove brand development.",
    skills: ["Entrepreneurship", "Brand Development", "Product Management", "Marketing"],
    },
  {
    id: 3,
    company: "Indian Institute of Technology, Madras",
    location: "India (Remote)",
    position: "Campus Ambassador",
    duration: "Oct 2024 - Jan 2025",
    logo: "/iitm_logo.png", // Place IIT Madras logo as /public/iitm-logo.png
    website: "https://www.iitm.ac.in/",
    description:
        "Remote full-time campus ambassador, working on Information Technology Infrastructure and Statistical Data Analysis. Promoted IITM events and facilitated IT engagement among the student body.",
    skills: ["Remote Coordination", "IT Infrastructure", "Campus Promotion", "Networking"],
  },
  {
    id: 4,
    company: "Indian Institute of Technology, Roorkee (Cognizance 2025)",
    location: "India (Remote)",
    position: "Campus Ambassador",
    duration: "Mar 2025",
    logo: "/iitroorkee_logo.png", // Place IIT Roorkee logo as /public/iitroorkee-logo.png
    website: "https://www.iitr.ac.in/",
    description:
        "Represented Cognizance 2025 as Campus Ambassador. Managed student engagement and event promotion for IIT Roorkee’s flagship technical fest, increasing institutional outreach and student participation.",
    skills: ["Event Promotion", "Campus Engagement", "Student Relations"],
  },
  {
    id: 5,
    company: "Indian Institute of Technology, Delhi (Kaizen 2025)",
    location: "Delhi, India (Remote)",
    position: "Campus Ambassador",
    duration: "Jan 2025 - Feb 2025",
    logo: "/iitd-logo.png", // Place IIT Delhi logo as /public/iitd-logo.png
    website: "https://www.iitd.ac.in/",
    description:
        "Campus ambassador for the Kaizen 2025 program. Coordinated between the institution and student body, enhancing event awareness and participation through leadership and communication.",
    skills: ["Institutional Coordination", "Event Awareness", "Leadership", "Teamwork"],
  },
  {
    id: 6,
    company: "GL Bajaj Group of Institutions",
    location: "Mathura, Uttar Pradesh",
    position: "Student, B.Tech CSE",
    duration: "2023 – 2027",
    logo: "/glb.png", // Place GL Bajaj logo as /public/glbajaj-logo.png
    website: "https://www.glbajajgroup.org/",
    description:
        "Actively pursuing B.Tech in Computer Science and Engineering with specialization in Artificial Intelligence (AI) and Project Management. Active participant in technical events, workshops, and collaborative projects.",
    skills: ["AI/ML", "Project Management", "Collaboration", "Technical Events"],
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const detailsVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  return (
      <section id="experience" className="py-12 md:py-20 bg-black dark:bg-[#f8fafc] transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
          </motion.div>

          <motion.div
              ref={containerRef}
              style={{ opacity }}
              className="max-w-4xl mx-auto relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#3EADCF] to-[#57D9FF] z-0"></div>

            <div className="space-y-24">
              {experienceData.map((exp, index) => (
                  <motion.div key={exp.id} className="relative z-10">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#57D9FF] border-4 border-black dark:border-white z-20"></div>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      {/* --- LEFT BOXED CARD --- */}
                      <motion.div
                          variants={itemVariants}
                          className="md:w-1/2 w-full flex flex-col items-center md:items-end"
                      >
                        <div className="w-full md:max-w-xs bg-[#111827] dark:bg-gray-100 rounded-2xl shadow-lg border border-[#3EADCF]/30 px-6 py-6 flex flex-col items-center md:items-end relative z-10 mb-4 md:mb-0">
                          <Link href={exp.website} target="_blank" rel="noopener noreferrer" className="group w-full flex flex-col items-center md:items-end">
                            <div className="w-20 h-20 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden shadow-md mb-3">
                              <img
                                  src={exp.logo || "/placeholder.svg"}
                                  alt={exp.company}
                                  className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="inline-block px-3 py-1 bg-black/30 dark:bg-[#c6d0f5]/20 text-white dark:text-[#0f172a] font-bold text-base md:text-lg rounded-xl mb-2 shadow">
                          {exp.company}
                        </span>
                          </Link>
                          <div className="w-full flex flex-col items-center md:items-end">
                            <h4 className="text-base md:text-lg font-semibold text-white dark:text-[#0f172a] mb-1">
                              {exp.location}
                            </h4>
                            <p className="text-[#57D9FF] dark:text-[#0284c7] font-medium mb-1">{exp.position}</p>
                            <p className="text-[#e0f2fe] dark:text-[#475569] mb-2 text-sm">{exp.duration}</p>
                          </div>
                        </div>
                      </motion.div>
                      {/* --- RIGHT DETAILS --- */}
                      <motion.div variants={detailsVariants} className="md:w-1/2 w-full md:pl-12">
                        <motion.div
                            className="bg-[#111827] dark:bg-gray-100 p-6 rounded-lg border border-[#3EADCF]/30 shadow-lg hover:shadow-[#3EADCF]/20 transition-shadow duration-300"
                            whileHover={{ y: -5 }}
                        >
                          <p className="text-[#D1D5DB] dark:text-[#475569] leading-relaxed mb-6">{exp.description}</p>
                          <div className="pt-4 border-t border-[#3EADCF]/20">
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                  <span
                                      key={skill}
                                      className="px-3 py-1 bg-black/40 dark:bg-white/40 rounded-full text-[#57D9FF] dark:text-[#0284c7] text-sm border border-[#3EADCF]/30"
                                  >
                              {skill}
                            </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  )
}