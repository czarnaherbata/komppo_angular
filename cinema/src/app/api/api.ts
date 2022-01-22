import axios from 'axios';
import { Movie } from '../Movie';
import { Show } from '../Show';

const url = 'http://localhost:3000/';

export const createMovie=async(movie: Movie)=>{
    return await axios.post(url+'movies',
    {
       // id:movie.id,
        title : movie.title,
        year :movie.year,
        duration : movie.duration
        
    })
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))  
}

export const getMovie=async()=>{
    let data=[]
   
    return await axios.get(url+'movies')
    .then((response)=>{
        data=response.data
        console.log(data)
        return data
        })
    .catch((error)=>{
            return error})
        
}

export const getMovieById=async(id: number)=>{
  
    return await axios.get(url + "movies/" + id)
        .then((response) => {
            console.log(id)
            return response.data
        })
        .catch((error) => {
            return error
        })
}

export const deleteM=async(id: number)=>{
    console.log(id)
return await axios.delete(url+'movies/'+id)
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
    
}

export const editM=async(movie: Movie)=>{
    return await axios.put(url+'movies/'+movie.id, movie)
    .then((response)=>{return response.data})
    .catch((error)=>console.log(error))
    
}

//show
// export const createShow=async(show: Show)=>{
//     return await axios.post(url+'shows',
//     {
//        // id:movie.id,
//         title : show.title,
//         year :show.year,
//         duration : show.duration,
//         date: show.date,
//         time: show.time,
//         roomId: show.roomId,
//         seats: show.seats
        
//     })
//     .then((response)=>{return response.data})
//     .catch((error)=>console.log(error))  
// }
// export const getShow=async()=>{
//     let data=[]
//     await axios.get(url+'shows').then((response)=>{
//         data=response.data}).catch((error)=>{
//         return error})
//         return data
// }

// export const deleteS=async(id: number)=>{
//     console.log(id)
// return await axios.delete(url+'shows/'+id)
//     .then((response)=>{return response.data})
//     .catch((error)=>console.log(error))
    
// }
// export const editS=async(show: Show)=>{
//     return await axios.put(url+'shows/'+show.id, show)
//     .then((response)=>{return response.data})
//     .catch((error)=>console.log(error))
    
// }