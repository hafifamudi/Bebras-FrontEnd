<template>
<div class="landing-page">
    <section class="landing-page">
        <div class="header__bg" v-if="getCurrentRoute == 'Home' "></div>
            <div class="container mx-auto relative">
                <header class="flex items-center">
                <div>
                    <img src="/LogoHeaderComplete.png"  style="height: 100px" alt="logo" class="h-full" />
                </div>
                <ul class="flex ml-auto items-center mt-2">
                <li>
                    <a
                    class="hover:text-teal-500 text-lg px-4 py-3"
                    :class="[ 
                        getCurrentRoute === 'Home'  ? 'text-white' : 'text-black'
                    ]"
                    href="/"
                    >Home</a>
                </li>
                <li>
                   <router-link
                    class="hover:text-teal-500 text-lg px-4 py-3"
                    :class="[ 
                        getCurrentRoute === 'Home'  ? 'text-white' : 'text-black'
                    ]"
                    to="/about"
                    >About</router-link>
                </li>
                <li>
                    <a
                    class="hover:text-teal-500 text-lg px-4 py-3"
                    :class="[ 
                        getCurrentRoute === 'Home'  ? 'text-white' : 'text-black'
                    ]"
                    href="#"
                    >Soal</a
                    >
                </li>
                <li>
                    <a
                    class="hover:text-teal-500 text-lg px-4 py-3"
                    :class="[ 
                        getCurrentRoute === 'Home'  ? 'text-white' : 'text-black'
                    ]"
                    href="#"
                    >Kegiatan</a
                    >
                </li>
                </ul>

            </header>
            <div v-if="getCurrentRoute == 'Home' ">
                <hero-section/>
            </div>
        </div>
    </section>
</div>

</template>

<script>
import HeroSection from "./HeroSection.vue"

export default { 
    name:'HeaderSection',
    components: { HeroSection },
    computed:{
        getCurrentRoute(){
            return this.$route.name
        }
    }
}
</script>