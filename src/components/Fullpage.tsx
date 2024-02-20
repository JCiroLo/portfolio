import { FC, useEffect, useRef } from "react";
import ReactFullpage, { Item, fullpageApi } from "@fullpage/react-fullpage";
import state from "../store";
import { useSnapshot } from "valtio";

type FullpageProps = {
  children: ({ state, api }: { state: unknown; api: fullpageApi }) => JSX.Element;
  onChange: ({ from, to }: { from: Item; to: Item }) => void;
  onSlide: ({ from, to }: { section: Item; from: Item; to: Item }) => void;
  onLoad: ({ api }: { api: fullpageApi }) => void;
};

const Fullpage: FC<FullpageProps> = ({ children, onChange, onSlide, onLoad }) => {
  const api = useRef<ReactFullpage & { fullpageApi: fullpageApi }>(null!);
  const { transition } = useSnapshot(state);

  useEffect(() => {
    onLoad({ api: api.current.fullpageApi });
  }, [onLoad]);

  return (
    <ReactFullpage
      controlArrows
      slidesNavigation
      ref={api}
      licenseKey="gplv3-license"
      scrollingSpeed={transition.duration}
      credits={{ enabled: false }}
      render={({ state, fullpageApi: api }) => <ReactFullpage.Wrapper>{children({ state, api })}</ReactFullpage.Wrapper>}
      beforeLeave={(from, to) => onChange({ from, to })}
      onSlideLeave={(section, from, to) => onSlide({ section, from, to })}
    />
  );
};

export default Fullpage;
