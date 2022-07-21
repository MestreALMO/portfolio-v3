import { GlobalStyles } from "@mui/material";
import "@fontsource/ubuntu";

export const StylesGlobal = () => {
  return (
    <GlobalStyles
      styles={{
        "*": { fontFamily: "Ubuntu, sans-serif" },
      }}
    />
  );
};
