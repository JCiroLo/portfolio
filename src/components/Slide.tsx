import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import { type StackProps } from "@mui/material/Stack";

type SlideProps = StackProps & {
  children: React.ReactNode;
};

const Slide: FC<SlideProps> = ({ children, ...props }) => {
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
      {...props}
    >
      {children}
    </Stack>
  );
};

export default Slide;
