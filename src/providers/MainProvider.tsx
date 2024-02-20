import { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { generateTheme } from "../theme";
import { CssBaseline } from "@mui/material";

type MainProviderProps = {
  children: React.ReactNode;
};

const MainProvider: FC<MainProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={generateTheme("dark")}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MainProvider;
