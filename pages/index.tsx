import type { NextPage } from "next";
import PomCountdown from "../components/PomCountdown";

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:pb-8 gap-x-6">
        <div className="w-full rounded-lg border border-solid border-soft-white">
          Youtube playlist
        </div>
        <div className="w-full rounded-lg border border-solid border-soft-white">
          <PomCountdown />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-x-6">

        <div className="w-full rounded-lg border border-solid border-soft-white">
          Spotify player
        </div>
        <div className="w-full rounded-lg border border-solid border-soft-white">
          Task list
        </div>
      </div>
    </div>
  );
};

export default Home;
