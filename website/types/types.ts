// types.ts

import type { JSX } from "react"


export interface News {
    _id: string;
    title: string;
    category: string;
    content: string;
    photo: string;
    date: string;
    tags: string[];
    author: string;
    summary: string;
}


export interface Events {
    $id: string;
    title: string;
    file: string;
    organizer: string;
    location: string;
    description: string;
    date: string;
    $createdAt: number;
}

export interface NewsItem {
    id: string;
    $id: string;
    title: string;
    summary: string;
    author: string;
    date: string;
    category: string;
    content: string;
    file: string;
    $createdAt: number;
}

export interface EventItem {
    id: string;
    $id: string;
    title: string;
    organizer: string;
    location: string;
    description: string;
    file: string;
    date: string;
    $createdAt: number;
}
export interface MenuItem {
  id: number
  title: string
  path?: string
  newTab: boolean
  submenu?: MenuItem[]
}

export interface Blog {
  id: number
  title: string
  paragraph: string
  image: string
  author: {
    name: string
    image: string
    designation: string
  }
  tags: string[]
  publishDate: string
}

export interface Feature {
  id: number
  icon: JSX.Element
  title: string
  paragraph: string
}

export interface Testimonial {
  id: number
  name: string
  designation: string
  content: string
  image: string
  star: number
}

export interface Brand {
  id: number
  name: string
  href: string
  image: string
  imageLight?: string
}