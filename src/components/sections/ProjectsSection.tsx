import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Image, Section, Slide } from "..";
import contents from "../../contents";

const ProjectsSection = () => {
  return (
    <Section dataSection="projects">
      <Slide>
        <Container maxWidth="md">
          <Stack alignItems="center">
            <Typography position="relative" variant="h2" fontWeight={700}>
              {contents.projects.title}
            </Typography>
            <Typography>{contents.projects.description}</Typography>
          </Stack>
        </Container>
      </Slide>
      {contents.projects.contents.map(({ category, description, name, website, repository, technologies }, index) => (
        <Slide key={index}>
          <Container maxWidth="xl">
            <Stack width={{ xs: "100%", md: "40%" }} spacing={2}>
              <Stack>
                <Typography>{category}</Typography>
                <Typography position="relative" variant="h2" fontWeight={700}>
                  {name}
                </Typography>
                <Typography>{description}</Typography>
              </Stack>
              <Typography>Built with:</Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
                {technologies.map((technology, index) => (
                  <Stack key={index} spacing={1} alignItems="center">
                    <Image blur src={technology.svg} alt={technology.name} />
                    <Typography variant="caption" textAlign="center">
                      {technology.name}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <Stack>
                {website && (
                  <Link href={website} target="_blank">
                    Explore the site
                  </Link>
                )}
                {repository && (
                  <Link href={repository} target="_blank">
                    Check the repository
                  </Link>
                )}
              </Stack>
              {/* <Typography>Preview:</Typography>
              {device === "Mobile" && (
                <Image
                  src={preview}
                  alt={name}
                  width={isMobile ? "50%" : "100%"}
                  borderRadius={1}
                  aspect={isMobile ? 720 / 1513 : 1655 / 1207}
                />
              )} */}
            </Stack>
          </Container>
        </Slide>
      ))}
    </Section>
  );
};

export default ProjectsSection;
