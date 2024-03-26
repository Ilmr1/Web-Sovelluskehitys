let movies = [];

let movieCount = parseInt(prompt("Enter the number of movies you want to rate:"));

for (let i = 0; i < movieCount; i++) {
    let title = prompt("Enter the title of the movie:");
    let rating = parseInt(prompt("Enter the rating of the movie (1-5):"));

    movies.push({ title: title, rating: rating });
}
movies.sort((a, b) => b.rating - a.rating);

let highestRatedMovie = movies[0];

document.write("<h1>Sorted List of Movies:</h1>");
for (let movie of movies) {
    document.write(`<p>${movie.title} - ${movie.rating}</p>`);
}

document.write("<h1>Highest Rated Movie:</h1>");
document.write(`<p>${highestRatedMovie.title} - ${highestRatedMovie.rating}</p>`);