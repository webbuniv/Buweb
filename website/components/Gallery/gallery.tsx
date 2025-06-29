"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Download,
  Share2,
  Heart,
  Eye,
  Calendar,
  MapPin,
  Camera,
  Users,
  Building,
  GraduationCap,
  Zap,
  Grid3X3,
  List,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react"
import { CgDetailsMore } from "react-icons/cg";
import Image from "next/image"
import { getAllImages,updateLikes } from "@/lib/actions/gallery.actions"
import { ImageItem } from '@/lib/types';



const categories = ["All", "campus", "studentsLife", "events", "facilities", "sports", "academic"]

const categoryIcons = {
  campus: Building,
  "studentsLife": Users,
  events: Calendar,
  facilities: Zap,
  sports: Users,
  academic: GraduationCap,
}

export default function UniversityGallery() {
        
  const [filteredImages, setFilteredImages] = useState<ImageItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [sortBy, setSortBy] = useState("date")
  const [zoomLevel, setZoomLevel] = useState(1)
const [images, setImages] = useState<ImageItem[]>([])
        
useEffect(() => {
        const fetchImages = async () => {
        try {
                const fetchedImages = await getAllImages()
                console.log("images: ",fetchedImages)
                setImages(fetchedImages)
        } catch (error) {
                console.error("Failed to fetch images:", error)
        }
        }
        
        fetchImages()
        }, [])

    const handleLikeUpdate = async (imageId: string) => {
                const updatedImage = await updateLikes(imageId)
                return updatedImage
        }

  useEffect(() => {
    let filtered = [...images]

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((img) => img.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (img) =>
          img.category.toLowerCase().includes(searchTerm.toLowerCase()) 
      )
    }

    // Sort images
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "likes":
          return b.likes - a.likes
        case "category":
          return a.category.localeCompare(b.category)
        default:
          return 0
      }
    })

    setFilteredImages(filtered)
  }, [images, selectedCategory, searchTerm, sortBy])

  const toggleLike = (imageId: string) => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === imageId
          ? {
              ...img,
              isLiked: true
            }
          : img,
      ),
    )
    handleLikeUpdate(imageId)
  }

  const openImageModal = (image: ImageItem) => {
    setSelectedImage(image)
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id))
    setZoomLevel(1)
  }

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % filteredImages.length
        : (currentImageIndex - 1 + filteredImages.length) % filteredImages.length

    setCurrentImageIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
    setZoomLevel(1)
  }

  const downloadImage = (image: ImageItem) => {
//  Download Here
    console.log("Downloading image:", image.category)
  }

  const shareImage = (image: ImageItem) => {
    if (navigator.share) {
      navigator.share({
        title: image.category,
        text: image.category,
        url: image.imageUrl,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className=" flex flex-col min-h-screen  bg-black "
    style={{ backgroundImage: `url("/images/hero/land1.jpg")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' }}
    >
      {/* Header */}
      <div className=" bg-black/60 shadow-sm border-b border-black"> 
        <div className="max-w-7xl mx-auto px-4 py-6 ">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-32">
            <div>
              <h1 className="text-3xl font-bold text-gray-300">University Gallery</h1>
              <p className="text-gray-200 mt-1">Explore our campus life through photos</p>
            </div>
            
          </div>
        </div>
      </div>

      <div className=" bg-black/70 mx-auto  px-4 py-4 ">
        {/* Filters and Search */}
        <Card className="mb-6 opacity-70">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <Label className="text-gray-600" htmlFor="search">Search Gallery</Label>
                <div className="relative mt-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="search"
                    placeholder="Search by title, description, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="lg:w-48">
                <Label htmlFor="sort">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date (Newest)</SelectItem>
                    <SelectItem value="likes">Most Liked</SelectItem>
                    <SelectItem value="category">Category (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
          <TabsList className="grid grid-cols-3 lg:grid-cols-7 w-full">
            {categories.map((category) => {
              const Icon = category !== "All" ? categoryIcons[category as keyof typeof categoryIcons] : Filter
              return (
                <TabsTrigger key={category} value={category} className="flex text-white items-center  gap-1">
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="hidden  sm:inline ">{category}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-6">
            {/* Gallery Grid */}
            {filteredImages.length === 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Card  className="">
                <CardContent className="p-12 text-center">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No images found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </CardContent>
              </Card>
              </div>
            ) : (
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                  <Card
                    key={image.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    onClick={() => openImageModal(image)}
                  >
                    <div className="relative">
                      <Image
                        src={image.imageUrl || "/placeholder.svg"}
                        alt={image.category}
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
                      <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge className={`${image.category === "Events" ? "bg-purple-500" : "bg-blue-500"}`}>
                          {image.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{image.category}</h3>
                      <h3 className=" text-gray-400 mb-1 line-clamp-1">Uploaded by : {image.UploadedBy}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{image.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {formatDate(image.date)}
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleLike(image.id)
                            }}
                            className={`flex items-center gap-1 hover:text-red-500 transition-colors ${
                              image.isLiked ? "text-red-500" : ""
                            }`}
                          >
                            <Heart className={`w-3 h-3 ${image.isLiked ? "fill-current" : ""}`} />
                            {image.likes}
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl max-h-[95vh] p-0">
            {selectedImage && (
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Display */}
                <div className="flex-1 relative bg-black flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
                  <div className="relative overflow-hidden">
                    <Image
                      src={selectedImage.imageUrl || "/placeholder.svg"}
                      alt={selectedImage.category}
                      width={500}
                      height={500}
                      className="max-w-full max-h-full object-contain"
                      style={{
                        transform: `scale(${zoomLevel})`,
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>

                  {/* Navigation Arrows */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => navigateImage("prev")}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => navigateImage("next")}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>

                  {/* Zoom Controls */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-black/50 text-white hover:bg-black/70"
                      onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.25))}
                    >
                      <ZoomOut className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-black/50 text-white hover:bg-black/70"
                      onClick={() => setZoomLevel(Math.min(3, zoomLevel + 0.25))}
                    >
                      <ZoomIn className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Close Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Image Details Sidebar */}
                <div className="lg:w-96 p-6 bg-white overflow-y-auto">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.category}</h2>
                      <p className="text-gray-600">{selectedImage.category}</p>
                    </div>

                    <div className="flex gap-2">
                      <Badge className="bg-blue-500">{selectedImage.category}</Badge>
                      {/* {selectedImage.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))} */}
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">By {selectedImage.UploadedBy}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{formatDate(selectedImage.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CgDetailsMore  className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{selectedImage.description}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Heart className={`w-4 h-4 ${ "fill-current text-red-500" }`} />
                          {selectedImage.likes}
                        </div>
                       
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleLike(selectedImage.id)}
                        className={"text-red-500 border-red-500"}
                      >
                        <Heart className={`w-4 h-4 mr-1 ${selectedImage.isLiked ? "fill-current" : ""}`} />
                        {selectedImage.isLiked ? "Liked" : "Like"}
                      </Button>

                      <Button className={"text-blue-500 border-blue-500"} variant="outline" size="sm" onClick={() => shareImage(selectedImage)}>
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </Button>

                      <Button className={"text-yellow-500 border-yellow-500"} variant="outline" size="sm" onClick={() => downloadImage(selectedImage)}>
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

    </div>
  )
}
