import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Image, Section } from "..";
import contents from "../../contents";

const AboutSection = () => {
  return (
    <Section dataSection="about">
      <Container maxWidth="md">
        <Image
          blur
          src={contents.about.img}
          alt="Profile image"
          width={16}
          height={16}
          borderRadius="50%"
          slotProps={{ container: { mt: 2 } }}
          style={{ objectFit: "cover" }}
        />
        <Typography position="relative" variant="h2" fontSize="2.75vmax" fontWeight={700}>
          {contents.about.title}
        </Typography>
        <Typography mb={12}>{contents.about.description}</Typography>
      </Container>
    </Section>
  );
};

export default AboutSection;
