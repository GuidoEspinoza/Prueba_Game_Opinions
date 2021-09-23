<template>
  <div class="container mt-5">
    <h1>Editando la opinión de: {{name}}</h1>
    <form>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Nombre:</label>
        <input
          v-model="autor"
          type="text"
          class="form-control"
          id="recipient-name"
        />
      </div>
      <div class="form-group">
        <label for="message-text" class="col-form-label">Opiniones:</label>
        <textarea
          v-model="opinion"
          class="form-control"
          id="message-text"
        ></textarea>
      </div>
      <button class="btn btn-primary mr-2" @click="return_admin">Regresar</button>
      <button class="btn btn-danger"  @click.prevent="save_opinion">Guardar</button>
    </form>
  </div>
</template>



<script>
import { mapGetters, mapActions} from "vuex";

export default {
  name: "component-name",
  props: ["index"],
  data: function () {
    return {
      autor: "",
      opinion: "",
      name: "",
      id: ""
    };
  },
  computed: {
    ...mapGetters(["getOpinion"]),
  },
  methods: {
    return_admin(){
      this.$router.push('/administracion')
    },
    set_form(opinion){
      this.autor = opinion.autor;
      this.opinion = opinion.opinion;
      this.name = opinion.name;
      this.id = opinion.id;
    }, 
    save_opinion(){
      let edit_opinion = {
        opinion: this.opinion,
        autor: this.autor, 
        name: this.name,  
        index: this.index, 
        idGame: this.id
      }
      this.edit_opinion(edit_opinion)
      this.return_admin()
    },
    ...mapActions(["edit_opinion"])
  },
  //components : {},
  created() {
    let opinion = this.getOpinion(this.index);
    console.log(opinion);
    this.set_form(opinion)
  },
};
</script>



<style lang="scss" scoped>
</style>>