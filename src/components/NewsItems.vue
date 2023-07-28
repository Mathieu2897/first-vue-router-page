<template>
    <div>
      <h2>EA Play News</h2>
    </div>
     <!-- Wrap the news cards in a container for centering -->
      <div class="news-cards-container">

        <div class="card">
            <a href="https://www.ea.com/games/starwars/jedi/jedi-survivor/news/get-more-jedi-survivor-ea-play-pro" target="_blank"><img src="../assets/NewsPhotos/first-new.jpg" class="card-img-top" alt=""></a>
            <div class="card-body">
            <h5 class="card-title">STAR WARS Jedi: Survivor - EA Play Pro</h5>
            <p class="card-text">EA Play Pro members get unlimited access to the Deluxe Edition</p>
        </div>
        </div>
        <div class="card">
            <a href="https://www.ea.com/games/fifa/fifa-23" target="_blank"><img src="../assets/NewsPhotos/second-new.png" class="card-img-top" alt=""></a>
        <div class="card-body">
            <h5 class="card-title">Get More FIFA 23 With EA Play - EA SPORTS Official Site</h5>
            <p class="card-text">FIFA 23 is now on the Play List with EA Play</p>
        </div>
        </div>
        <div class="card">
            <a href="https://www.ea.com/ea-play/news/ea-play-spotlight-april2021" target="_blank"><img src="../assets/NewsPhotos/third-new.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
            <h5 class="card-title">EA Play Spotlight - April 2021</h5>
            <p class="card-text">Learn all about the latest games and rewards now available with your EA Play membership</p>
        </div>
        </div>
        <div class="card">
            <a href="https://www.ea.com/ea-play/news/ea-app-open-beta" target="_blank"><img src="../assets/NewsPhotos/fourth-new.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
            <h5 class="card-title">EA Play Now Available on Xbox Game Pass for PC via the EA app</h5>
            <p class="card-text">The EA app, our next-generation PC platform, is in open beta</p>
        </div>
        </div>
        <div class="card">
            <a href="https://www.ea.com/ea-play/news/ea-play-coming-to-xbox-game-pass" target="_blank"><img src="../assets/NewsPhotos/fifth-new.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
            <h5 class="card-title">Get More with EA Play</h5>
            <p class="card-text">The EA Access and Origin Access game subscription services will soon have a new name</p>
        </div>
        </div>
        <div class="card">
            <a href="https://www.ea.com/games/command-and-conquer/command-and-conquer-remastered/news/command-and-conquer-ea-play" target="_blank"><img src="../assets/NewsPhotos/sixth-new.jpg" class="card-img-top" alt=""></a>
        <div class="card-body">
            <h5 class="card-title">Command & Conquer Remastered Is Now on The Play List</h5>
            <p class="card-text">EA Play members can now join the battle as the Command & Conquer Remastered Collection joins The Play List</p>
        </div>
        </div>
    </div>
  </template>
  
  <style>

.news-cards-container p{
  margin-top: 1rem;
  text-align: justify;
}

  .news-cards-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;
  }
  
  
  h2 {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    margin-top: 5rem;
    line-height: 50px;
    font: size 50px;;
  }
  
  h5 {
    font-weight: bolder;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 20px 10px #ffbb763f;
    border: 1px solid rgba(255,255,255,0.454);


  }
  
  .card {
    border: none;
    text-align: left;
    width: 22rem;
    margin: 1rem;
    transition: 0.5s ease;
    cursor: pointer;
  }
  
  .card img {
    height: 12rem;
  }
  </style>