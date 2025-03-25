import OnlineLibrary from "./projects/OnlineLibrary";
import Assembly from "./projects/Assembly";
import MuseumOfCandy from "./projects/MuseumOfCandy";
import RockPaperScissors from "./projects/RockPaperScissors";
import Tenzies from "./projects/Tenzies";
import UberClone from "./projects/UberClone";

export default function Projects() {
  return (
    <main className="mainProjects">
      <OnlineLibrary />
      <Assembly />
      <Tenzies />
      <MuseumOfCandy />
      <RockPaperScissors />
      <UberClone />
    </main>
  );
}
