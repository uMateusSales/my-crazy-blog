import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

import axios from "axios";

interface IPost {
  id: number;
  title: string;
  body: string;
}

interface GlobalContextType {
  posts: IPost[];

  user: string;
}

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

interface GlobalContextProps {
  children: ReactNode;
}
export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [user, setUser] = useState("");

  const getUser = async () => {
    const response = await fetch("https://api.github.com/users/uMateusSales");
    const json = await response.json();
    setUser(json.name);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <GlobalContext.Provider value={{ posts, user }}>
      {children}
    </GlobalContext.Provider>
  );
};
