import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const CategarySelection = () => {
    const [genres, setGenres] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        axios.get("https://www.omdbapi.com/?t=Inception&apikey=7de99d4e")
            .then(res => setGenres(res.data.genres));
    }, []);

    const handleSelect = (id) => {
        setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const handleSubmit = async () => {
        await axios.post("", { favoriteGenres: selected }, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        alert("Genres saved!");
    };
    useEffect(() => {
        console.log("the genres are", genres);
    },[])
    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-xl mb-4">Select Favorite Genres</h2>
            <div className="grid grid-cols-2 gap-2">
                {genres.map(genre => (
                    <button key={genre.id}
                        onClick={() => handleSelect(genre.id)}
                        className={`p-2 border rounded ${selected.includes(genre.id) ? 'bg-green-500 text-white' : ''}`}>
                        {genre.name}
                    </button>
                ))}
            </div>
            <button onClick={handleSubmit} className="mt-4 bg-blue-600 text-white px-4 py-2">Save Preferences</button>
        </div>
    )
}

export default CategarySelection;
