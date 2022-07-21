import { createContext, useContext, useState } from "react";

const CtxDarkModeContext = createContext({});

export default function CtxDarkModeProvider({ children }: any) {
  const [ctxDarkMode, setCtxDarkMode] = useState<"light" | "dark">("dark");

  return (
    <CtxDarkModeContext.Provider value={{ ctxDarkMode, setCtxDarkMode }}>
      {children}
    </CtxDarkModeContext.Provider>
  );
}

export const useCtxDarkMode = () => {
  const context = useContext(CtxDarkModeContext);
  const { ctxDarkMode, setCtxDarkMode }: any = context;
  return [ctxDarkMode, setCtxDarkMode];
};
