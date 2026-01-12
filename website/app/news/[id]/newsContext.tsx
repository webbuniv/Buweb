"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { NewsData } from "@/lib/types";


interface PostProviderProps {
  children: ReactNode;
  post: NewsData;
}

type PostContextType = {
  state: NewsData;
  setState: React.Dispatch<React.SetStateAction<NewsData>>;
} | null;

export const PostContext = createContext<PostContextType>(null);

export function PostProvider({ children, post }: PostProviderProps) {
  const [state, setState] = useState<NewsData>(post);

  return (
    <PostContext.Provider value={{ state, setState }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
}