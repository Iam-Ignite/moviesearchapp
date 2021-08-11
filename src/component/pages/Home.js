import React, { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState("Unlimited movies, TV shows, and more.");

  const handleText = () =>{
      setText("this is what we found on  ", query);
  }
  const getMovies = async (e) => {
    e.preventDefault();

    const url = `https://www.omdbapi.com/?s=${query}&apikey=f208557a`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.Search);

    } catch (err) {
      console.error(err);
    }
  };
   
  return (
    <div className="home">
      <div className="input-box">
        <form onSubmit={getMovies}>
          <input
            type="text"
            name="query"
            placeholder="   Search you movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleText} className="btn" type="submit">
          <i className="fas fa-search"></i>
          </button>
        </form>
        <h3>{text} </h3>
      </div>
     <div className="container">
     {movies?.map((movie) => (
          <div key={movie.id} 
           className="mp">
            <img src={movie.Poster} alt="movie" />
            <span>
              {movie.Title} <br /> HD
            </span>
          </div>
        ))}
     </div>
    </div>
  );
}
