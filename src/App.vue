  <template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'component-name',
  // props: {},
  data: function(){
    return {}
  },
  // computed: {},
  methods: {
  },
  // watch: {},
  components: {
    Navbar
  },
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  
</style>