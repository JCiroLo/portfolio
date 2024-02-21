import { Stack, Typography } from "@mui/material";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <Stack
      position="fixed"
      zIndex="modal"
      alignItems="center"
      justifyContent="center"
      bgcolor={(t) => t.palette.background.default}
      sx={{
        inset: 0,
      }}
    >
      <Typography
        fontSize="2rem"
        fontWeight={700}
        textAlign="center"
        overflow="hidden"
        sx={{
          animation: "pulse 1s ease infinite",
          "@keyframes pulse": { "0%": { opacity: 0.25 }, "50%": { opacity: 1 }, "100%": { opacity: 0.25 } },
        }}
      >
        LOADING RESOURCES
      </Typography>
    </Stack>
  );
};

export default Loader;
