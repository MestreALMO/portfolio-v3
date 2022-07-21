import { createTheme, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useCtxDarkMode } from "../../context/darkMode";

export const ToggleColorMode = ({ children }: any) => {
  const [mode, setMode] = useCtxDarkMode();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
