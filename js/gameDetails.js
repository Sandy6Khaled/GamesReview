import {displayUI} from './ui.js';
export class gameDetails {
    constructor(id){
        this.details(id);
        document.getElementById('btnClose').addEventListener('click',()=>{
            document.getElementById('games').classList.remove('d-none');
            document.getElementById('gameDetailsSection').classList.add('d-none');
        });
        this.ui = new displayUI();
    }
  async details(gameId) {
    const sppiner = document.getElementById('spinner');
    sppiner.classList.remove('d-none');
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c894237d08msh0f9ee2b8401c064p1ddbf8jsn5056d25946b4",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
      Access_Control_Allow_Origin: 'http://127.0.0.1:49882',
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
      options
    );
    const res =await api.json();
    console.log(res);
    this.ui.displayDetailsGame(res);
    sppiner.classList.add('d-none');
  }
}
