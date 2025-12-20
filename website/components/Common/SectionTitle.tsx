interface SectionTitleProps {
  title: string
  paragraph?: string
  center?: boolean
  className?: string
}

export default function SectionTitle({ title, paragraph, center = false, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl mb-4">{title}</h2>
      {paragraph && <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{paragraph}</p>}
    </div>
  )
}
