import { Composition } from "remotion";
import { NOM035Video, TOTAL_DURATION } from "./NOM035Video";
import { VIDEO } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="NOM035Video"
        component={NOM035Video}
        durationInFrames={TOTAL_DURATION}
        fps={VIDEO.fps}
        width={VIDEO.width}
        height={VIDEO.height}
      />
    </>
  );
};
