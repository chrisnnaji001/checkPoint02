import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={posterURL} onChange={(e) => setPosterURL(e.target.value)} placeholder="Poster URL" />
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;