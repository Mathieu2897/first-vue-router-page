<template>
    <div class="xbox">
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
    <a href="https://www.ea.com/es-es/games/need-for-speed/need-for-speed-unbound" target="_blank" ><img class="game-pic1" src="../assets/nfs-unbound-logo.png" alt=""></a>
    <a href="https://www.ea.com/es-es/games/starwars/jedi/jedi-fallen-order" target="_blank" ><img class="game-pic2" src="../assets/star-wars.png" alt=""></a>
    <a href="https://www.ea.com/es-es/games/fifa/fifa-23" target="_blank" ><img class="game-pic3" src="../assets/fifa23-logo-white-stacked.svg" alt=""></a>
    <a href="https://www.ea.com/es-es/games/battlefield/battlefield-2042" target="_blank" ><img class="game-pic4" src="../assets/battlefield-logo-removebg-preview.png" alt=""></a>
    <a href="https://www.ea.com/es-es/games/plants-vs-zombies/plants-vs-zombies-battle-for-neighborville" target="_blank" ><img class="game-pic5" src="../assets/plants-vs-zombies-logo.svg" alt=""></a>
    <a href="https://www.ea.com/es-es/games/grid/grid-legends" target="_blank" ><img class="game-pic6" src="../assets/grid-legends-logo.png" alt=""></a>
  <div class="overlay-images">
  </div>
</div>
<br>
</template>

<style>
.game-pic1{
  background-image: url("../assets/first-game-pic.png");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 10% 5%;
}

.game-pic2{
  background-image: url("../assets/second-game-pic.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 10.5% 9%;
}

.game-pic3{
  background-image: url("../assets/third-game-pic.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 10.5% 8%;
}

.game-pic4{
  background-image: url("../assets/fourth-game-pic.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 9% 6%;
}

.game-pic5{
  background-image: url("../assets/fifth-game-pic.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 9% 6%;
}

.game-pic6{
  background-image: url("../assets/sixth-game-pic.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 9% 6%;
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

.xbox{
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