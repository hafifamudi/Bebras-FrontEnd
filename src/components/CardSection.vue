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

         <div class="md:flex mt-3 -mx-6 p-5">
          <splide :options="options">
          <splide-slide :key="posts.image">

          <div
            class="card-project mx-6 my-4 p-5 w-50 border border-gray-500 rounded-20"
            v-for="post in posts"
            :key="post.id">
            <div class="item">
              <figure class="item-image">
                <img
                  :src="image+post.image"
                  alt="Post Photo"
                  class="rounded-20 w-full"
                />
              </figure>
              <div class="item-meta">
                <h4 class="text-3xl text-center font-medium text-gray-900 mt-5">
                  {{post.title}}
                </h4>
                <p class="text-md text-center font-light text-gray-900">
                  {{post.content}}
                </p>
              </div>
              <router-link
                :to="'/post/'+post.slug"
                class="text-center mt-5 md:button-cta block md:w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"
              >
                Detail
              </router-link>
            </div>
          </div>

        </splide-slide>
        </splide>   
        </div>

      </section>
</template>

<style scoped>
	img {
   height: 300px;
   width: 550px;
 }
</style>


<script>
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    name:'CardSection',
    components: {
    Splide,
    SplideSlide,
    },
    options: {
			rewind : true,
			width  : 800,
			perPage: 3,
			gap    : '1rem',
		},
    data() {
      return {
        posts: [],
        image: axios.defaults.baseURL + 'images/',
        loading: true,
    }
  },
    mounted(){
      this.getAllPosts()
    },
    methods: {
      async getAllPosts() {
        await axios
        .get('/api/post/')
        .then(res => {
          const {data} = res.data.data
          this.posts = data
          this.loading = false
        })
        .catch(err => console.log(err))
    },
  }
} 
</script>