'use client'

import Image from 'next/image'
import Link from 'next/link'
import learning from "../../public/images/schools/lab1.jpg";

interface HeroButtonProps {
  children: React.ReactNode
  href: string
  className?: string
}

const HeroButton = ({ children, href, className = '' }: HeroButtonProps) => (
  <Link 
    href={href}
    className={`group inline-flex items-center gap-2 rounded-full border border-black bg-white px-6 py-2 text-sm font-medium text-black transition-all hover:bg-black hover:text-white ${className}`}
  >
    {children}
    <svg
      className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8H15M15 8L8 1M15 8L8 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Link>
)

export default function HeroSectionWhy() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Diagonal decorative shapes */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Professional Courses
            </h1>
            <p>
            We offer a number of professional courses across our faculties. The Department of Computing and Technology offers certifications from CISCO like CCNA, CCNP, and from Microsoft, the department provides MCSE, MCSA. The School of Business prepares students for CPA and other accounting professional courses. Our Nursing students are assessed by the Uganda Nurses And Midwifery Examination Board (UNMEB).
          </p>
            
            <div className="flex flex-wrap gap-4">
              <HeroButton href="/why-kent">
                Why Kent
              </HeroButton>
              
              <HeroButton href="/student-life">
                Student life
              </HeroButton>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg">
            
            <Image
              src={learning}
              alt="Bugema University"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

