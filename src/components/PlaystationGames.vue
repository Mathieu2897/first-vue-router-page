<template>
    <div class="playstation">
        <div>
          <h2>Games Available on EA Play</h2>
        </div>
        <div class="games-options">
          <router-link to="/xbox"><p>Xbox</p></router-link>
          <router-link to="/playstation"><p>PlayStation</p></router-link>
          <router-link to="/nintendo"><p>Nintendo</p></router-link>
        </div>
      </div>
<div class="games-pic-carousel">
    <a href="https://www.ea.com/es-es/games/it-takes-two" target="_blank" ><img class="game-pic1PS" src="../assets/PSGames/it-takes-two-logo.png" alt=""></a>
    <a href="https://www.ea.com/es-es/games/need-for-speed/need-for-speed-hot-pursuit-remastered" target="_blank" ><img class="game-pic2PS" src="../assets/PSGames/nfshpr-logo.png" alt=""></a>
    <a href="https://www.ea.com/games/starwars/squadrons?setLocale=en-us?setLocale=en-us" target="_blank" ><img class="game-pic3PS" src="../assets/PSGames/sws-logo-light.svg" alt=""></a>
    <a href="https://www.ea.com/games/rocket-arena" target="_blank" ><img class="game-pic4PS" src="../assets/PSGames/rocket-arena-logo.svg" alt=""></a>
    <a href="https://www.ea.com/games/ufc/ufc-3" target="_blank" ><img class="game-pic5PS" src="../assets/PSGames/ufc-3-logo.png" alt=""></a>
    <a href="https://www.ea.com/games/the-sims/the-sims-4" target="_blank" ><img class="game-pic6PS" src="../assets/PSGames/the-sims-4-logo.svg" alt=""></a>
  <div class="overlay-images">
  </div>
</div>
<br>
</template>

<style>
.game-pic1PS{
  background-image: url("../assets/PSGames/it-takes-two.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 8% 7%;
}

.game-pic2PS{
  background-image: url("../assets/PSGames/nfs-bg.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 10.7% 7%;
}

.game-pic3PS{
  background-image: url("../assets/PSGames/sws-keyart.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 10.8% 8%;
}

.game-pic4PS{
  background-image: url("../assets/PSGames/rocket-arena.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 10% 9%;
}

.game-pic5PS{
  background-image: url("../assets/PSGames/ufc.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 10.5% 6%;
}

.game-pic6PS{
  background-image: url("../assets/PSGames/the-sims-4.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 9.5% 6%;
}

.games-pic-carousel a:hover img{
  opacity: 0.45;
  transform: translateY(-10px);
}

.games-pic-carousel img{
  width: 25%;
  height: 25%;
  margin-left: 2rem;
  margin-top: 2rem;
  margin-bottom: .5rem;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.playstation{
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
}

h2{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  margin-top: 5rem;
  line-height: 50px;
  font: size 50px;;
}

.games-options{
  font-size: large;
  display: flex;
  flex-direction: row;
  text-decoration: none;
}

.games-options a{
  text-decoration: none;

}

.games-options p{
  margin-left: 1rem;
  margin-top: 2rem;
  cursor: pointer;
  background-color: none;
  color: white;
  text-decoration: none;
}


</style>