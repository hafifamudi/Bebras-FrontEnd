<template>
    <div class="pt-10 px-5 md:px-0 absolute"> 
      <p class="text-center text-2xl w-1/2 mb-10 shadow-lg mx-auto border border-white-500 rounded-full bg-purple-progress">About Us</p>
      <div class="md:w-1/2 md:flex w-50 md:items-center md:w-full animate__animated animate__fadeInRight animate__delay-1s">
              <div id="hero-animate"
              @mousemove="onHandleMouse"
              @mouseout="onMouseOut"
              @mousedown="onMouseDown"
              @mouseup="onMouseUp"
              >
                 <img src="/HeroImage.png" alt="bebras-indonesia hero image" class="mb-10" />
              </div>

              <h3 class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia libero voluptates architecto perspiciatis harum modi exercitationem magnam quasi earum. Numquam cupiditate iure et doloremque illum cum laboriosam odio, ratione dolorum?</h3>
        </div>   
    </div>



</template>

<style scoped>
  img {
   height: 100%;
   width: 100%;
 }
  nav {
    margin: 10px 0 0 10px !important;
  }
</style>
<script>


export default {
  data(){
    return {
      
    }
  },
 mounted() {
 
  }
}
</script>