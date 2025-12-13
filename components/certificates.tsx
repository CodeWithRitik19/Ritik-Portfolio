"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Award, Calendar, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

// ==== FULL CERTIFICATES ARRAY ====
// Expand this array with as many certificates as you want. Just follow the structure below.
const certificatesData = [
    {
        id: 1,
        title: " Generative AI Professional",
        issuer: "Oracle",
        issuedDate: "April 2025",
        credentialId: "103045905OCI25GAIOCP",
        description: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professiona",
        image: "data:image/png;base64,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",
        url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4577952C6FE1DEAB4A4D6A010999730AA48199C47BB00EBCA5ABD4DB90D38475",
    },
    {
        id: 2,
        title: "AWS S3 basics",
        issuer: "Coursera",
        issuedDate: "April 2025",
        credentialId: "",
        description: "Fundamentals of Amazon S3 for scalable cloud storage and management.",
        image: "/logos/coursera.png",
        url: "https://coursera.org/share/253abc02e84c4c44db5013b71c1376cf",
    },
  {
    id: 3,
    title: "Advanced Search Engine Optimization",
    issuer: "Coursera",
    issuedDate: "April 2025",
    credentialId: "",
    description: "Deep dive into advanced SEO strategies to boost website ranking and performance.",
    image: "/logos/coursera.png",
    url: "https://coursera.org/share/7e2cb5205466fa5ceb9a6e923db8d444",
  },
  {
    id: 4,
    title: "Java",
    issuer: "Udemy",
    issuedDate: "October 2024",
    credentialId: "UC-a5687e5e-5496-4c84-a087-2077deb82100",
    description: "Comprehensive Java programming covering OOPs, data structures, and development basics.",
    image: "/logos/udemy.png",
    url: "https://www.udemy.com/certificate/UC-a5687e5e-5496-4c84-a087-2077deb82100/",
  },
  {
    id: 5,
    title: "BUSINESS Analytics with Excel",
    issuer: "Simplilearn",
    issuedDate: "September 2024",
    credentialId: "7359053",
    description: "Leveraging Excel for business analytics and data-driven decision making.",
    image: "/logos/simplilearn.png",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI2NjQiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl83MzU5MDUzXzE3MjU4MjQzOTAucG5nIiwidXNlcm5hbWUiOiJSaXRpayBrdW1hciJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_7359053_1725824390.png&_branch_match_id=1456689084757440001&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1q%2F0TQ%2FxKqko8fJNsq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FAD9BKLg9AAAA",
  },
  {
    id: 6,
    title: "Introduction to Data Science",
    issuer: "Cisco",
    issuedDate: "September 2024",
    credentialId: "",
    description: "Introduction to core data science principles, techniques, and tools.",
    image: "/logos/cisco.svg",
    url: "https://www.credly.com/badges/170aa3a0-7ed1-44aa-8bfc-8e92083b44fe/linked_in_profile",
  },
  {
    id: 7,
    title: "AI Engineering Professional Program",
    issuer: "ITRONIX SOLUTIONS",
    issuedDate: "May 2024",
    credentialId: "#00045196",
    description: "Professional program focused on AI engineering and application development.",
    image: "/logos/itronix.png", // If you have it, else use a placeholder or the default image
    url: "#",
  },
  {
    id: 8,
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft",
    issuedDate: "May 2024",
    credentialId: "3f2d6e0d8d4859d969874ed06ea30ce50203efec254b72818a5cad58b906c10f",
    description: "Essential concepts and applications of Generative AI, offered by Microsoft and LinkedIn.",
    image: "/logos/microsoft.png",
    url: "https://www.linkedin.com/learning/certificates/3f2d6e0d8d4859d969874ed06ea30ce50203efec254b72818a5cad58b906c10f?trk=share_certificate",
  },
  {
    id: 9,
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn",
    issuedDate: "May 2024",
    credentialId: "",
    description: "Exploring the ethical considerations and societal impacts of generative AI.",
    image: "/logos/linkedin.png",
    url: "https://www.linkedin.com/learning/certificates/337d4a03cb75ebb16d94b94c11bdd88ecc802e5f4db0c174db099ddd7a2d8bed",
  },
  {
    id: 10,
    title: "Gemini in Google Sheets",
    issuer: "Google Cloud Skills Boost",
    issuedDate: "May 2024",
    credentialId: "8987677",
    description: "Google Cloud badge for integrating Gemini with Google Sheets for AI-driven tasks.",
    image: "/logos/google.png",
    url: "https://www.cloudskillsboost.google/public_profiles/2a566e3c-fa0c-4baa-817b-7cd7de2dd2fd/badges/8987677?locale=ar&utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    id: 11,
    title: "Introduction to artificial intelligence",
    issuer: "Simplilearn",
    issuedDate: "May 2024",
    credentialId: "6134433",
    description: "Overview of AI concepts, history, and real-world applications.",
    image: "/logos/simplilearn.png",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI5MzIiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl82MTM0NDMzXzE3MTY3MTg0MTQucG5nIiwidXNlcm5hbWUiOiJyaXRpayBrdW1hciAifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_6134433_1716718414.png&_branch_match_id=1456689084757440001&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k93tMgyyyuqCPVKsq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FAJ%2FZYb49AAAA",
  },
  {
    id: 12,
    title: "Introduction to computer science",
    issuer: "Saylor Academy",
    issuedDate: "May 2024",
    credentialId: "6497223743RK",
    description: "Introduction to computer science fundamentals, algorithms, and programming.",
    image: "/logos/saylor.png",
    url: "https://learn.saylor.org/course/view.php?id=64",
  },
]


