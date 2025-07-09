const AlumniStats = () => {
  const stats = [
    {
      number: "15,000+",
      label: "Registered Alumni",
      description: "Graduates from all programs",
    },
    {
      number: "50+",
      label: "Countries",
      description: "Alumni presence worldwide",
    },
    {
      number: "85%",
      label: "Employment Rate",
      description: "Within 6 months of graduation",
    },
    {
      number: "$2.5M",
      label: "Annual Giving",
      description: "Alumni contributions to university",
    },
  ]

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary lg:text-5xl">{stat.number}</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">{stat.label}</h3>
              <p className="text-base text-body-color">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AlumniStats
