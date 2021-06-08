<template>
    <nav-search
        :searchKeywordSecond="searchKeyword"
        @search="getGalerys"
    />

    <div v-if="loading">
        <loading/>
    </div>
    
    <div class="container mx-auto px-4 absolute my-20 lg:mx-10"> 
	<div v-if="!isData">
		<h1 class="text-center bg-orange-button shadow-lg rounded-20 my-20">Data Tidak Tersedia</h1>
	</div>
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">  
            <section class="py-8 px-4" v-for="galery in galerys" :key="galery.id">
                <div class="-mx-4">

                <div class="md:w-full px-4 mb-8 md:mb-0"><img  v-if="galery.image" class="rounded shadow-md" 
                :src="image+galery.image" alt=""></div>
                </div>

                <div id="videos" class="relative mb-5" v-if="galery.link">
                    <iframe class="rounded-20 w-full" height="300px" 
                    :src="galery.link">
                    </iframe> 
                </div>

                <footer class="flex md:w-auto md:flex-col items-center justify-between p-2 md:my-10 md:p-4 bg-green-button rounded-full">
                    <a class="flex items-center no-underline text-black" href="#"> 
                        <img alt="Videos" class="block rounded-full text-center" 
                        :src="image+galery.image" style="width: 32px; height: 32px;">
                        <p class="ml-2 text-sm">
                            {{ galery.caption }}
                        </p>
                    </a>
                </footer>    
            </section>
        </div>

        <div class="md:flex md:justify-center">
            <button
                @click="loadMore"
                class="mb-3 block mx-auto text-center w-full md:w-1/3 md:mx-1 bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 md:text-1xl rounded-full"
                :disabled="disabled"
                >
                Muat lebih banyak
            </button>
        </div>
    </div>

    
    


</template>

<style scoped>
    button:disabled {
    cursor: not-allowed;
    background: #ccc;
    }
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
            searchKeyword:['Photo', 'Video'],
            loading: true,
            galerys: [],
            image: process.env.VUE_APP_IMAGE_URL,
            loadMoreData: false,
            nextPage: 1,
            currentPhoto:[],
            currentVideo:[],
            currentOption:[],
            search: String,
            disabled: false,
            isData: true
        }
    },
    mounted(){
        this.getGalerys()
    },
    methods:{
        async getGalerys(value){
            this.search = 'photo'

            if (value){
                this.search = value
            }

            let uri = process.env.VUE_APP_API_ENDPOINT + `api/${this.search}?page=`+ this.nextPage;
            console.log(uri)
            this.galerys = []
            this.loading = true
            this.refreshCategory()

            await axios
                .get(uri)
                .then(res => {
                const {data} = res.data.data
                const counter = data.length >= 3 ? 3 : data.length

            if (counter != 0) {
                for (let index = 0; index < counter ; index++) {

                    if (this.search === 'photo') {
                        this.currentPhoto.push(data[index].id)
                    
                    } else if (this.search === 'video') {
                        this.currentVideo.push(data[index].id)
                    }

                    this.galerys.push(data[index])     
                }
		}
		else{			
			this.isData = false
		}
                this.loading = false
            })
            .catch(err => console.log(err))
        },

        async loadMore() {
            let uri = process.env.VUE_APP_API_ENDPOINT + `api/${this.search}?page=`+ this.nextPage;


            await axios
                .get(uri)
                .then(res => {
                const {data} = res.data
                const {data: getData} = res.data.data
		
                if (data.length < 4) {
                    this.loadMoreData = false
                    this.disabled = true
                    return
                }


                if (data.current_page <= data.last_page){
                    this.nextPage = data.current_page + 1
                    this.disabled = false
                       
                    for (let index = 0; index < getData.length; index++) {
                        this.currentOption = this.search === 'photo' ? this.currentPhoto : this.currentVideo

                        if (getData[index].id != this.currentOption[index]){
                            this.galerys.push(getData[index])
                        }

                        if (this.galerys.length === getData.length) {
                            this.loadMoreData = false
                            this.disabled = true
                            this.nextPage = 1
                        }
                    }


                }else{
                    this.loadMoreData = false
                    this.disabled = true
                    this.nextPage = 1
                }

             
                this.loading = false
                })
                .catch(err => console.log(err))
        },
        
        async refreshCategory(){
		this.loadMoreData = true
		this.disabled = false
        }
    }
}
</script>