// ==== CERTIFICATES COMPONENT ====
// This carousel will render all items above with navigation.

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev === certificatesData.length - 1 ? 0 : prev + 1))
  }

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificatesData.length - 1 : prev - 1))
  }

  // Optional: Customize tags by title
  const getTechTags = (title: string) => {
    const lowerTitle = title.toLowerCase()
    if (lowerTitle.includes("python")) return ["Python", "AI/ML"]
    if (lowerTitle.includes("sql")) return ["SQL", "Databases"]
    if (lowerTitle.includes("data")) return ["Data Science"]
    if (lowerTitle.includes("cloud") || lowerTitle.includes("gemini") || lowerTitle.includes("aws")) return ["Cloud", "AI"]
    if (lowerTitle.includes("c++")) return ["C++", "Programming"]
    if (lowerTitle.includes("prompt")) return ["Prompt Engineering", "AI"]
    if (lowerTitle.includes("seo")) return ["SEO", "Web"]
    if (lowerTitle.includes("ad")) return ["Digital Marketing", "AI"]
    if (lowerTitle.includes("cyber")) return ["Cybersecurity"]
    return ["Certification"]
  }

  return (
      <section id="certificates" className="py-12 md:py-20 bg-black dark:bg-[#f8fafc] transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
            <p className="mt-4 text-[#D1D5DB] dark:text-[#475569] max-w-2xl mx-auto">
              A showcase of all my professional certifications across AI/ML, Software Development, Cloud, and more.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3EADCF]/20 to-[#57D9FF]/20 blur-3xl opacity-30 rounded-3xl"></div>
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-[#111827]/80 dark:bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-[#3EADCF]/30 relative overflow-hidden shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="w-40 h-40 mx-auto rounded-lg overflow-hidden border-4 border-[#3EADCF] relative group bg-white p-4 flex items-center justify-center">
                    <img
                        src={certificatesData[currentIndex].image || "/placeholder.svg"}
                        alt={`${certificatesData[currentIndex].issuer} logo`}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 flex justify-center"
                  >
                    {certificatesData[currentIndex].url !== "#" ? (
                        <a
                            href={certificatesData[currentIndex].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] text-white rounded-md hover:from-[#57D9FF] hover:to-[#3EADCF] transition-all duration-300 hover:scale-105"
                        >
                          Verify Certificate
                        </a>
                    ) : (
                        <span className="inline-block px-4 py-2 bg-gray-500 text-white rounded-md opacity-50 cursor-not-allowed">
                      Certificate Unavailable
                    </span>
                    )}
                  </motion.div>
                </div>
                <div className="md:w-2/3">
                  <motion.h3
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-bold text-[#57D9FF] dark:text-[#0284c7] mb-4"
                  >
                    {certificatesData[currentIndex].title}
                  </motion.h3>
                  <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="flex flex-col space-y-3 mb-6"
                  >
                    <div className="flex items-center text-[#D1D5DB] dark:text-[#475569]">
                      <Building className="h-4 w-4 mr-2 text-[#57D9FF]" />
                      <span className="font-medium">Issued by:</span>
                      <span className="ml-2">{certificatesData[currentIndex].issuer}</span>
                    </div>
                    <div className="flex items-center text-[#D1D5DB] dark:text-[#475569]">
                      <Calendar className="h-4 w-4 mr-2 text-[#57D9FF]" />
                      <span className="font-medium">Issue Date:</span>
                      <span className="ml-2">{certificatesData[currentIndex].issuedDate}</span>
                    </div>
                    <div className="flex items-center text-[#D1D5DB] dark:text-[#475569]">
                      <Award className="h-4 w-4 mr-2 text-[#57D9FF]" />
                      <span className="font-medium">Credential ID:</span>
                      <span className="ml-2 text-sm break-all">{certificatesData[currentIndex].credentialId}</span>
                    </div>
                  </motion.div>
                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-[#D1D5DB] dark:text-[#475569] mb-6"
                  >
                    {certificatesData[currentIndex].description}
                  </motion.p>
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex flex-wrap gap-2"
                  >
                    {getTechTags(certificatesData[currentIndex].title).map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-black/40 dark:bg-white/40 rounded-full text-[#57D9FF] dark:text-[#0284c7] text-sm border border-[#3EADCF]/30"
                        >
                      {tag}
                    </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 rounded-full border border-[#3EADCF] bg-black/50 dark:bg-white/50 backdrop-blur-sm hover:bg-[#3EADCF]/20 z-10"
                onClick={prevCertificate}
            >
              <ChevronLeft className="h-6 w-6 text-[#57D9FF]" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 rounded-full border border-[#3EADCF] bg-black/50 dark:bg-white/50 backdrop-blur-sm hover:bg-[#3EADCF]/20 z-10"
                onClick={nextCertificate}
            >
              <ChevronRight className="h-6 w-6 text-[#57D9FF]" />
              <span className="sr-only">Next</span>
            </Button>
            <div className="flex justify-center mt-6 space-x-2">
              {certificatesData.map((_, index) => (
                  <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentIndex ? "bg-[#57D9FF]" : "bg-[#3EADCF]/30 hover:bg-[#3EADCF]/50"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                  />
              ))}
            </div>
            <div className="text-center mt-4">
            <span className="text-[#D1D5DB] dark:text-[#475569] text-sm">
              {currentIndex + 1} of {certificatesData.length} certificates
            </span>
            </div>
          </div>
        </div>
      </section>
  )
}
