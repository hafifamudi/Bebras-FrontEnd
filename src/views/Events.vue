<template>
    
    <dv v-if="loading">
        <loading/>
    </dv>
    
    <div class="container my-12 mx-auto px-4 md:grid md:gap-4 md:px-12 absolute my-30 lg:mx-10">
	<div v-if="!isData">
		<h1 class="text-center bg-orange-button shadow-lg rounded-20 my-20">Data Tidak Tersedia</h1>
	</div>

        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
            <div class="card-post -mx-1 lg:-mx-4 my-10" v-for="event in events" :key="event.id">
        <!-- Column -->
        <div class="my-1 px-1 w-full md:w-full lg:my-4 lg:px-4 lg:w-full">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img alt="image" class="block h-auto w-full" src="https://source.unsplash.com/random/250x250">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-white">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                           {{ event.title }}
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        {{ event.date }}
                    </p>
                </header>

                <footer class="flex md:flex-col items-center justify-between leading-none p-2 md:p-4 bg-white">
                    <a class="flex items-center no-underline hover:underline text-black" href="#"> 
                        <img alt="image" class="block rounded-full" src="https://source.unsplash.com/random/250x250" style="width: 32px; height: 32px;">
                        <p class="ml-2 text-sm">
                            {{ event.content }}
                        </p>
                    </a>
                    <router-link 
                    :to="'/event/'+event.slug"
                    class="bg-purple-hover p-3 md:my-7 no-underline text-grey-darker hover:bg-green-button rounded-full" href="#">
                        Selengkapnya
                    </router-link>
                </footer>

            </article>
            <!-- END Article -->
        </div>
        <!-- END Column -->
    
    
    
    
    
    
    
    
    
    
    
    
    
            </div>
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
   .card-post {
       margin-top: 70px !important;
   }

    button:disabled {
        cursor: not-allowed;
        background: #ccc;
    }
</style>

<script>
import axios from 'axios'
import Loading from '../components/Loading.vue'

export default {
    components:{
        Loading,
    },
    name:'Events',
    data() {
      return {
        events: [],
        categorys:[],
        currentEvent:[],
        loading: true,
        nextPage: 1,
        disabled: false,
        isData: true,
    }
  },
    mounted() {
        this.getAllEvents()
        this.getAllCategory()
    },
    methods: {
      async getAllEvents() {
        await axios
        .get(process.env.VUE_APP_API_ENDPOINT + 'api/event')
        .then(res => {
          const {data} = res.data.data
          const counter = data.length >= 3 ? 3 : data.length
          
          if (counter != 0){
           for (let index = 0; index < counter; index++) {
                this.currentEvent.push(data[index].id)
                this.events.push(data[index]);           
            }
          
          }else {
            this.isData = false
          }

          this.loading = false
        })
        .catch(err => console.log(err))
    },
    
        async getAllCategory() {
        await axios
        .get(process.env.VUE_APP_API_ENDPOINT + 'api/category/')
        .then(res => {
          const {data} = res.data.data
          this.categorys = data

        })
        .catch(err => console.log(err))
    },

        async loadMore() {
            let uri = process.env.VUE_APP_API_ENDPOINT + `api/event?page=`+ this.nextPage;

            
            await axios
                .get(uri)
                .then(res => {
                const {data} = res.data
                const {data: getData} = res.data.data
                
              
                if (data.length < 4){ 
                    this.loadMoreData = false
                    this.disabled = true
                    
                    return
                }

                if (data.current_page <= data.last_page){
                    this.nextPage = data.current_page + 1
                    this.disabled = false

                     for (let index = 0; index < getData.length; index++) {
			if (getData[index].id != this.currentEvent[index]){
				

                            this.events.push(getData[index])
                        }
                        
			if (this.events.length === getData.length) {
                            this.loadMoreData = false
                            this.disabled = true
                        }
                    }
                }else{
                    this.loadMoreData = false
                    this.disabled = true
                }

                this.loading = false
                })
                .catch(err => console.log(err))
        },
  }
}

</script>
