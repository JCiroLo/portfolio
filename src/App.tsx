import { Suspense, useRef } from "react";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  Fullpage,
  Loader,
  MeSection,
  ProjectsSection,
  Scenario,
  Sidebar,
} from "./components";
import state, { type State } from "./store";
import { SECTIONS } from "./utilities/constants";
import { fullpageApi, type Item } from "@fullpage/react-fullpage";
import { Sections } from "./utilities/types";

function App() {
  const apiRef = useRef<fullpageApi>();

  const handleLoadFullpage = ({ api }: { api: fullpageApi }) => {
    apiRef.current = api;
  };

  const handleSectionChange = ({ to }: { to: Item }) => {
    state.section = SECTIONS[to.index];
  };

  const handleSlideChange = ({ to, section }: { section: Item; to: Item }) => {
    const currentSection = section.item.getAttribute("data-section") as keyof State["slide"];

    state.slide[currentSection] = to.index;
  };

  const handleSidebarSectionChange = (section: Sections) => {
    apiRef.current?.moveTo(Object.values(SECTIONS).indexOf(section) + 1, 0);
  };

  return (
    <>
      <Loader autoHide />
      <Suspense>
        <Scenario />
        <Sidebar onChange={handleSidebarSectionChange} />
        <Fullpage onChange={handleSectionChange} onSlide={handleSlideChange} onLoad={handleLoadFullpage}>
          {() => (
            <>
              <MeSection />
              <AboutSection />
              <ExperienceSection />
              <ProjectsSection />
              <ContactSection />
            </>
          )}
        </Fullpage>
      </Suspense>
    </>
  );
}

export default App;
