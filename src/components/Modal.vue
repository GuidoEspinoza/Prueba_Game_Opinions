<template>
    <div
      class="modal fade"
      :id="`modalJuego${id}`"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Escribe tu opinion sobre el juego: {{name}}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label"
                  >Nombre:</label
                >
                <input v-model="autor" type="text" class="form-control" id="recipient-name" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label"
                  >Opiniones:</label
                >
                <textarea v-model="opinion" class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              id="cerrar"
            >
              Cerrar
            </button>
            <button type="button" 
            data-dismiss="modal" 
            class="btn btn-primary" 
            @click="saveOpinion"
            >Guardar</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
  name: "modal",
  props: {
       name:{
           type: String,
           required: true
       },
       id:{
           type: Number,
           required: true
       }
  },
  data: function () {
    return {
        autor:"",
        opinion:""
    };
  },
  // computed: {},
  methods: {
    ...mapActions(['add_opinion']),
    saveOpinion(){
        let newOpinion = {
            idGame: this.id,
            autor: this.autor,
            opinion: this.opinion,
            name: this.name
        }
        this.add_opinion(newOpinion)
        this.clearForm()
    },
    clearForm(){
        this.autor=""
        this.opinion=""
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