<template> 
  <header-section/>
  <router-view/>
</template>


<script>

import HeaderSection from './components/HeaderSection.vue'
export default {
  components: { HeaderSection },
}
</script>