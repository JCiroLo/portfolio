import { proxy } from "valtio";
import { Sections } from "../utilities/types";

export type State = {
  section: Sections;
  slide: {
    experience: number;
    projects: number;
  };
  transition: {
    duration: number;
  };
};

const state = proxy<State>({
  section: "me",
  slide: {
    experience: 0,
    projects: 0,
  },
  transition: {
    duration: 750,
  },
});

export default state;
