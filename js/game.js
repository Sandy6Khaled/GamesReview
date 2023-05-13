import {displayUI} from './ui.js';
import {gameDetails} from './gameDetails.js';
export class Games {
  constructor() {
    this.getGames('mmorpg');
    document.querySelectorAll(".menu a").forEach((l) => {
      l.addEventListener("click", (e) => {
        document.querySelector(".menu .active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.dataset.category);
      });
    });
    this.ui = new displayUI();
  }
  async getGames(category) {
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
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
    const res = await api.json();
    console.log(res);
    this.ui.displayDataGame(res);
    sppiner.classList.add('d-none');
    this.event();
  }
  event(){
    document.querySelectorAll('.card').forEach((e)=>{
      e.addEventListener('click',()=>{
        const getId=e.dataset.id;
        this.getDetails(getId);
      })
    })
  }
  getDetails(gameId){
    const details = new gameDetails(gameId);
    document.getElementById('games').classList.add('d-none');
    document.getElementById('gameDetailsSection').classList.remove('d-none');
  }
}
