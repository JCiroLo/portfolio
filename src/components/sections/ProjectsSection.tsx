import { Container, Link, Stack, Typography } from "@mui/material";
import { Image, Section, Slide } from "..";
import contents from "../../contents";

const ProjectsSection = () => {
  return (
    <Section dataSection="projects">
      <Slide>
        <Stack alignItems="center">
          <Typography position="relative" variant="h2" fontWeight={700}>
            {contents.projects.title}
          </Typography>
          <Typography>{contents.projects.description}</Typography>
        </Stack>
      </Slide>
      {contents.projects.contents.map(({ category, description, name, website, repository, technologies }, index) => (
        <Slide key={index}>
          <Container maxWidth="xl">
            <Stack width={{ xs: "100%", md: "40%" }}>
              <Typography>{category}</Typography>
              <Typography position="relative" variant="h2" fontWeight={700}>
                {name}
              </Typography>
              <Typography>{description}</Typography>

              <Stack direction="row" spacing={2} alignItems="center" my={4}>
                <Typography>Built with:</Typography>
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
            </Stack>
          </Container>
        </Slide>
      ))}
    </Section>
  );
};

export default ProjectsSection;
