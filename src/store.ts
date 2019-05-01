import Vue from 'vue';
import Vuex from 'vuex';
import resource from '@/handlers/resource';

import { Store } from './models/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new Store(),
  mutations: {
    LOAD_ALBUMS: (state, payload) => {
      return state.albums = payload.entry;
    },

    SET_CURRENT_ALBUM: (state, album) => {
      return state.current = album;
    },
  },

  actions: {
    loadAlbums: ({ commit }) => {
      return new Promise((resolve, reject) => {
        resource.fetchData()
          .then(
            (response) => {
              commit('LOAD_ALBUMS', response);
              resolve(response);
            },
            (error) => reject(error),
          );
      });
    },

    setCurrentAlbum: ({ commit }, info) => {
      commit('SET_CURRENT_ALBUM', info);
    },
  },

  getters: {
    getCurrentAlbum: (state: Store) => state.current,
    getAlbums: (state: Store) => state.albums,
  },
});
