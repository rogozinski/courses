/* DESTRUCTURING ARRAYS */
//EXAMPLE 1

const scores = [989321, 879098, 823844, 543901, 500230, 359989, 190938];

/* we want to store two highest scores in the variables like this  */
const highScore = scores[0];
const secondHighScore = scores[1];

/* and there's newer, quicker version to do that  */
const [gold, silver, bronze, ...everyoneElse] = scores;

/* DESTRUCTURING OBJECTS */
//EXAMPLE 1
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

/* we want to store 3 properties in the variables like this  */
// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

/* so there's another/quicker way to do it  */
// const { email, firstName, lastName, city, bio } = user;
// /* if we don't want our variable to have the same name as one in the object we can rename it like this */
// const { born: birthYear, died: deathYear = "N/A" } = user;

/* we can also set our default values */
//EXAMPLE 2
const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const { city, state, died = "N/A" } = user2;

/* DESTRUCTURING PARAMS */
//EXAMPLE 1
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${user.firstName} ${user.lastName}`;
// }
function fullName({ firstName, lastName = "Smith" }) {
    return `${user.firstName} ${user.lastName}`;
}


//EXAMPLE 2
const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})

