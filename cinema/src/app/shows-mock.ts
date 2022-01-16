import { Show } from "./Show";
import { Movies } from "./movie-mock";
import { Rooms } from "./rooms-mock";

const shows:Show[]=[
    new Show(Movies[0], Rooms[0], new Date(2022, 0, 24), 12, 15),
    new Show(Movies[1], Rooms[1], new Date(2022-1-1), 13, 45)
];

export const Shows = shows;
