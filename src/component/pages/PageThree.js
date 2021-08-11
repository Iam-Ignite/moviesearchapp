import React, {useState} from 'react'

export default function PageThree() {
    const [movies] = useState([
        {
            "Title": "Aquaman",
            "Year": "2018",
            "imdbID": "tt1477834",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg"
        },
        {
            "Title": "LEGO DC Comics Heroes",
            "Year": "2018",
            "imdbID": "tt8457394",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzQyMjQ5YTUtNWY3Ni00NjZkLWExMmUtYTliYWRlNDIyZmJkXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg"
        },
        {
            "Title": "Zack Snyder's Justice League",
            "Year": "2021",
            "imdbID": "tt12361974",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
        }, {
            "Title": "Avengers: Endgame",
            "Year": "2019",
            "imdbID": "tt4154796",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        }, {
            "Title": "Loki",
            "Year": "2021–",
            "imdbID": "tt9140554",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SX300.jpg"
        },
       {
            "Title": "Black Panther",
            "Year": "2018",
            "imdbID": "tt1825683",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg"
        },  {
            "Title": "Black Widow",
            "Year": "2021",
            "imdbID": "tt3480822",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },    {
            "Title": "Batman v Superman: Dawn of Justice",
            "Year": "2016",
            "imdbID": "tt2975590",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },  {
            "Title": "Fast & Furious 7",
            "Year": "2015",
            "imdbID": "tt2820852",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg"
        },  {
            "Title": "How to Sell Drugs Online (Fast)",
            "Year": "2019–",
            "imdbID": "tt9184994",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjIzNTkyNjktNDdmMy00MmI4LWFlN2MtNDllYTVhZjljNWFiXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg"
        },  {
            "Title": "Fast & Furious Presents: Hobbs & Shaw",
            "Year": "2019",
            "imdbID": "tt6806448",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
        },  {
            "Title": "Death to 2020",
            "Year": "2020",
            "imdbID": "tt13567480",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODZmNDViZTgtZWFjNi00MTYyLWE0ZTctNWQ5YjMzYmY5ZGE1XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        },
        {
            "Title": "Nihon Chinbotsu 2020",
            "Year": "2020–",
            "imdbID": "tt12031040",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNGE2YTNmZDktZDY4MC00YWIzLTlkZDItY2JkODM3NzVkN2MyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },   {
            "Title": "Love and Monsters",
            "Year": "2020",
            "imdbID": "tt2222042",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYWVkMWEyMDUtZTVmOC00MTYxLWE1ZTUtNjk4M2IzMjY2OTIxXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Sing",
            "Year": "2016",
            "imdbID": "tt3470600",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzODYzODU2Ml5BMl5BanBnXkFtZTgwNTc1MTA2NzE@._V1_SX300.jpg"
        }, {
            "Title": "Mulan",
            "Year": "2020",
            "imdbID": "tt4566758",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDliY2E1MjUtNzZkOS00MzJlLTgyOGEtZDg4MTI1NzZkMTBhXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_SX300.jpg"
        },  ,{
            "Title": "Venom",
            "Year": "2018",
            "imdbID": "tt1270797",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg"
        }
    ]);
    return (
        <div>
        <h2>Latest Movies</h2>
        <div className="container">
{movies.map((movie) => 
<div className="mp">
    <img src={movie.Poster} alt="movie" key={movie.id} />
    <span>{movie.Title} <br /> HD</span>
</div>
)}

</div>         
    </div>
    )
}
