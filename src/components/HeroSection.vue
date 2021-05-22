<template>
    <div class="md:flex md:items-center pt-10 px-5 md:px-0">
        <div class="md:mx-2 mt-40 md:mt-10   md:w-1/2 w-full pt-20 animate__animated animate__fadeInLeft animate__delay-1s">
            <h1 class="md:text-4xl text-2xl text-white mb-5">
                       <u class="text-underline" style="text-decoration-color:#1ABC9C">Computational Thinking</u> <br/> Berpikir dengan landasan Komputasi atau Informatika <br/>
            </h1>
                <p class="text-white md:text-xl text-1xl font-light mb-8">
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
            <div class="md:w-1/2 md:flex md:justify-center animate__animated animate__fadeInRight animate__delay-1s">
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
</style>


<script>
export default {
   name:'HeroSection',
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
   },
}

</script>