import Movie from "../models/movie.model.js";

// Create Movies
export const CreateMovie = async (req, res) => {
  const { title, genre, rating, streamingLink } = req.body;
  try {
    const newMovie = await Movie.create({
      title,
      genre,
      rating,
      streamingLink,
    });
    await newMovie.save();
    res.status(201).json({ message: "Movie Created Successfully", newMovie });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error in Movie Create" });
  }
};

// Get All Movies
export const getAllusers = async (req, res) => {
  try {
    const movies = await Movie.find().select("-__v");
    res.status(200).json({ message: movies });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error while Getting Users" });
  }
};

// Update Movies
export const updateMovies = async (req, res) => {
  const { id } = req.params;
  const { title, genre, rating, streamingLink } = req.body;
  try {
    const updateMovie = await Movie.findByIdAndUpdate(
      id,
      {
        title,
        genre,
        rating,
        streamingLink,
      },
      { new: true }
    );

    if (!updateMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res
      .status(200)
      .json({ message: "Movies Updated Successfull", updateMovie });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal Server Error while update Movies" });
  }
};

// Get All Movies
export const deleteMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error while Movies" });
  }
};

// Search Movies
export const SearchMovies = async (req, res) => {
  const { q } = req.query;
  try {
    const regex = new RegExp(q, "i");
    const movies = await Movie.find({
      $or: [
        {
          title: regex,
        },
        { genre: regex },
      ],
    });

    res.status(200).json({ message: movies });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal Server Error while Searching Movies" });
  }
};
