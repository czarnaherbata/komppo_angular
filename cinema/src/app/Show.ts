import { Movie } from "./Movie";
import { Room } from "./Room";

export class Show{
    constructor(public id: number, public movieId: number, public title: string, public year: number, public duration: number, public roomNumber: number, roomSeats: number, public date: Date, public hour: number, public minute: number)
    {

    }
}