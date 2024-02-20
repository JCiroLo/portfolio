import { Stack, StackProps } from "@mui/material";
import React, { FC } from "react";
import { Sections } from "../utilities/types";

type SectionProps = {
  children: React.ReactNode;
  dataSection: Sections;
  sx?: StackProps["sx"];
};

const Section: FC<SectionProps> = ({ children, dataSection, sx = {} }) => {
  return (
    <Stack
      className="section"
      component="section"
      height="100vh"
      width="100%"
      data-section={dataSection}
      sx={{
        "& .fp-watermark": {
          display: "none",
        },
        ...sx,
      }}
    >
      <Stack>{children}</Stack>
    </Stack>
  );
};

export default Section;
