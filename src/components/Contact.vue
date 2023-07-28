<script>
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


</script>

<template>
<div class="contact-start">
    <img src="../assets/EALogo-New.svg" alt="">
    <h3>Message us with your EA Account</h3>
</div>

<div class="form-container">
        <form class="row g-1 contact-form">
          <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name" required>
          </div>
          <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required>
          </div>
          <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                  <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number" required>
          </div>
          <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
          </div>
        <div class="btn-form">
          <button class="btn-send"  type="submit" >
            <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
          </button>
        </div>
      </form>
</div>
</template>

<style>



.form-floating{
  margin-bottom: 2rem;
  color: black;
  font-size:90%;
}

.modal-content{
  background-color: #232746;
  box-shadow: 0px 0px 20px 10px #ffbb763f;
  border: 1px solid rgba(255,255,255,0.454);

}

.modal-content h1{
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
}

.modal-content p{
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  text-align: left;
}


.form-container label{
  font-weight: 500;
}


.form-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
}

.btn-form{
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-start{
    margin-top: 2rem;
}
.contact-start h3{
    margin-top: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    line-height: 50px;
}

button {
  font-family: inherit;
  font-size: 15px;
  background: rgb(255, 68, 68);
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
  margin-bottom: 5rem;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(5em);
}

button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}

</style>