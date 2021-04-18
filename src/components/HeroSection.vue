<template>
    <div class="flex items-center pt-10 px-5 md:px-0">
        <div class="w-1/2 pt-20" data-aos="fade-right" data-aos-duration="1000">
            <h1 class="text-4xl text-white mb-5">
                       <u class="text-underline" style="text-decoration-color:#1ABC9C">Computational Thinking</u> <br/> Berpikir dengan landasan Komputasi atau Informatika <br/>
            </h1>
                <p class="text-white text-xl font-light mb-8">
                       di kalangan guru dan murid mulai tingkat SD, <br/> 
                       serta untuk masyarakat luas.
                </p>
                <button
                        class="block bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 text-xl rounded-full"
                    >
                        Ketahui Lebih
                </button>
        </div>
            <div class="w-1/2 flex justify-center" data-aos="fade-left" data-aos-duration="1000">
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