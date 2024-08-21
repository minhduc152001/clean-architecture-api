// src/interface/routes/bookRoutes.ts
import { Router } from "express";
import { BookController } from "../controllers/BookController";
import { authenticateToken } from "../middlewares/auth";

const router = Router();

router.get("/books", authenticateToken, (req, res) =>
  new BookController().getAll(req, res)
);

export { router as bookRoutes };
