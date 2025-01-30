import type React from "react"

interface SectionTitleProps {
  title: string
  paragraph: string
  width?: string
  center?: boolean
  mb?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  paragraph,
  width = "1000px",
  center = true,
  mb = "10px",
}) => {
  return (
    <div className={`w-full ${center ? "text-center" : ""} mb-8 mt-8`} style={{ maxWidth: width, marginBottom: mb }}>
      <h2 className="mb-4 text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-[45px]">{title}</h2>
      <p className="text-base leading-relaxed text-muted-foreground md:text-lg max-w-[800px] mx-auto">{paragraph}</p>
    </div>
  )
}

export default SectionTitle

