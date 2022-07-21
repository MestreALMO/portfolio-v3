import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Intro } from "../components/intro";
import { Navbar } from "../components/navbar";
import { ToggleColorMode } from "../components/toggleColorMode";
import CtxDarkModeProvider from "../context/darkMode";
import { projectMaxWidth } from "../utils/projectMaxWidth";

const Home: NextPage = () => {
  return (
    <>
      <CtxDarkModeProvider>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <ToggleColorMode>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ maxWidth: projectMaxWidth, width: "100%" }}>
                <Navbar />
                <Intro />
              </Box>
            </Box>
          </ToggleColorMode>
        </main>

        <footer></footer>
      </CtxDarkModeProvider>
    </>
  );
};

export default Home;
