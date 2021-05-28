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

              <h3 class="text-center">Bebras adalah sebuah inisiatif internasional yang tujuannya adalah untuk mempromosikan Computational Thinking (Berpikir dengan landasan Komputasi atau Informatika), di kalangan guru dan murid mulai tingkat SD, serta untuk masyarakat luas.</h3>
        </div>   
    </div> 

   
</template>

<style scoped>
 img .card-image{
      height: 804px;
      width: 800px;
  } 
  nav {
    margin: 10px 0 0 10px !important;
  }


button:disabled {
  cursor: not-allowed;
  background: #ccc;
}
  
</style>
<script>
import axios from 'axios'

export default {
  name:'About',
  data(){
    return {
      slider: [],
      image: axios.defaults.baseURL + 'images/',
      images: [
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
      ],
      timer: null,
      currentIndex: 1,
      disabled: false,
      animateClass: 1
    }
  },
  mounted(){
    this.getSlider()
  },
  methods: {
      startSlide() {
      this.timer = setInterval(this.next, 4000);
    },
      next() {
      this.animateClass = 1

      if (this.currentIndex > this.slider.length){
        this.disabled = true
        return
      }else{
        this.disabled = false
        this.currentIndex += 1;
      }
      console.log(this.currentIndex);
    },
      prev() {
      this.animateClass = 2
      
      if (this.currentIndex == 1){
        this.disabled = true
        return
      }else{
        this.disabled = false
        this.currentIndex -= 1;
      }    
      console.log(this.currentIndex);
    },
    async getSlider() {
        await axios
        .get('/api/slider/')
        .then(res => {
          const {data} = res.data.data

          data.forEach(item => {
            if (item.image != null) {
              this.slider.push(item.image)
            }
          });
          this.loading = false
        })
        .catch(err => console.log(err))
    },
  },
  
  computed:{
    currentImg() {
      return this.slider[Math.abs(this.currentIndex) % this.slider.length];
    }
  }
}
</script>