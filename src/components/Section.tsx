import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import { type StackProps } from "@mui/material/Stack";
import { Sections } from "../utilities/types";

type SectionProps = StackProps & {
  children: React.ReactNode;
  dataSection: Sections;
  sx?: StackProps["sx"];
};

const Section: FC<SectionProps> = ({ children, dataSection, sx = {}, ...props }) => {
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
      {...props}
    >
      <Stack>{children}</Stack>
    </Stack>
  );
};

export default Section;
