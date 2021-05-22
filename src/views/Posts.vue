<template>
    <nav-search
        :searchKeyword="categorys"
    />
    
    <div v-if="loading">
        <loading/>
    </div>
    
    <div class="container my-12 mx-auto px-4 md:px-12 absolute my-30">

        <div class="card-post flex flex-wrap -mx-1 lg:-mx-4 my-10" v-for="post in posts" :key="post.id">

        <!-- Column -->
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" :src="image+post.image">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-white">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                           {{ post.title }}
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        {{ PostTime }}
                    </p>
                </header>

                <footer class="flex md:flex-col items-center justify-between leading-none p-2 md:p-4 bg-white">
                    <a class="flex items-center no-underline hover:underline text-black" href="#"> 
                        <img alt="Placeholder" class="block rounded-full" :src="image+post.image" style="width: 32px; height: 32px;">
                        <p class="ml-2 text-sm">
                            {{ post.content }}
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
</template>


<style scoped>
   .card-post {
       margin-top: 70px !important;
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
        PostTime: '',
        loading: true,
        image: axios.defaults.baseURL + 'images/',
    }
  },
    mounted(){
      this.getAllEvents()
      this.getAllPostCategory()
    },
    methods: {
      async getAllEvents() {
        await axios
        .get('/api/post/')
        .then(res => {
          const {data} = res.data.data
          this.posts = data
          this.PostTime = data[0].created_at
          
          this.getDate()
          this.loading = false
        })
        .catch(err => console.log(err))
    },

        async getAllPostCategory() {
        await axios
        .get('/api/category/')
        .then(res => {
          const {data} = res.data.data
          this.categorys = data
          console.log(data);
        })
        .catch(err => console.log(err))
    },

        async getDate() {
            let time = this.PostTime
            time = time.split('-').join(' ')
            time = time.split('').splice(0,10).join('')
            
            this.PostTime = time
        }
  }
}

</script>