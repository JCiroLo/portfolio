import { Section, Slide, SquareRoundedCheckIcon } from "..";
import { Container, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import contents from "../../contents";

const ExperienceSection = () => {
  return (
    <Section dataSection="experience">
      <Slide alignItems="center">
        <Typography position="relative" variant="h2" fontWeight={700} textAlign="center">
          {contents.skills.title}
        </Typography>
        <Typography textAlign="center" sx={{ textWrap: "balance" }}>
          {contents.skills.description}
        </Typography>
      </Slide>
      {contents.skills.contents.map(({ company, role, responsabilities }, index) => (
        <Slide key={index}>
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
