import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Events } from "@/types/types";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "../ui/button";


type Props = {
    post: Events;
}

const SingleEvent = ({ post }: Props) => {
  return (
  <>
  
      <Card className="overflow-hidden   duration-300 bg-card flex flex-col">
      <div className="relative h-48 overflow-hidden  hover:scale-105 transition-transform duration-500 ">
        <Badge className={`${new Date(post.date) <= new Date() ? "bg-red-500 absolute top-4 right-4" : "bg-blue-600 absolute top-4 right-4"}`} variant="secondary">{new Date(post.date) <= new Date() ? "Completed" : "Upcoming"}</Badge>
        <Link href={`/events/${post.$id}`} passHref className="mb-1 block text-sm md:text-lg font-bold text-black/80 hover:text-primary dark:text-white dark:hover:text-primary sm:text-md">
               <img
          src={`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${post.file}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`}
          alt={post.title}
          className="w-full h-full object-cover"
        />
          </Link>
       
        {/* <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{post.category}</Badge> */}
      </div>
      <CardContent className="p-5 flex-grow">
        <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        {/* <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.description}</p> */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            <span className="truncate">{post.location}</span>
          </div>
           <div className="flex items-center gap-2 text-sm text-muted-foreground">
            BY: 
            <span className="truncate">{post.organizer}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Link href={`/events/${post.$id}`} passHref className="mb-1 text-sm rounded-full border border-blue-500 p-2 font-bold text-black/80 hover:text-primary dark:text-white dark:hover:text-primary sm:text-md">
              Learn More
          </Link>
      </CardFooter>
    </Card></>
  );
};

export default SingleEvent;
