import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

interface Post {
  number: number;
  body: string;
  title: string;
  created_at: string;
}

interface ContextPostData {
  postData: Post[];
  fetchAllPosts: () => Promise<void>;
  fetchPosts: (query: string) => Promise<void>;
}

interface ContextPostProviderProps {
  children: React.ReactNode;
}

export const ContextPost = createContext({} as ContextPostData);

export function ContextPostProvider({ children }: ContextPostProviderProps) {
  const [postData, setPostData] = useState<Post[]>([]);
  const fetchAllPosts = useCallback(async () => {
    const response = await axios.get(
      "https://api.github.com/search/issues?q=repo:luizaferri/github_blog"
    );
    setPostData(response.data.items);
  }, []);

  const fetchPosts = async (query: string) => {
    const response = await axios.get("https://api.github.com/search/issues", {
      params: {
        q: `${query} repo:luizaferri/github_blog `,
      },
    });
    setPostData(response.data.items);
  };

  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);

  return (
    <ContextPost.Provider value={{ postData, fetchAllPosts, fetchPosts }}>
      {children}
    </ContextPost.Provider>
  );
}
