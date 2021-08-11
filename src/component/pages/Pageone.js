import React, { useState } from "react";

export default function Pageone() {
  const [movies] = useState([
    {
      'Title': "Avengers: Endgame",
      'Year': "2019",
      'imdbID': "tt4154796",
      'Type': "movie",
      'Poster':
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
    {
      'Title': "Avengers: Infinity War",
      'Year': "2018",
      'imdbID': "tt4154756",
      'Type': "movie",
      'Poster':
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      'Title': "Loki",
      'Year': "2021–",
      'imdbID': "tt9140554",
      'Type': "series",
      'Poster':
        "https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SX300.jpg",
    },
    {
      'Title': "Black Panther",
      'Year': "2018",
      'imdbID': "tt1825683",
      'Type': "movie",
      'Poster':
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
    },
    {
      'Title': "Black Widow",
      'Year': "2021",
      'imdbID': "tt3480822",
      'Type': "movie",
      'Poster':
        "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      'Title': "Batman v Superman: Dawn of Justice",
      'Year': "2016",
      'imdbID': "tt2975590",
      'Type': "movie",
      'Poster':
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      'Title': "Fast & Furious 7",
      'Year': "2015",
      'imdbID': "tt2820852",
      'Type': "movie",
      'Poster':
        "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg",
    },
    {
      'Title': "How to Sell Drugs Online (Fast)",
      'Year': "2019–",
      'imdbID': "tt9184994",
      'Type': "series",
      'Poster':
        "https://m.media-amazon.com/images/M/MV5BZjIzNTkyNjktNDdmMy00MmI4LWFlN2MtNDllYTVhZjljNWFiXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg",
    },
    {
      'Title': "Fast & Furious Presents: Hobbs & Shaw",
      'Year': "2019",
      'imdbID': "tt6806448",
      'Type': "movie",
      'Poster':
        "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },
    {
        "Title": "Fast & Furious 7",
        "Year": "2015",
        "imdbID": "tt2820852",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg"
    },
    {
        "Title": "The Fast and the Furious",
        "Year": "2001",
        "imdbID": "tt0232500",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
        "Title": "Fast Five",
        "Year": "2011",
        "imdbID": "tt1596343",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
    },
    {
        "Title": "Fast & Furious",
        "Year": "2009",
        "imdbID": "tt1013752",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "2 Fast 2 Furious",
        "Year": "2003",
        "imdbID": "tt0322259",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "Title": "The Fast and the Furious: Tokyo Drift",
        "Year": "2006",
        "imdbID": "tt0463985",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Fast & Furious Presents: Hobbs & Shaw",
        "Year": "2019",
        "imdbID": "tt6806448",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Fast Times at Ridgemont High",
        "Year": "1982",
        "imdbID": "tt0083929",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzBlZjE1MDctYjZmZC00ZTJmLWFkOWEtYjdmZDZkODBkZmI2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "How to Sell Drugs Online (Fast)",
        "Year": "2019–",
        "imdbID": "tt9184994",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjIzNTkyNjktNDdmMy00MmI4LWFlN2MtNDllYTVhZjljNWFiXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg"
    },
    {
        "Title": "Fast Food Nation",
        "Year": "2006",
        "imdbID": "tt0460792",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzM0ODQ5OGItZDZhMy00NDk0LWJmNTgtZGRiMTBjMDI1YTAwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },     {
        "Title": "Death Note: Desu nôto",
        "Year": "2006–2007",
        "imdbID": "tt0877057",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_SX300.jpg"
    },
    {
        "Title": "Death Note",
        "Year": "2017",
        "imdbID": "tt1241317",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTUwOTgzMTEyOF5BMl5BanBnXkFtZTgwNTk3MTM5MjI@._V1_SX300.jpg"
    },
    {
        "Title": "Death Note: Desu nôto",
        "Year": "2006",
        "imdbID": "tt0758742",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDNlNjEzMzQtZDM0MS00YzhiLTk0MGUtYTdmNDZiZGVjNTk0L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Death Note - Desu nôto: The Last Name",
        "Year": "2006",
        "imdbID": "tt0810827",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDM4MTExNzEtNjczYy00NzllLTg5NWItYTBjYjA5YTNhYTliXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_SX300.jpg"
    },
    {
        "Title": "Death Note - Desu nôto: Light Up the New World",
        "Year": "2016",
        "imdbID": "tt5058340",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjA5YmJkY2MtZTk3OS00N2MxLWJmODAtYjgxZjEwOTNmNDJkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg"
    },
    {
        "Title": "Death Note: Desu nôto",
        "Year": "2015",
        "imdbID": "tt4623604",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjgwMjVkNzUtMWZjNS00M2U4LTkzM2QtMzEwYmNlY2JmZDk5XkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_SX300.jpg"
    },
    {
        "Title": "Death Note Relight - Visions of a God",
        "Year": "2007",
        "imdbID": "tt3355694",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWFjY2QwZjYtOWQ0Ni00NDBjLTk5YTMtY2ZkY2ZjMWI2MGYxXkEyXkFqcGdeQXVyOTExODQ3OQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Death Note Relight 2 - L's Successors",
        "Year": "2008",
        "imdbID": "tt3355698",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjdhMThmZjMtNjhkZS00MzFjLWExZTktZjdkNmM0ZmVlMjRkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg"
    },
    {
        "Title": "Death Note - Desu nôto: New Generation",
        "Year": "2016",
        "imdbID": "tt6332396",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWMxMTA1Y2MtNzNjYS00YjhiLThlZGQtZWIwZDhlMjFiM2Q3L2ltYWdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg"
    }
  ]);

  return (
    <div>
      <h2>Latest</h2>
      <div className="container">
        {movies.map((movie) => (
          <div className="mp">
            <img src={movie.Poster} alt="movie" key={movie.id} />
            <span>
              {movie.Title} <br /> HD
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
