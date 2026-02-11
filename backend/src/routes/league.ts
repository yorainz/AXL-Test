import { Router } from "express";

const router = Router();

router.get("/leagues/:leagueId/standings", async (req, res) => {
  const { leagueId } = req.params;
  // TODO: Query standings sorted by points, gd, gf.
  res.json({ leagueId, standings: [] });
});

router.get("/leagues/:leagueId/teams", async (req, res) => {
  const { leagueId } = req.params;
  // TODO: Query teams for the league.
  res.json({ leagueId, teams: [] });
});

router.get("/leagues/:leagueId/matches", async (req, res) => {
  const { leagueId } = req.params;
  const { matchday, date, status } = req.query;
  // TODO: Filter matches by provided parameters.
  res.json({ leagueId, filters: { matchday, date, status }, matches: [] });
});

router.get("/players/:playerId", async (req, res) => {
  const { playerId } = req.params;
  // TODO: Return player profile, season totals, and fantasy totals.
  res.json({ playerId, profile: null, seasonStats: null, fantasy: null });
});

export default router;
