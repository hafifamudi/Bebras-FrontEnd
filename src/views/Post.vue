<template>
   <div>
        <section class="container project-container mx-auto mt-10">
            <div class="image rounded-20 border border-gray-500">
            <div  v-if="loading" class="loading my-20">
                <img src="/loading.svg" class="mx-auto" alt="">
            </div>
                <img class="rounded-20" src="https://source.unsplash.com/random" alt="">
                    <div class="content-post">
                        <h2><strong>{{post.title}}</strong></h2>
                        <h3>{{post.content}}</h3>
                    </div>   
                    <router-link
                    to="/"
                    class="back-button text-center bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 md:text-lg rounded-full"
                    >
                    Kembali
                    </router-link>    
            </div>
      </section>   
   </div>
</template>

<style scoped>
    .loading {
        position: relative;
        z-index: 9999;
    }
    img {
        height: 100%;
        width: 40%;
    }
    .image {
        height: 50%;
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .project-container {
        display: flex;
        align-content: center;
        justify-content: center;
        position: relative;
        margin-bottom: 10px;
    }
    
    .back-button {
        margin: auto 10px 10px auto;
    }
    .content-post {
        margin-left: 10px;
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;
    }

    /* Responsive Design */
    @media only screen and (max-width: 670px) {

    .image {
        flex-direction: column;
        position: relative;
        height: 100%;
        width: 350px;
    }

    img {
        height: 200px;
        width: 350px;
        margin: 0 0 10px 0;
    }

    .content-post {
       position: relative;
       align-items: center;
       margin-top: 50px;
       width: 300px;
       font-size: 10px;
    }
    
    .back-button {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    }
</style>
<script>
import axios from 'axios'
export default {
    name:'Post',
    data() {
        return {
            post: [],
            image: axios.defaults.baseURL + 'images/',
            loading: true
        }
    },
    mounted(){
        this.getPost()
    },
    methods: {
        async getPost(){
            const postSlug = this.$route.params.post_slug
            await axios
                .get(`/api/post/${postSlug}`)
                .then(res => {
                const {data} = res.data
                this.post = data
                this.loading = false
                })
                .catch(err => console.log(err))
        }
    }
}
</script>
