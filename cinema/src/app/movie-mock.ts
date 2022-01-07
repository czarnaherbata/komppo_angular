//import { notEqual } from "assert";
import { Movie} from "./Movie";

const movies:Movie[]=[];
let movie=new Movie('Skazani', '90', new Date('2020-12-03'));
movies.push(movie)
movie=new Movie('Kobieta w czerni', '90', new Date('2020-12-06'));
movies.push(movie)
movie=new Movie('Django', '90', new Date('2021-12-03'));
movies.push(movie)

export const Movies=movies;
