import { type Sections } from "./types";

export const PUBLIC_PATH = "";

export const SECTIONS: Record<number, Sections> = {
  0: "me",
  1: "about",
  2: "experience",
  3: "projects",
  4: "contact",
};

export const SECTIONS_INDEX: Record<Sections, number> = {
  me: 0,
  about: 1,
  experience: 1,
  projects: 2,
  contact: 3,
};
