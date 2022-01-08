//import { notEqual } from "assert";
import { Movie } from "./Movie";

const movies:Movie[]=[];
let movie=new Movie('Skazani', 90, '1997');
movies.push(movie)
movie=new Movie('Kobieta w czerni', 121, '2020');
movies.push(movie)
movie=new Movie('Django', 178, '2021');
movies.push(movie)

export const Movies = movies;
