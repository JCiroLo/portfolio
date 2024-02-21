import { Box } from "@mui/material";

const Scroller = () => {
  return (
    <Box
      component="div"
      width={32}
      height={56}
      border={1}
      borderRadius={4}
      sx={{
        position: "fixed",
        zIndex: 1,
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Box
        component="span"
        width={4}
        height={12}
        borderRadius={1}
        bgcolor="white"
        sx={{
          position: "absolute",
          top: 8,
          left: "50%",
          transform: "translateX(-50%)",
          animation: "drop 2s ease-out infinite 1s",
          "@keyframes drop": {
            "0%": {
              top: 8,
              opacity: 1,
            },
            "75%": {
              opacity: 0,
            },
            "100%": {
              top: 40,
              opacity: 0,
            },
          },
        }}
      />
    </Box>
  );
};

export default Scroller;
