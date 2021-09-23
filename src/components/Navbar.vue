<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><i class="fas fa-headset fa-2x mr-2"></i>Game Opinion</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fas fa-home mr-2"></i><router-link to="/">Home</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fas fa-comments"></i><router-link to="/opiniones">Opiniones</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fas fa-users-cog"></i><router-link to="/administracion">Administración</router-link></a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    name: 'navbar',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
    },
    // watch: {},
    // components: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>