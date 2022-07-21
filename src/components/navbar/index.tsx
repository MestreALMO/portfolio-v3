import { Box, Typography, Link, IconButton, Button } from "@mui/material";
import { projectMaxWidth } from "../../utils/projectMaxWidth";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useCtxDarkMode } from "../../context/darkMode";

export const Navbar = () => {
  const [ctxDarkMode, setCtxDarkMode] = useCtxDarkMode();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Portfolio</Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() =>
              setCtxDarkMode(ctxDarkMode === "dark" ? "light" : "dark")
            }
            color="inherit"
          >
            {ctxDarkMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href={""} sx={{ textDecoration: "none", color: "inherit" }}>
              <Button>Home</Button>
            </Link>
            <Link href={""} sx={{ textDecoration: "none", color: "inherit" }}>
              <Button>About</Button>
            </Link>
            <Link href={""} sx={{ textDecoration: "none", color: "inherit" }}>
              <Button>Skills</Button>
            </Link>
            <Link href={""} sx={{ textDecoration: "none", color: "inherit" }}>
              <Button>Projects</Button>
            </Link>
            <Link href={""} sx={{ textDecoration: "none", color: "inherit" }}>
              <Button>Contact</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
