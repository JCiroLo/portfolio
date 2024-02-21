import { Typography } from "@mui/material";
import { Scroller, Section } from "..";
import contents from "../../contents";

const MeSection = () => {
  return (
    <Section dataSection="me" alignItems="center">
      <Typography variant="h1" fontWeight={700} lineHeight={1}>
        {contents.me.title}
      </Typography>
      <Typography fontWeight={300} textAlign="center">
        {contents.me.subtitle}
      </Typography>
      <Scroller />
    </Section>
  );
};

export default MeSection;
