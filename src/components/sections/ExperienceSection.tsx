import { Section, Slide, SquareRoundedCheckIcon } from "..";
import { Container, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import contents from "../../contents";

const ExperienceSection = () => {
  return (
    <Section dataSection="experience">
      <Slide>
        <Stack alignItems="center">
          <Typography position="relative" variant="h2" fontWeight={700}>
            {contents.skills.title}
          </Typography>
          <Typography>{contents.skills.description}</Typography>
        </Stack>
      </Slide>
      {contents.skills.contents.map(({ company, role, responsabilities }) => (
        <Slide>
          <Container maxWidth="md">
            <Typography>{role} at</Typography>
            <Typography position="relative" variant="h2" fontWeight={700}>
              {company}
            </Typography>
            <br />
            <Typography>Some of my responsabilities:</Typography>
            <List>
              {responsabilities.map((responsability, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemIcon>
                    <SquareRoundedCheckIcon />
                  </ListItemIcon>
                  <ListItemText primary={responsability}></ListItemText>
                </ListItem>
              ))}
            </List>
          </Container>
        </Slide>
      ))}
    </Section>
  );
};

export default ExperienceSection;
