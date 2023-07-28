<template>
  <div class="container">
    <div class="background-image" :style="{ backgroundImage: 'url(../assets/bg-home-pic1.jpg' }">
        <div class="container-content">
          <h1>Now available on The Play List</h1>
          <p>EA Play* members can tear up the streets with friends in Need for Speed™ Unbound!</p>
          <button>Learn More</button>
        </div>
    </div>
  
  </div>
</template>

<script>

</script>

<style >
.container{
  display: flex;
  flex-direction: row;
  position: relative;
}


.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  
}
.container-content{
  text-align: left;
  z-index: 1;
  margin-top: 15%;
  font-family: Verdana,Helvetica,Arial,sans-serif;
  font-weight: 400;
  line-height: 27px;
  
}

.container-content button {
  color: white;
  background-color: rgb(255, 68, 68);
  border-radius: 5%;
  border: 5px;
  padding: 0.8rem;
  width:10rem ;
}

</style>
