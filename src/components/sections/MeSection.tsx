import Typography from "@mui/material/Typography";
import { Scroller, Section } from "..";
import contents from "../../contents";

const { me } = contents;

const MeSection = () => {
  return (
    <Section dataSection="me" alignItems="center" sx={{ opacity: 0, animation: "fade 1s ease forwards 1s" }}>
      <Typography variant="h1" fontSize="6vmax" fontWeight={700} lineHeight={1} textAlign="center">
        {me.title}
      </Typography>
      <Typography fontWeight={300} textAlign="center">
        {me.subtitle}
      </Typography>
      <Scroller />
    </Section>
  );
};

export default MeSection;
