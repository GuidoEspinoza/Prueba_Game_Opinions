<template>
<div>
  <h1 class="text-center mt-5 mb-4">Lista de Juegos Disponibles</h1>
  <listCard/>
  </div>
</template>


<script>
import listCard from '@/components/List-card.vue'
import {mapActions} from 'vuex'

export default {
  name: "home-component",
  //props: {},
  data: function () {
    return {};
  },
  //computed: {},
  methods: {
    ...mapActions (['fetchGames'])
  },
  created(){
      this.fetchGames()
  },
  components : {
      listCard
  },
};
</script>



<style lang="scss" scoped>
</style>>