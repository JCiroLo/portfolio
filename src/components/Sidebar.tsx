import { FC } from "react";
import { Box, Link, List, ListItem, ListItemButton, ListItemText, Stack, Tooltip } from "@mui/material";
import { useSnapshot } from "valtio";
import state from "../store";
import { Image } from ".";
import contents from "../contents";
import { Sections } from "../utilities/types";

type SidebarProps = {
  onChange: (section: Sections) => void;
};

const Sidebar: FC<SidebarProps> = ({ onChange }) => {
  const { section: active } = useSnapshot(state);

  return (
    <Stack
      component="aside"
      position="fixed"
      zIndex={1}
      top={0}
      bottom={0}
      left={0}
      spacing={2}
      justifyContent="space-between"
      padding={2}
      sx={{ pointerEvents: "none" }}
    >
      <Stack
        className={active === "me" ? "active" : ""}
        alignSelf="flex-start"
        alignItems="center"
        spacing={2}
        borderRadius={4}
        sx={{
          pointerEvents: "all",
          "&:hover, &.active": {
            "& .aside-links": {
              height: 160,
            },
          },
        }}
      >
        <Image
          src={contents.sidebar.profile.img}
          alt="Profile image"
          width={6}
          height={6}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
        <Stack className="aside-links" sx={{ height: 0, overflow: "hidden", transition: (t) => t.transitions.create(["height"]) }}>
          {contents.social.map((social, index) => (
            <Tooltip arrow key={index} title={social.name} placement="right">
              <Link
                key={index}
                href={social.url}
                color="inherit"
                target="_blank"
                padding={1}
                sx={{
                  display: "flex",
                  lineHeight: 1,
                  "&:hover svg": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                {<social.icon sx={{ transition: (t) => t.transitions.create(["transform"]) }} />}
              </Link>
            </Tooltip>
          ))}
        </Stack>
      </Stack>
      <List sx={{ pointerEvents: "all" }}>
        {contents.sidebar.sections.map((section) => {
          const isActive = section.key === active;

          return (
            <ListItem disablePadding key={section.key}>
              <ListItemButton
                disableGutters
                sx={{
                  gap: 1,
                  paddingY: 0,
                  paddingX: 1,
                  borderRadius: 1,
                  opacity: isActive ? 1 : 0.25,
                  transition: (t) => t.transitions.create(["opacity"]),
                }}
                onClick={() => onChange(section.key)}
              >
                <Box
                  component="div"
                  height={2}
                  bgcolor="text.primary"
                  borderRadius={2}
                  sx={{ width: isActive ? 16 : 0, transition: (t) => t.transitions.create(["width"]) }}
                />
                <ListItemText primary={section.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

export default Sidebar;
