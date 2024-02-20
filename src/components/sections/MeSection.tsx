import { Stack, Typography } from "@mui/material";
import { Section } from "..";
import contents from "../../contents";

const MeSection = () => {
  return (
    <Section dataSection="me">
      <Stack alignItems="center">
        <Typography variant="h1" fontWeight={700}>
          {contents.me.title}
        </Typography>
        <Typography fontWeight={300}>{contents.me.subtitle}</Typography>
      </Stack>
    </Section>
  );
};

export default MeSection;
