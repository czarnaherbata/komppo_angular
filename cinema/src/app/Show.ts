import { Movie } from "./Movie";
import { Room } from "./Room";

export class Show{
    constructor(public movie: Movie, public room: Room, public date: Date, public hour: number, public minute: number)
    {

    }
}