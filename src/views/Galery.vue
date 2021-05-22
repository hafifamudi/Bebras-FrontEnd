<template>
    <nav-search
        :searchKeywordSecond="searchKeyword"
        @search="getGalerys"
    />

    <div v-if="loading">
        <loading/>
    </div>
    
    <div class="container mx-auto px-4 absolute my-20" v-for="galery in galerys" :key="galery.id">         
      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" :src="image+galery.image" alt=""></div>
        </div>
        <footer class="flex md:w-1/2 md:flex-col items-center justify-between p-2 md:my-10 md:p-4 bg-green-button rounded-full">
            <a class="flex items-center no-underline hover:underline text-black" href="#"> 
                <img alt="Placeholder" class="block rounded-full" :src="image+galery.image" style="width: 32px; height: 32px;">
                <p class="ml-2 text-sm">
                        {{ galery.caption }}
                </p>
            </a>
        </footer>    
      </section>

    </div>

</template>

<style scoped>

</style>

<script>
import axios from 'axios'
import NavSearch from '../components/NavSearch.vue'
import Loading from '../components/Loading.vue'

export default {
    name:'Galery',
    components:{
        NavSearch,
        Loading,
    },
    data(){
        return {
            searchKeyword:['Photo', 'Videos'],
            loading: true,
            galerys: [],
            image: axios.defaults.baseURL + 'images/',
        }
    },
    mounted(){
        this.getGalerys()
    },
    methods:{
        async getGalerys(value){
            let search = 'photo'
            
            if (value){
                search = value
            }
            
            await axios
            .get(`/api/${search}/`)
            .then(res => {
            const {data} = res.data.data
            this.galerys = data

            console.log(data);
            this.loading = false
            })
            .catch(err => console.log(err))
        }
    }
}
</script>