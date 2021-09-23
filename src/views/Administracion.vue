<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Administrando la Lista de Opiniones</h1>
    <div v-if="countOpinions == 0" class="alert alert-danger" role="alert">
      No existen opiniones por administrar.
    </div>

    <table v-else class="table mt-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Persona</th>
          <th scope="col">Juego</th>
          <th scope="col">Opinion</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(opinion, i) in opinions" :key="i">
          <th scope="row">{{i+1}}</th>
          <td>{{opinion.autor}}</td>
          <td>{{opinion.name}}</td>
          <td>{{opinion.opinion}}</td>
          <td>
            <button class="btn btn-danger mr-2" @click="delete_opinion(i)">Eliminar</button>
            <button class="btn btn-primary" @click="edit_opinion(i)">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  name: "component-name",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(['opinions']),
    ...mapGetters(["countOpinions"])
  },
  methods: {
    ...mapActions(['delete_opinion']),
    edit_opinion(i){
      this.$router.push(`/opinion/${i}`)
    }
  },
  // watch: {},
  // components: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>