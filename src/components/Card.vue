<template>
  <div>
    <div class="card-deck mb-4">
      <div class="card" style="width: 18rem">
        <img :src="backgroundImage" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text">Rating: {{ rating }}</p>
          <p class="card-text">Released: {{ released }}</p>
          <p class="card-text">Updated: {{ updated }}</p>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            :data-target="`#modalJuego${id}`"
            data-whatever="@mdo"
          >
            Opinión
          </button>
        </div>
      </div>
    </div>
    <Modal :id="id" :name="name"></Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "card",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },
    released: {
      type: String,
      required: true,
    },
    updated: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {};
  },
  //computed: {},
  methods: {
    //methods
  },
  components: {
    Modal,
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 576px) {
  img {
    width: auto;
    height: 260px;
  }
}

@media (min-width: 992px) {
  img {
    width: auto;
    height: 200px;
  }
}
</style>