export type PlayerCardModel = {
  id: number;
  name: string;
  team: string;
  position: string;
  goals: number;
  assists: number;
  fantasyPoints: number;
};

export function PlayerCard({ player }: { player: PlayerCardModel }) {
  return (
    <article>
      <h3>{player.name}</h3>
      <p>
        {player.team} • {player.position}
      </p>
      <p>
        G: {player.goals} | A: {player.assists}
      </p>
      <strong>{player.fantasyPoints} fantasy pts</strong>
    </article>
  );
}
