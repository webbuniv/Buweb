import type React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface LecturerProps {
  name: string
  image: string
  qualification: string
}

interface SchoolProps {
  title: string
  subtitle: string
  topImg: string[]
  dean: string
  deanImage: string
  message: string
  preamble: string
  goal: string
}

const School: React.FC<SchoolProps> = ({
  title,
  subtitle,
  topImg,
  dean,
  deanImage,
  message,
  preamble,
  goal,
}) => {
  return (
    <div className="space-y-12  ">
      <Carousel opts={{ align: "start", loop: true }} className="w-full  ">
        <CarouselContent  className="" >
          {topImg.map((img, index) => (
            <CarouselItem key={index} className="" >
              <div className="relative h-[50vh] md:h-[80vh] w-full ">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`School of Science and Technology ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start p-10 text-white">
                  <h1 className="text-2xl md:text-6xl font-bold mb-4">{title}</h1>
                  <p className="text-xl md:text-2xl">{subtitle}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-primary">{goal}</h2>
          <p className="text-muted-foreground">{preamble}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3">
            <Image src={deanImage || "/placeholder.svg"} alt={dean} width={300} height={300} className="rounded-full" />
            <h3 className="text-xl font-semibold mt-4 text-center">{dean}</h3>
            <p className="text-muted-foreground text-center">Dean</p>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-primary">Message from the Dean</h2>
            <p className="text-muted-foreground">{message}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default School

