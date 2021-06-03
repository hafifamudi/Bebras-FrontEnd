<template>
    <div 
    class="relative"
    @mouseenter="toggelSlider"
    >
    <div 
    class="md:flex md:items-center pt-10 px-5 md:px-0 relative"
    :class="{
        'hide': currentIndex != 1,
        'animate__animated animate__fadeInLeft' : animateClass == 2,
        'animate__animated animate__fadeInRight' : animateClass == 1
        }"
    >
        <div class="md:mx-2 mt-40 md:mt-10   md:w-1/2 w-full pt-20">
          
            <h1 class="md:text-4xl text-2xl text-white mb-5">
                       <u class="text-underline" style="text-decoration-color:#1ABC9C">Computational Thinking</u> <br/> Berpikir dengan landasan Komputasi atau Informatika <br/>
            </h1>
                <p class="text-white lg:text-2xl md:text-1xl text-1xl font-light mb-8">
                       di kalangan guru dan murid mulai tingkat SD, <br/> 
                       serta untuk masyarakat luas.
                </p>
                <router-link
                    to="/posts"
                    class="block mx-auto text-center w-50 md:w-1/2 md:mx-1 bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 md:text-xl rounded-full"
                >
                        Ketahui Lebih
                </router-link>
        </div>
            <div class="md:w-1/2 md:flex md:justify-center">
                <div id="hero-animate"
                @mousemove="onHandleMouse"
                @mouseout="onMouseOut"
                @mousedown="onMouseDown"
                @mouseup="onMouseUp"
                >
                    <img src="/HeroImage.png" alt="bebras-indonesia hero image" />
                </div>
        
        
        </div>  
        </div>

        <div 
        v-for="i in [currentIndex]" 
        :key="i"  
        :class="{
          'hidden': currentIndex == 1,
          'animate__animated animate__fadeInRight' : animateClass == 1,
          'animate__animated animate__fadeInLeft' : animateClass == 2
        }"
        class="slider w-50 p-3">
          <img :src="image+currentImg" class="shadow-lg slider rounded-20"/>
        </div>
      <button v-if="show" class="prev rounded-full hover:bg-green-button animate__animated animate__fadeIn" @click="prev" :disabled="showButtonOne" href="#">&#10094;</button>
      <button v-if="show" class="next rounded-full hover:bg-green-button animate__animated animate__fadeInLeft" @click="next" :disabled="showButtonTwo"  href="#">&#10095;</button>

    </div>
  
  
</template>

<style scoped>
    @media only screen and (max-width: 670px) {
        #hero-animate img {
            position: absolute;
            margin-top:-550px !important;
        }     

    }

    @media only screen and (max-width: 764px) {
        #hero-animate img {
            position: absolute;
            margin-top:-500px !important;
        }   


    }

     @media only screen and (min-width: 764px) {
        .slider {
          width: 100%;
          height: 80vh;
        }


    }

    .hide {
        display: none;
    }
    button:disabled {
        cursor: not-allowed;
        background: #ccc;
    }

    .slider {
        height: 80vh;
    }
    .prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  text-decoration: none;
  user-select: none;
}

    .next {
    right: 0;
    }

    .prev {
    left: 0;
    }

</style>


<script>
import axios from 'axios'

export default {
   name:'HeroSection',
   data(){
       return {
            slider: [],
            image: process.env.VUE_APP_API_ENDPOINT + 'images/',
            timer: null,
            currentIndex: 1,
            animateClass: 1,
            showButtonOne: false,
            showButtonTwo: false,
            show: true,
       }
   },
    mounted() {
        this.getSlider()
    },

    methods: {
       onHandleMouse(e){  
        //make javascript hover transform 3D

        const heroAnimate = document.getElementById('hero-animate'); 

        const height = heroAnimate.clientHeight
        const width = heroAnimate.clientWidth 


        //set value of x position
        const xVal = e.layerX
        //set value of y position
        const yVal = e.layerY

        // calculate the rotation value along Y axis
        const yRotation = 20 * ((xVal - width / 2) / width)
        
        // calculate the rotation value along X axis
        const xRotation = -20 * ((yVal - height / 2) / height)
        
        // Generate the CSS string for transform of the properties
        const cssResult = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
        
        // Apply the transformation
        heroAnimate.style.transform = cssResult
    },

    onMouseOut(){
        const heroAnimate = document.getElementById('hero-animate'); 
        heroAnimate.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    },

    onMouseDown(){
        const heroAnimate = document.getElementById('hero-animate'); 
        heroAnimate.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    },

    onMouseUp(){
        const heroAnimate = document.getElementById('hero-animate'); 
        heroAnimate.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    },

      startSlide() {
      this.timer = setInterval(this.next, 4000);
    },
      next() {
      this.animateClass = 1

      if (this.currentIndex > this.slider.length){
        this.showButtonTwo = true
        return
      }else{
        this.showButtonTwo = false
        this.showButtonOne = false
        
        this.currentIndex += 1;
      }
    },
      prev() {
      this.animateClass = 2
      
      if (this.currentIndex == 1){
        this.showButtonOne = true
        return
      }else{
        this.showButtonOne = false
        this.showButtonTwo = false
        
        this.currentIndex -= 1;
      }    
   },

    async getSlider() {
        await axios
        .get(process.env.VUE_APP_API_ENDPOINT + 'api/slider')
        .then(res => {
          const {data} = res.data.data

          data.forEach(item => {
            if (item.image != null) {
              this.slider.push(item.image)
            }
          });

          console.log(this.slider);
          this.loading = false
        })
        .catch(err => console.log(err))
    },

    toggelSlider(){
        this.show = !this.show
    }
 },

  computed:{
    currentImg() {
      return this.slider[Math.abs(this.currentIndex) % this.slider.length];
    }
  }
}
</script>
