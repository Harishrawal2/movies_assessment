import express from "express";
import {
  CreateMovie,
  SearchMovies,
  deleteMovies,
  getAllusers,
  updateMovies,
} from "../controllers/movie.controller.js";
const router = express.Router();

// Get All Movies
router.get("/movies", getAllusers);

// Create Movies
router.post("/movies", CreateMovie);

// Movies Update
router.put("/movies/:id", updateMovies);

// Get All Movies
router.delete("/movies/:id", deleteMovies);

// Get Search Movies
router.get("/search", SearchMovies);

export default router;
