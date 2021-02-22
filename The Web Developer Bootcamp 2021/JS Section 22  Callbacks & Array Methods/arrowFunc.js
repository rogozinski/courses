// const add = function (x, y) {
//     return x + y;
// }

const add = (x, y) => {
    return x + y;
}
const add2 = (x, y) => x + y;

const square = (x) => {
    return x * x;
}

//arrow function with parens
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

const rollDie = () => Math.floor(Math.random() * 6) + 1;
const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]
//regular expression
const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})

//arrow function
const newMovies2 = movies.map(movie => `${movie.title} - ${movie.score / 10}`)


