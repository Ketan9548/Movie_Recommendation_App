import axios from 'axios';
import movie from '../models/movie.model.js';
import { Op } from 'sequelize';


// Add a new movie
const addMovie = async (req, res) => {
    const { title, tmdbId, genres, releaseDate } = req.body;
    try {
        const movie = await movie.create({
            title,
            tmdbId,
            genres,
            releaseDate
        })
        res.status(201).json({ message: 'Movie added successfully', movie, success: true });
    } catch (error) {
        res.status(500).json({ message: 'Error adding movie', error: error.message, success: false });
    }
}

// TMDB fetch movie details
const fetchMovieDetails = async (req, res) => {
    
}


