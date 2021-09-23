<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Lista de Opiniones</h1>
    <div v-if="countOpinions == 0" class="alert alert-danger" role="alert">
      No existen opiniones por mostrar.
    </div>

    <div v-else>
      <div v-for="(opinion, i) in opinions" :key="i">
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  :data-target="`#collapseId${i}`"
                  aria-expanded="true"
                  :aria-controls="`collapseId${i}`"
                >
                  Opinion creada por: {{ opinion.autor }}. Para el juego:
                  {{ opinion.name }}
                </button>
              </h2>
            </div>

            <div
              :id="`collapseId${i}`"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <strong>Opinión: </strong>{{ opinion.opinion }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "opiniones",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(["countOpinions"]),
    ...mapState(["opinions"]),
  },
  methods: {},
  // watch: {},
  // components: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>
