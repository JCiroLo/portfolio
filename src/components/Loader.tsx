import { Stack, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Stack
      position="fixed"
      alignItems="center"
      justifyContent="center"
      sx={{
        inset: 0,
        animation: "pulse 2s ease infinite",
        "@keyframes pulse": { "0%": { opacity: 0.25 }, "100%": { opacity: 1 } },
      }}
    >
      <Typography fontSize="2rem" fontWeight={700} textAlign="center">
        LOADING
      </Typography>
    </Stack>
  );
};

export default Loader;
