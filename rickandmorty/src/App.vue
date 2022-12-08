<template>
  <header>
    <RouterView class="route_view"/>
  </header>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {

    };
  },

  mounted() {
   
  },
}

</script>
