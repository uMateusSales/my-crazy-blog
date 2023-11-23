import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import axios from "axios";
interface User {
  avatar: string;
  name: string;
  bio: string;
  url: string;
}

interface Post {
  title: string;
  body: string;
}

interface GlobalContextType {
  user: User;
  posts: Post[];
}

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

interface GlobalContextProps {
  children: ReactNode;
}
export const GlobalProvider = ({ children }: GlobalContextProps) => {
  const [user, setUser] = useState<User>({
    name: "",
    bio: "",
    avatar: "",
    url: "",
  });

  const [posts, setPosts] = useState<Post[]>([]);

  const getUser = useCallback(async () => {
    try {
      const response = await axios.get("/users/uMateusSales", {
        baseURL: "https://api.github.com",
      });

      setUser({
        name: response.data.name,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
        url: response.data.url,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getIssues = useCallback(async () => {
    try {
      const response = await axios.get("/search/issues", {
        baseURL: "https://api.github.com",
        params: { q: "repo:uMateusSales/my-crazy-blog" },
      });

      console.log(response.data.items);

      setPosts(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUser();
    getIssues();
  }, []);

  return (
    <GlobalContext.Provider value={{ user, posts }}>
      {children}
    </GlobalContext.Provider>
  );
};
