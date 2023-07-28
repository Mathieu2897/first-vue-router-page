<template>
    <div class="nintendo">
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
    <a href="https://www.smashbros.com/en_US/index.html" target="_blank" ><img class="game-pic1NT" src="../assets/NintendoPhotos/super-smash-bros-logo2.png" alt=""></a>
    <a href="https://mariokart8.nintendo.com/es/" target="_blank" ><img class="game-pic2NT" src="../assets/NintendoPhotos/mario-kart-logo-removebg.png" alt=""></a>
    <a href="https://zelda.com/" target="_blank" ><img class="game-pic3NT" src="../assets/NintendoPhotos/logo-zelda.png" alt=""></a>
    <a href="https://www.pokemon.com/es" target="_blank" ><img class="game-pic4NT" src="../assets/NintendoPhotos/pokemon_platinum_logo.png" alt=""></a>
    <a href="https://metroid.nintendo.com/" target="_blank" ><img class="game-pic5NT" src="../assets/NintendoPhotos/metroid-logo-removebg.png" alt=""></a>
    <a href="https://kirby.nintendo.com/" target="_blank" ><img class="game-pic6NT" src="../assets/NintendoPhotos/kirby-logo-removebg.png" alt=""></a>
  <div class="overlay-images">
  </div>
</div>
<br>
</template>

<style>
.game-pic1NT{
  background-image: url("../assets/NintendoPhotos/Super-Smash.png");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 10% 7%;
  background-position: static;
  
}


.game-pic2NT{
  background-image: url("../assets/NintendoPhotos/mario-kart.png");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 9.5% 5%;
}

.game-pic3NT{
  background-image: url("../assets/NintendoPhotos/legend-of-zelda.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 8.3% 8%;
}

.game-pic4NT{
  background-image: url("../assets/NintendoPhotos/pokemon-platinum.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 9% 7%;
}

.game-pic5NT{
  background-image: url("../assets/NintendoPhotos/metroid.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 8.8% 7%;
}

.game-pic6NT{
  background-image: url("../assets/NintendoPhotos/kirby.jpg");
  background-size: cover;
  background-position: center;
  color:white;
  padding: 8.9% 7%;
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

.nintendo{
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