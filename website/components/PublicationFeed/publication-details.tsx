"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import axios from "axios"
import { ArrowLeft, Calendar, Download, ExternalLink, FileText, Share, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"

interface Publication {
  item_uuid: string
  title: string
  authors: string | null
  uri: string | null
  date: string | null
  abstract: string | null
}

export function PublicationDetails({ id }: { id: string }) {
  const [publication, setPublication] = useState<Publication | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [relatedPublications, setRelatedPublications] = useState<Publication[]>([])

  useEffect(() => {
    const fetchPublicationDetails = async () => {
      try {
        setLoading(true)
        const response = await axios.get("https://api.bugemauniv.ac.ug/api/items")
        const data = response.data

        // Find the specific publication by ID
        const foundPublication = data.find((pub: Publication) => pub.item_uuid === id)

        if (foundPublication) {
          setPublication(foundPublication)

          // Find related publications (same author or similar date)
          const related = data
            .filter(
              (pub: Publication) =>
                pub.item_uuid !== id &&
                ((pub.authors &&
                  foundPublication.authors &&
                  pub.authors.toLowerCase().includes(foundPublication.authors.split(",")[0].toLowerCase())) ||
                  (pub.date &&
                    foundPublication.date &&
                    pub.date.split("-")[0] === foundPublication.date.split("-")[0])),
            )
            .slice(0, 3)

          setRelatedPublications(related)
        } else {
          setError(new Error("Publication not found"))
        }
      } catch (err) {
        console.error("Error fetching publication details:", err)
        setError(err instanceof Error ? err : new Error("An unknown error occurred"))
      } finally {
        setLoading(false)
      }
    }

    fetchPublicationDetails()
  }, [id])

  if (loading) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Publications
          </Link>
        </Button>
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-32 w-full" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error || !publication) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Publications
          </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Publication Not Found</CardTitle>
            <CardDescription>
              We couldn&apos;t find the publication you&apos;re looking for. It may have been removed or the ID is incorrect.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/">Return to Publications</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-6" asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Publications
        </Link>
      </Button>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl md:text-3xl mb-2">{publication.title}</CardTitle>
              {publication.date && (
                <Badge variant="outline" className="mb-2">
                  <Calendar className="mr-1 h-3 w-3" />
                  {publication.date}
                </Badge>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share className="h-4 w-4" />
              </Button>
              {publication.uri && (
                <Button variant="outline" size="icon" asChild>
                  <a href={publication.uri} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {publication.authors && (
            <div className="flex items-start gap-2">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Authors</h3>
                <p>{publication.authors}</p>
              </div>
            </div>
          )}

          {publication.abstract && (
            <div className="flex items-start gap-2">
              <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Abstract</h3>
                <p className="text-muted-foreground whitespace-pre-line">{publication.abstract}</p>
              </div>
            </div>
          )}

          {publication.uri && (
            <div className="flex items-center mt-4">
              <Button variant="default" className="gap-2" asChild>
                <a href={publication.uri} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  View Full Publication
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {relatedPublications.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Related Publications</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPublications.map((pub) => (
              <Card key={pub.item_uuid} className="h-full flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base line-clamp-2">{pub.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {pub.authors && (
                      <div className="flex items-center">
                        <User className="mr-1 h-3 w-3" />
                        {pub.authors.split(",")[0]}
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  {pub.abstract ? (
                    <p className="text-xs text-muted-foreground line-clamp-3">{pub.abstract}</p>
                  ) : (
                    <p className="text-xs text-muted-foreground italic">No abstract available</p>
                  )}
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                    <Link href={`/publications/${pub.item_uuid}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

