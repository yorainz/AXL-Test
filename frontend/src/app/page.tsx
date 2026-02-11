import { PlayerCard } from "../components/PlayerCard";
import { StandingsTable } from "../components/StandingsTable";

const standings = [
  { team: "Falcons", played: 8, wins: 6, draws: 1, losses: 1, gf: 20, ga: 9, gd: 11, points: 19 },
  { team: "Titans", played: 8, wins: 5, draws: 2, losses: 1, gf: 17, ga: 10, gd: 7, points: 17 },
];

const topPlayer = {
  id: 1,
  name: "Alex Morgan",
  team: "Falcons",
  position: "Forward",
  goals: 9,
  assists: 3,
  fantasyPoints: 68,
};

export default function HomePage() {
  return (
    <main>
      <h1>Intramural League Hub</h1>
      <nav>
        <a href="#home">Home</a> | <a href="#standings">Standings</a> | <a href="#matches">Matches</a> |{" "}
        <a href="#teams">Teams</a> | <a href="#players">Players</a> | <a href="#fantasy">Fantasy</a>
      </nav>

      <section id="standings">
        <h2>Current Standings</h2>
        <StandingsTable rows={standings} />
      </section>

      <section id="fantasy">
        <h2>Top Fantasy Player</h2>
        <PlayerCard player={topPlayer} />
      </section>
    </main>
  );
}
