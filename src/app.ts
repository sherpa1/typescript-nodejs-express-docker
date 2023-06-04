import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello, World!" });
});

app.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: `id = ${req.params.id}` });
});

export default app;
