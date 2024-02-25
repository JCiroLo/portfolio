import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Section, Slide, SquareRoundedCheckIcon } from "..";
import contents from "../../contents";

const ExperienceSection = () => {
  return (
    <Section dataSection="experience">
      <Slide alignItems="center">
        <Container maxWidth="md">
          <Typography position="relative" variant="h2" fontWeight={700} textAlign="center">
            {contents.skills.title}
          </Typography>
          <Typography textAlign="center" sx={{ textWrap: "balance" }}>
            {contents.skills.description}
          </Typography>
        </Container>
      </Slide>
      {contents.skills.contents.map(({ company, role, responsabilities }, index) => (
        <Slide key={index}>
          <Container maxWidth="md">
            <Typography>{role} at</Typography>
            <Typography position="relative" variant="h2" fontSize="2.75vmax" fontWeight={700}>
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
