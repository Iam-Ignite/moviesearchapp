import React, { useState } from "react";

export default function Homelist() {
  const [movies] = useState([
    {
      Title: "How I Met Your Mother",
      Year: "2005–2014",
      imdbID: "tt0460649",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_SX300.jpg",
    } ,{
        "Title": "Venom",
        "Year": "2018",
        "imdbID": "tt1270797",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg"
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
      Title: "The Good Doctor",
      Year: "2017–",
      imdbID: "tt6470478",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzZjMWEwMGMtODdhMi00NGRkLTkwZTEtNmM4NjA3M2FlNzc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      Title: "Siren",
      Year: "2018–2020",
      imdbID: "tt5615700",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjFmYjFmMDgtNjk1Zi00NTc2LWIwOGEtZWIxYTdmMWVmYWVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Flash",
      Year: "2014–",
      imdbID: "tt3107288",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      Title: "Sex Education",
      Year: "2019–",
      imdbID: "tt7767422",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg",
    },
    {
      Title: "American Dad!",
      Year: "2005–",
      imdbID: "tt0397306",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDRkOWIyOTUtMjg5YS00OTJjLTgwNGYtMjgxMTA0NWQ2NGI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Arrow",
      Year: "2012–2020",
      imdbID: "tt2193021",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTI0NTMwMDgtYTMzZC00YmJhLTg4NzMtMTc1NjI4MWY4NmQ4XkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_SX300.jpg",
    },
    {
      Title: "Two and a Half Men",
      Year: "2003–2015",
      imdbID: "tt0369179",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2MjIzN2ItZDg0OS00MTlhLWIzMTMtYWI4ZTA0NGE4NDJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
      Title: "Family Guy",
      Year: "1999–2022",
      imdbID: "tt0182576",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_SX300.jpg",
    },

  ]);

  return (
    <div>
     <div className="container">
        {movies.map((movie) => (
          <div className="mp" key={movie.id}>
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
