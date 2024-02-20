import { Link, Stack, Typography } from "@mui/material";
import { Section, Slide } from "..";
import contents from "../../contents";

const Contact = () => {
  return (
    <Section dataSection="contact">
      <Slide>
        <Stack alignItems="center" overflow="hidden">
          <Typography position="relative" variant="h2" fontWeight={700}>
            {contents.contact.title}
          </Typography>
          <Typography>{contents.contact.description}</Typography>
          <br />
          <Stack direction="row" spacing={2}>
            {contents.social.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                color="inherit"
                target="_blank"
                sx={{ transition: (t) => t.transitions.create(["transform"]), "&:hover": { transform: "scale(1.2)" } }}
              >
                {<social.icon sx={{ fontSize: 48 }} />}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Slide>
    </Section>
  );
};

export default Contact;
