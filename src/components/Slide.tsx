import { Stack } from "@mui/material";
import React, { FC } from "react";

type SlideProps = {
  children: React.ReactNode;
};

const Slide: FC<SlideProps> = ({ children }) => {
  return (
    <Stack
      className="slide"
      height="100vh"
      width="100%"
      sx={{
        "& .fp-watermark": {
          display: "none",
        },
      }}
    >
      {children}
    </Stack>
  );
};

export default Slide;
