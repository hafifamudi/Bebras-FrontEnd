<template>
<div class="landing-page">
    <section class="landing-page">
        <div class="header__bg"></div>
         <div class="container mx-auto relative">
            <header 
            class="navbar lg:flex items-center text-center w-full" 
            :class="{
            'active': show,
            }"
            id="navbar" @click="ResponsiveNavbar">   
                <div>
                    <img @click="imgLink" src="/LogoHeaderComplete.png"  style="height: 100px" alt="logo" class="h-full" />
                </div>
                <ul class="md:flex md:ml-auto md:items-center mt-2">
                <li>
                    <router-link
                    class="block md:inline-block hover:text-teal-500 text-lg px-4 py-3"
                    :class="[ 
                        getCurrentRoute === 'Home'  ? 'text-white' : 'text-black'
                    ]"
                    to="/"
                    >Home</router-link>
                </li>
                <li>
                   <router-link
                    class="block md:inline-block hover:text-teal-500 text-lg px-4 py-3"
                    :class="[ 
                        getCurrentRoute === 'About'  ? 'text-white' : 'text-black'
                    ]"
                    to="/about"
                    >About</router-link>
                </li>
                <li>
                    <router-link
                    class="block md:inline-block hover:text-teal-500 text-lg px-4 py-3"
                    :class="[ 
                        getCurrentRoute === 'Galery'  ? 'text-white' : 'text-black'
                    ]"
                    to="/galery"
                    >Galerys</router-link
                    >
                </li>
                <li>
                    <router-link
                    class="block md:inline-block hover:text-teal-500 text-lg px-4 py-3"
                    :class="[ 
                        getCurrentRoute === 'Events'  ? 'text-white' : 'text-black'
                    ]"
                    to="/events"
                    >Events</router-link
                    >
                </li>
                </ul>
    
            </header>

             <div class="flex md:hidden">
                <button id="hamburger" @click="ResponsiveNavbar">
                    <img  src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                </button>
            </div>
        </div>
    </section>
</div>

</template>

<style scoped>
    img {
        cursor: pointer;
    }
    @media only screen and (max-width: 670px) {
        .navbar {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 99;
        }

        #navbar {
            transform: translateY(-100%);
            position: fixed;
        }


        #hamburger{
            position: fixed;
            z-index: 999;
        }
    }

     @media only screen and (max-width: 764px) {
        .navbar {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 99;
        }

        #navbar {
            transform: translateY(-100%);
            position: fixed;
        }


        #hamburger{
            position: fixed;
            z-index: 999;
        }
    } 
    .navbar {
        transition: all .6s ease-in-out;
    }
   
    .navbar.active {
        width: 100vw;
        background-color: rgb(48, 46, 46);
    }

</style>


<script>

export default { 
    name:'HeaderSection',
    data(){
        return {
            show: false,
            desktop: false,
        }
    },
    computed:{
        getCurrentRoute(){
            return this.$route.name
        },
    },
    methods: {
        ResponsiveNavbar(){
            const body = document.getElementsByTagName('body')[0];
            
            if (body.clientWidth >= 914){
                this.desktop = true
                this.show = false
            }else {
                this.show = !this.show
                this.desktop = false
            }

            if (!this.desktop){
                if (this.show){
                    document.getElementById('navbar').style.transform = "translateY(0%)"
                }else{
                    document.getElementById('navbar').style.transform = "translateY(-100%)"
                }
            }
        },

        imgLink(){
            this.$router.push({name: 'Home'})
        }

    },
}
</script>       
