import type { QueryFunctionContext } from "@tanstack/react-query";

export type PublicationName = {
  publication: {
    title: string;
    displayTitle?: string;
    favicon?: string;
  };
};

export type PostMetadata = {
  title: string;
  subtitle?: string;
  slug: string;
  brief: string; 
  content: {
    text: string;
  };
  coverImage: {
    url: string;
  };
  author: {
    name: string;
    profilePicture: string;
    tagline: string;
  };
  publishedAt
  reactionCount
};

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