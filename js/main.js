import {Games} from "./game.js";

new Games();

// async function gameAPI(){
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c894237d08msh0f9ee2b8401c064p1ddbf8jsn5056d25946b4',
//             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
//     const api = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options);
//     const res = await api.json();
//     console.log(res);
//     // fetch()
//     //     .then(response => response.json())
//     //     .then(response => console.log(response))
//     //     .catch(err => console.error(err));
// }
// gameAPI();

// async function gameDetailsAPI(){
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'c894237d08msh0f9ee2b8401c064p1ddbf8jsn5056d25946b4',
//             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
//     const api = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options);
//     const res = api.json();
//     console.log(res);
//     // fetch()
//     //     .then(response => response.json())
//     //     .then(response => console.log(response))
//     //     .catch(err => console.error(err));
// }