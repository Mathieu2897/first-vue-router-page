<script>

</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <img src="./assets/ea-play-logo-coral-embed-code.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        <div class="navbar-links">
          <router-link to="/home">Home</router-link>
          <router-link to="/news">News</router-link>
          <router-link to="/games">Games</router-link>
        </div>
        <router-link to="/contact" class="btn-contact">Contact Us</router-link>        
        </a>
      </div>
  </nav>
  <router-view/> 
</template>

<style>

.btn-contact{
  background-color: rgb(255, 68, 68);
  color:white;
  font-family: arial;
  font-size: 18px;
  border-radius: 2px;
  border:none;
  width:10rem;
  height: 2.5rem;
  margin-left: auto;
  position: absolute;
  right: 0;

}

.navbar-links {
  display: flex;
  align-items: center;
  margin-right: auto;
  font-family: arial;
}

#app {
  font-family: Verdana;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f9fafc;
}

nav {
  padding: 30px;
  max-height: 50px;
}

nav a {
  font-weight: 540;
  color: #4f5052;
  font-size: 15px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin-right: 30px;
}


.navbar-links .router-link-exact-active {
  color: rgb(255, 68, 68) ;
  cursor: pointer;

}

nav img {
  width: 7rem;
  height:7rem;
  margin-right: 3rem;
  margin-left: 2rem;
}

body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(15deg, rgba(13, 16, 66, 1) 60%, rgb(255, 68, 68) 100%, rgb(255, 68, 68) 100%);
  z-index: -1;
}

</style>
