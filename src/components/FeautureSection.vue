<template>
    <section class="container mx-auto pt-20">
        <div class="md:flex items-center pt-10 px-5 mb-10 animate__animated animate__fadeInRight animate__delay-3s">
            <div class="feature-img ml-5 md:w-1/3 md:mr-20 w-50">
                <img src="/learnFeature.png" alt="">
            </div>
            <div class="feature-desc md:w-1/2 border border-gray-500 mt-10 rounded-20">
               <div class="content w-auto my-6 mx-6 bg-yellow-card bg-opacity-75 border-gray-500 rounded-20">
                <p class="text-black text-1xl font-light mb-8 p-10">
                    Bebras pertama kali digelar di Lithuania (www.bebras.org), merupakan aktivitas ekstra kurikuler yang mengedukasi kemampuan problem solving dalam informatika dengan jumlah peserta terbanyak di dunia. Siswa peserta akan mengikuti kompetisi bebras di bawah supervisi guru, yang dapat mengintegrasikan tantangan tersebut dalam aktivitas mengajar guru. Kompetisi 
                    ini dilakukan setiap tahun secara online melalui komputer.
                </p> 
               </div>
            </div>
        </div>

        <div class="md:flex md:flex-row-reverse items-center md:pl-10 pt-10 px-5 animate__animated animate__fadeInLeft animate__delay-3s">
            <div class="feature-img ml-5 md:w-1/3 md:ml-20  w-50">
                <img src="/learnFeature2.png"  alt="">
            </div>
            <div class="feature-desc md:w-1/2 border border-gray-500 rounded-20 mt-5">
               <div class="content w-auto my-6 mx-6 bg-yellow-card bg-opacity-75 border-gray-500 rounded-20">
                <p class="text-black text-1xl font-light mb-8 p-10">
                    Bebras pertama kali digelar di Lithuania (www.bebras.org), merupakan aktivitas ekstra kurikuler yang mengedukasi kemampuan problem solving dalam informatika dengan jumlah peserta terbanyak di dunia. Siswa peserta akan mengikuti kompetisi bebras di bawah supervisi guru, yang dapat mengintegrasikan tantangan tersebut dalam aktivitas mengajar guru. Kompetisi 
                    ini dilakukan setiap tahun secara online melalui komputer.
                </p> 
               </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
     @media only screen and (max-width: 670px) {
        .feature-img img {
            height: 300px;
            widows: 400px;
        }     

    }
</style>
<script>
export default {
    name:'FeautureSection',
}
</script>