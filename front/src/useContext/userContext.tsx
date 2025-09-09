import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export const userContext = createContext<objType | null>(null);

export type UserType = {
  username: string;
  password: string;
};

export type objType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export default function UserContext({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserType | null>(null);
  const obj: objType = {
    user: user,
    setUser: setUser,
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUser(JSON.parse(user));
  }, []);
  return (
    <div>
      <userContext.Provider value={obj}>{children}</userContext.Provider>
    </div>
  );
}
