<template>
    <nav class="bg-yellow-card z-10 w-50 text-white absolute flex mx-auto border border-grey-500 rounded-full">
      <ul class="px-4">
      <li><a class="block py-2 md:text-3xl">Search By Category <i class="fas fa-filter"></i></a></li>
      </ul>
    </nav>
    <div class="absolute flex card-post mt-10 z-40">
        <ul class="px-4">
            <li><button @click="showNav" class="block py-2 hasSubMenu">All Category <span class="inline-block"><svg data-baseweb="icon" viewBox="0 0 24 24" class="ml-1 w-4 h-4 fill-current chevron"><title>Chevron Down</title><path transform="rotate(270, 12, 12)" fill-rule="evenodd" clip-rule="evenodd" d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"></path></svg> </span> </button>
              <ul class="bg-yellow-card text-sm subMenu rounded-20 ml-5" :class="{'hidden': !show}">
                <div v-if="searchKeyword">
                  <li v-for="search in searchKeyword" :key="search.id">
                    <button class="block py-2 ml-3" @click="getCategory(search.name)">{{ search.name }}</button>
                  </li>
                </div>
                <div v-if="searchKeywordSecond">
                  <li v-for="search in searchKeywordSecond" :key="search">
                    <button class="block py-2 ml-3" @click="getCategory(search)">{{ search }}</button>
                  </li>
                </div>
              </ul>
            </li>
        </ul>
    </div>

</template>

<style scoped>
  img {
   height: 300px;
   width: 500px;
}

  nav {
    margin: 10px 0 0 40px !important;
}

    .card-post{
       margin: 15px 0 0 400px !important;
    }

  @media only screen and (max-width: 670px) {
    nav {
        margin-top: 40px !important;
    }

    .card-post{
       margin: 40px 0 0 250px !important;
    }
}

</style>
<script>
export default {
  name:'NavSearch',
  props:{
    searchKeyword: [],
    searchKeywordSecond:[],
  },
  data(){
    return {
      show: false
    }
  },

  methods: {
    showNav(){
      this.show = !this.show
    },
    getCategory(value){
      this.$emit('search', value.toLowerCase())
    },

  }
  
}
</script>