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

interface GlobalContextType {
  user: User;
}

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

interface GlobalContextProps {
  children: ReactNode;
}
export const GlobalProvider = ({ children }: GlobalContextProps) => {
  const [user, setUser] = useState<User>("");

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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <GlobalContext.Provider value={{ user }}>{children}</GlobalContext.Provider>
  );
};
