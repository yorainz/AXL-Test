import express from "express";
import leagueRoutes from "./routes/league";
import importRoutes from "./routes/imports";

const app = express();
app.use(express.json());

app.use("/api", leagueRoutes);
app.use("/api", importRoutes);

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on :${port}`);
});
