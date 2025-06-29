import Link from "next/link"
import Image from "next/image"

const AlumniEvents = () => {
  const events = [
    {
      id: 1,
      title: "Annual Alumni Reunion 2024",
      date: "2024-07-15",
      time: "10:00 AM - 6:00 PM",
      location: "Bugema University Main Campus",
      description:
        "Join us for our biggest alumni gathering of the year with networking, campus tours, and celebration dinner.",
      category: "Reunion",
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: true,
    },
    {
      id: 2,
      title: "Career Development Workshop",
      date: "2024-06-20",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      description: "Professional development session focusing on leadership skills and career advancement strategies.",
      category: "Professional Development",
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: true,
    },
    {
      id: 3,
      title: "Alumni Business Network Mixer",
      date: "2024-08-10",
      time: "6:00 PM - 9:00 PM",
      location: "Kampala Serena Hotel",
      description: "Connect with fellow alumni entrepreneurs and business leaders in an exclusive networking event.",
      category: "Networking",
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: true,
    },
  ]

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Upcoming Alumni Events
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Stay connected and engaged with exclusive events designed for our alumni community
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="rounded-md bg-white p-6 shadow-one dark:bg-[#1D2144]">
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="rounded bg-primary px-3 py-1 text-xs font-medium text-white">{event.category}</span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">{event.title}</h3>
                <p className="text-sm text-body-color mb-3">{event.description}</p>

                <div className="space-y-1 text-sm">
                  <p className="flex items-center text-body-color">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </p>
                  <p className="flex items-center text-body-color">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {event.location}
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                {event.registrationOpen ? (
                  <button className="flex-1 rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90">
                    Register Now
                  </button>
                ) : (
                  <button className="flex-1 rounded bg-gray-400 px-4 py-2 text-sm font-medium text-white cursor-not-allowed">
                    Registration Closed
                  </button>
                )}
                <button className="rounded border border-primary px-4 py-2 text-sm text-primary hover:bg-primary hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/alumni/events"
            className="rounded-md bg-primary py-4 px-8 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-80"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AlumniEvents
