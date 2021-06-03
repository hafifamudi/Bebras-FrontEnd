<template>
    <nav-search
        :searchKeyword="categorys"
        @search="getAllPosts"
    />
    
    <div v-if="loading">
        <loading/>
    </div>
    
    <div class="container md:mx-10 my-12 mx-auto px-4 md:px-12 absolute my-30">
	<div v-if="!isData">
		<h1 class="text-center bg-orange-button shadow-lg rounded-20 my-20">Data Tidak Tersedia</h1>
	</div>
        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-4">
            <div class="card-post flex flex-wrap -mx-1 lg:-mx-4 my-10" v-for="post in posts" :key="post.id">

                    <!-- Column -->
                    <div class="my-1 px-1 w-full md:w-full lg:my-4 lg:px-4 lg:w-full">

                        <!-- Article -->
                        <article class="overflow-hidden rounded-lg shadow-lg">
                            <a href="#">
                                <img alt="Placeholder" class="block h-auto w-full" src="https://source.unsplash.com/random">
                            </a>

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-white">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black" href="#">
                                    {{ post.title }}
                                    </a>
                                </h1>
                                <p class="text-grey-darker text-sm">
                                    {{ post.created_at }}
                                </p>
                            </header>

                            <footer class="flex md:flex-col items-center justify-between leading-none p-2 md:p-4 bg-white">
                                <a class="flex items-center no-underline hover:underline text-black" href="#"> 
                                    <img alt="Placeholder" class="block rounded-full" src="https://source.unsplash.com/random" style="width: 32px; height: 32px;">
                                    <p class="ml-2 text-sm">
                                        <span v-html="post.content"></span>
                                    </p>
                                </a>
                                <router-link 
                                :to="'/post/'+post.slug"
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
import NavSearch from '../components/NavSearch.vue'
import Loading from '../components/Loading.vue'

export default {
    components:{
        NavSearch,
        Loading,
    },
    name:'Posts',
    data() {
      return {
        posts: [],
        categorys:[],
        currentPost:[],
        loading: true,
        image: process.env.VUE_APP_API_ENDPOINT  + 'images/',
        disabled: false,
        isData: true,
    }
  },
    mounted(){
      this.getAllPosts()
      this.getAllCategory()
    },
    methods: {
      async getAllPosts(value) {
        let uri = process.env.VUE_APP_API_ENDPOINT  + 'api/post'

        if (value) {
            uri = process.env.VUE_APP_API_ENDPOINT  + `api/category/${value}`
        }
        
        this.posts = []
        this.loading = true
        
        await axios
        .get(uri)
        .then(res => {
          const {data} = res.data.data
          const counter = data.length >= 3 ? 3 : data.length
          
          if (counter != 0){
          for (let index = 0; index < counter; index++) {
            if (data[index].created_at != null){
                data[index].created_at = data[index].created_at.split('-').join(' ')
                data[index].created_at = data[index].created_at.split('').splice(0,10).join('')
            }
            this.currentPost.push(data[index].id)
            this.posts.push(data[index]);      
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
        .get(process.env.VUE_APP_API_ENDPOINT  + 'api/category')
        .then(res => {
          const {data} = res.data.data
          this.categorys = data
        })
        .catch(err => console.log(err))
    },
  
        async loadMore() {
            let uri = process.env.VUE_APP_API_ENDPOINT + `api/post?page=`+ this.nextPage;

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
			if (getData[index].id != this.currentPost[index]){
				
			if (getData[index].created_at != null){
                             getData[index].created_at = getData[index].created_at.split('-').join(' ')
                             getData[index].created_at = getData[index].created_at.split('').splice(0,10).join('')
			}
			
			if (this.posts.length === getData.length) {
                            this.loadMoreData = false
                            this.disabled = true
                        }
                            
                            this.posts.push(getData[index])
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
