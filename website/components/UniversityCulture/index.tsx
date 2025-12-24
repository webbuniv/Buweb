"use client"

import type React from "react"
import { useState } from "react"
import { Sparkles, Music, Users, Heart, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { CarouselContent, CarouselItem,Carousel, CarouselPrevious, CarouselNext } from "../ui/carousel"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

interface CelebrationCard {
  id: number
  title: string
  description: string
  date: string
  color: string
  icon: React.ReactNode
  image: string
}

export default function UniversityCulture() {
  const carousel = Autoplay({ delay: 5000 })
  const celebrations: CelebrationCard[] = [
    {
      id: 1,
      title: "AUUS Sports",
      description:
        "Celebrating Unity in Diversity: A Look at the Bugema University Cultural Gala 🌍",
      date: "October-November ",
      color: "from-red-500 to-rose-600",
      icon: <Sparkles className="w-6 h-6" />,
      image: "/images/gala/marathon.jpg",
    },
    {
      id: 2,
      title: "Music & Arts Week",
      description:
        "Showcase your talent through live performances, art exhibitions, and interactive workshops celebrating diverse artistic expressions.",
      date: "May - June",
      color: "from-yellow-100 to-orange-500",
      icon: <Music className="w-6 h-6" />,
      image: "/images/gala/gaa.jpg",
    },
    {
      id: 3,
      title: "Cultural Unity Day",
      description:
        "Bring together students from all backgrounds in a day of unity, featuring traditional dances, cuisines, and cultural exchange.",
      date: "July - August",
      color: "from-green-500 to-emerald-600",
      icon: <Users className="w-6 h-6" />,
      image: "/images/gala/burundi.jpg",
    },
    {
      id: 4,
      title: "Heritage & Pride Month",
      description:
        "Celebrate our rich heritage with heritage walks, storytelling sessions, and exhibitions honoring our university's history and traditions.",
      date: "September - October",
      color: "from-blue-500 to-indigo-600",
      icon: <Heart className="w-6 h-6" />,
      image: "/images/gala/ga.jpg",
    },
  ]

  return (
    <div className=" bg-red-600 overflow-hidden"
//     style={{ backgroundImage: "url('/images/compound.jpg')",
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backdropFilter: 'blur(50px)',
                
//                 backgroundBlendMode:"multiply",
//                 backgroundColor: 'rgba(220, 38, 38, 0.9)'
//          }}
    >
      {/* Header Section */}
      <div className="relative pt-2  px-4 sm:px-6 lg:px-8 mb-3">
        <div className="max-w-7xl mx-auto text-center">
        
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Celebrate{" "}
            <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
              Diversity & Culture
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experience vibrant celebrations that bring our community together, honoring the rich tapestry of cultures
            and traditions that make our university unique.
          </p>
        </div>
      </div>
<div className="relative py-2 px-4 h-[300px] w-[90%] mx-auto  bg-white backdrop-blur-md">
           <div className="  px-6  gap-2 h-full ">
                
                                    <Carousel opts={{ loop: true}} plugins={carousel ? [carousel] : undefined} className=" md:flex h-full   text-white text-xl font-semibold md:p-2">
        <CarouselContent className='h-full w-full -ml-0'>
  {celebrations.map((celebration, index) => (
    <CarouselItem key={index} className=" basis-[350px] md:basis-[350px] shrink-0 h-full bg-dgreen-600">
      <div className="p-1">
        <Card className="h-auto  w-full">
          <CardContent className="relative p-0 group bg-dark  flex flex-col rounded-lg h-full  overflow-hidden w-full">
                <div className="flex w-full bg-dark  ">
                      <div className="relative w-full h-[250px]">
                        <Image
                          src={celebration.image || "/placeholder.svg"}
                          alt={celebration.title}
                          fill
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 rounded-t-lg"
                        />
                      </div>
                </div>

                <div className="absolute md:opacity-0 group-hover:opacity-100 bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col  w-full">
                      <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                        {celebration.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white dark:text-white mb-4 line-clamp-2">
                        {celebration.title}
                      </h3>
                            <p className="text-sm text-gray-300 dark:text-gray-400 mb-4 line-clamp-3">
                                {celebration.description}
                                </p>
                      <Link
                        href={"/gallery"}
                        className=" w-[50%]  border p-2 rounded-full bg-red-600 hover:bg-blue-600 inline-flex items-center text-sm font-bold text-white   "
                      >
                        More like this <ChevronRight className="ml-1 w-4 h-4 hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ))}
        </CarouselContent>
        <CarouselPrevious className="-left-3 bg-dark" />
        <CarouselNext className="-right-3 bg-dark" />
        </Carousel>
                  
                
            </div>
        </div>

    </div>
  )
}
