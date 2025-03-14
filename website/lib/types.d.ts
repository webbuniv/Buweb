import type { QueryFunctionContext } from "@tanstack/react-query";

export type PublicationName = {
  publication: {
    title: string;
    displayTitle?: string;
    favicon?: string;
  };
};

interface User {
  _id: string;
  name: string;
  image: string;
}

interface Comment {
  _id: string;
  user: string | User;
  post: string | Post;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  desc: string;
  img: string;
  cat: string;
  views: string[];
  user: User;
  comments: Comment[];
  status: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}


type GetPostsResponse = {
  publication: {
    posts: {
      edges: {
        node: PostMetadata;
        cursor: string;
      }[];
    };
  };
};

type GetPostsFunctionArgs = {
  first: number;
  after: string;
};

export type GetPostsArgs = QueryFunctionContext & GetPostsArgs;

export type SubscribeToNewsletterResponse = {
  data?: {
    subscribeToNewsletter: {
      status: string;
    };
  };

  errors?: { message: string }[];
};

export type Post = {
  title: string;
  subtitle: string;
  coverImage: {
    url: string;
  };
  content: {
    html: string;
  };
  author: {
    name: string;
    profilePicture: string;
  };
};

export type GetPostBySlugResponse = {
  publication: {
    post: Post;
  };
};

export type WebPage = {
  id?: string | number
  url: string
  title: string
  content: string
  links: string[]
  lastCrawled: Date
  documentData?: DocumentData
}

export type DocumentData = {
  fileType: string
  tags?: string[]
  category?: string
  fileName?: string
  author?: string
  createdDate?: string
  modifiedDate?: string
}

export type ContactInfo = {
  email?: string
  phone?: string
  address?: string
  socialMedia?: Record<string, string>
}

export type AcademicProgram = {
  name: string
  level: string
  department?: string
  description?: string
  duration?: string
  url?: string
}

export type AdmissionInfo = {
  requirements?: string
  deadlines?: string
  applicationProcess?: string
  tuitionFees?: string
}

export type Event = {
  name: string
  date?: string
  location?: string
  description?: string
}

export type FAQItem = {
  question: string
  answer: string
}

export type Facility = {
  name: string
  description?: string
  location?: string
}

export type CrawlOptions = {
  startUrl: string
  maxPages?: number
  allowedDomains?: string[]
}

