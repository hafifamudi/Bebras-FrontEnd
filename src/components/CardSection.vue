<template>
    <section class="container mx-auto pt-24 pb-20">
        <div class="flex-wrap content-center animate__animated animate__fadeInDown animate__delay-2s">
          <div class="text-center">
            <h2 class="text-3xl text-gray-900 mb-8">
              Kegiatan Program Pembelajaran<br />
              Bebras Indonesia
            </h2>
          </div>
        </div>
        <div v-if="loading">
          <img src="/loading.svg" class="mx-auto" alt="">
        </div>


        <div class="container my-12 mx-auto px-4 md:grid md:gap-4 md:grid-cols-3 md:px-12 my-30">

        <div class="card-post flex flex-wrap -mx-1 lg:-mx-4 my-10" 
        v-for="post in posts" 
        :key="post.id">

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
    </section>
    <div class="md:flex md:justify-center">
      <router-link
            to='/posts'
            class="mb-3 block mx-auto text-center w-full md:w-1/3 content-center md:mx-1 bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 md:text-1xl rounded-full"
            :disabled="disabled"
            >
            Lihat semua Post
        </router-link>
    </div>
  
</template>

<style scoped>
    .card-image {
      height: 804px;
      width: 800px;
    } 
</style>

<script>
import axios from 'axios'

export default {
    name:'CardSection',
    data() {
      return {
        posts: [],
        image:  process.env.VUE_APP_API_ENDPOINT + 'images/',
        loading: true,
        PostTime: [],
    }
  },
    mounted(){
      this.getAllPosts()
    },
    methods: {
      async getAllPosts() {
        let uri = process.env.VUE_APP_API_ENDPOINT  + 'api/post'

        await axios
        .get(uri)
        .then(res => {
          const {data} = res.data.data
          const counter = data.length >= 3 ? 3 : data.length

          for (let index = 0; index < counter; index++) {
            if (data[index].created_at != null){
                data[index].created_at = data[index].created_at.split('-').join(' ')
                data[index].created_at = data[index].created_at.split('').splice(0,10).join('')
            }

            this.posts.push(data[index]);           
          }
          


          this.loading = false
        })
        .catch(err => console.log(err))
    },
}
} 
</script>
