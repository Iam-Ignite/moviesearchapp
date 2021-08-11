import React,{useState} from 'react'


export default function Pagetwo() {
    const [movies] = useState([  {
        "Title": "How I Met Your Mother",
        "Year": "2005–2014",
        "imdbID": "tt0460649",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_SX300.jpg"
    },{
        "Title": "Drake and Josh Go Hollywood",
        "Year": "2006",
        "imdbID": "tt0492878",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA1NzIzNTcwNV5BMl5BanBnXkFtZTcwOTA1MTYzMQ@@._V1_SX300.jpg"
    },  {
        "Title": "The Good Doctor",
        "Year": "2017–",
        "imdbID": "tt6470478",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzZjMWEwMGMtODdhMi00NGRkLTkwZTEtNmM4NjA3M2FlNzc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    {
        "Title": "The Good Doctor",
        "Year": "2011",
        "imdbID": "tt1582271",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTMzODgyNTc4OF5BMl5BanBnXkFtZTcwNjcwODc3Nw@@._V1_SX300.jpg"
    }, {
        "Title": "Siren",
        "Year": "2018–2020",
        "imdbID": "tt5615700",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjFmYjFmMDgtNjk1Zi00NTc2LWIwOGEtZWIxYTdmMWVmYWVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Siren",
        "Year": "2016",
        "imdbID": "tt4667854",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwMjU3ODA4OF5BMl5BanBnXkFtZTgwOTkwNTUyMDI@._V1_SX300.jpg"
    },
    {
        "Title": "Siren",
        "Year": "2006",
        "imdbID": "tt0449393",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ1NzY2MzMzN15BMl5BanBnXkFtZTcwOTg4MzUzMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Siren",
        "Year": "2010",
        "imdbID": "tt1548635",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzE0MjczMDM2MF5BMl5BanBnXkFtZTgwODYxODg0MDE@._V1_SX300.jpg"
    },
    {
        "Title": "K2: Siren of the Himalayas",
        "Year": "2012",
        "imdbID": "tt2467442",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxMzY0MDEyN15BMl5BanBnXkFtZTgwMzc5MjE4MjE@._V1_SX300.jpg"
    },
    {
        "Title": "Siren head",
        "Year": "2020",
        "imdbID": "tt12706382",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWNkMTFkZjktN2JkNy00ZTQ2LWI4MTUtZjZkYzRkMWYwNmI0XkEyXkFqcGdeQXVyNDcwNDE0Nzk@._V1_SX300.jpg"
    },
    {
        "Title": "The Siren",
        "Year": "2019",
        "imdbID": "tt7144200",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWM0M2U1NzAtNGMwZS00ZDUyLWEyMTktNmU4NGY2MmJmYzEzXkEyXkFqcGdeQXVyMjEwNDY4NzU@._V1_SX300.jpg"
    },  {
        "Title": "The Flash",
        "Year": "2014–",
        "imdbID": "tt3107288",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },{
        "Title": "Sex Education",
        "Year": "2019–",
        "imdbID": "tt7767422",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg"
    },    {
        "Title": "American Dad!",
        "Year": "2005–",
        "imdbID": "tt0397306",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDRkOWIyOTUtMjg5YS00OTJjLTgwNGYtMjgxMTA0NWQ2NGI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }, {
        "Title": "Arrow",
        "Year": "2012–2020",
        "imdbID": "tt2193021",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTI0NTMwMDgtYTMzZC00YmJhLTg4NzMtMTc1NjI4MWY4NmQ4XkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_SX300.jpg"
    },   {
        "Title": "Two and a Half Men",
        "Year": "2003–2015",
        "imdbID": "tt0369179",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTI2MjIzN2ItZDg0OS00MTlhLWIzMTMtYWI4ZTA0NGE4NDJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },   {
        "Title": "Family Guy",
        "Year": "1999–2022",
        "imdbID": "tt0182576",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_SX300.jpg"
    },  {
        "Title": "Class of 2020",
        "Year": "2020–",
        "imdbID": "tt11581534",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTkwYjNhMzktMmJkNy00MmIwLWI2MGYtYzY1YTE3ZTA2ODYyXkEyXkFqcGdeQXVyODI2MzM0MTM@._V1_SX300.jpg"
    }]);

    return (
        <div>
        <h2>Latest</h2>
        <div className="container" >
{movies.map((movie) => 
<div className="mp"  key={movie.id}>
    <img src={movie.Poster} alt="movie" />
    <span>{movie.Title} <br /> HD</span>
</div>
)}

</div>         
    </div>
    )
}