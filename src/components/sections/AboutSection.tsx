import { Image, Section } from "..";
import { Container, Typography } from "@mui/material";
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
          slotProps={{ container: { mt: 2 } }}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
        <Typography position="relative" variant="h2" fontWeight={700}>
          {contents.about.title}
        </Typography>
        <Typography>{contents.about.description}</Typography>
      </Container>
    </Section>
  );
};

export default AboutSection;
