import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: [], 
    opinions: []
  },
  getters: {
    countOpinions: state => {
      return state.opinions.length
    },
    getOpinion: state => index => {
      return state.opinions[index]
    }
  },
  mutations: {
    FETCH_GAMES(state, games){
      state.games = games;
    },
    ADD_OPINION (state, opinion){
      state.opinions.push(opinion);
    },
    DELETE_OPINION (state, index){
      state.opinions.splice(index, 1);
    },
    EDIT_OPINION (state, edit_opinion){
      state.opinions[edit_opinion.index]={
        opinion: edit_opinion.opinion, 
        autor: edit_opinion.autor, 
        name: edit_opinion.name, 
        idGame: edit_opinion.idGame
      }
    }
  },
  actions: {
    fetchGames:({commit})=>{
      //commit('FETCH_GAMES', data);
      fetch('https://api.rawg.io/api/games?key=0c86da15f6154f87961521baec201a53')
      .then(res => res.json())
      .then(data => {
          console.log(data.results['0'])
          commit('FETCH_GAMES', data.results)
      })
    },
    add_opinion:({commit}, opinion)=>{
      commit('ADD_OPINION', opinion)
    },
    delete_opinion:({commit}, index)=>{
      commit('DELETE_OPINION', index)
    },
    edit_opinion: ({commit}, edit_opinion) => {
      commit('EDIT_OPINION', edit_opinion)
    }
  },
  modules: {
  }
})
