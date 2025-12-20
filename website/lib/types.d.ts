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
export interface ImageItem {
  category: string
  imageUrl: string
  id: string
  date: string
  UploadedBy?: string
  likes?:number
  description?:string
  isLiked?: boolean
}

export interface staffItem {
        name:  string,
        department: string,
        school: string,
        role: string,
        qualification: string,
        photoUrl: string,
        isDean: boolean,
        isHOD: boolean,
        isAdmin:boolean,
        UploadedBy: string,
        id: string,
        date: string,
}