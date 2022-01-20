//import { notEqual } from "assert";
import { Movie } from "./Movie";

const movies:Movie[]=[];
let movie=new Movie(0, 'Skazani', 90, 1997);
movies.push(movie)
movie=new Movie(1, 'Kobieta w czerni', 121, 2020);
movies.push(movie)
movie=new Movie(2, 'Django', 178, 2021);
movies.push(movie)

export const Movies = movies;
