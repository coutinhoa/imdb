import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";

const cors = require("cors");
const prisma = new PrismaClient();
const app: Express = express();
app.use(cors());

app.use(express.json());

app.get("/api/movies", async (req: Request, res: Response) => {
  const movies = await prisma.movie.findMany();
  res.json(movies);
});

app.get("/api/movies/:id", async (req: Request, res: Response) => {
  const { id }: { id?: string } = req.params;

  const movie = await prisma.movie.findUnique({
    where: { id: Number(id) },
  });
  res.json(movie);
});

const server = app.listen(4100, () =>
  console.log(`
🚀 Server ready at: http://localhost:4100
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
