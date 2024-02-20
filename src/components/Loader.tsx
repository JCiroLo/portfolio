import { Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";

type LoaderProps = {
  autoHide?: boolean;
};

const Loader: FC<LoaderProps> = ({ autoHide = false }) => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName(autoHide ? "hide" : "");
  }, [autoHide]);

  return (
    <Stack
      className={className}
      position="fixed"
      zIndex="modal"
      alignItems="center"
      justifyContent="center"
      sx={{
        inset: 0,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "calc(max(100vw, 100vh) + 400px)",
        aspectRatio: 1,
        borderRadius: "50%",
        overflow: "hidden",
        bgcolor: (t) => t.palette.background.default,
        transition: (t) => t.transitions.create(["opacity", "visibility", "width"], { delay: 2000 }),
        "&.hide": {
          width: 0,
        },
      }}
    >
      <Typography
        fontSize="2rem"
        fontWeight={700}
        textAlign="center"
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
