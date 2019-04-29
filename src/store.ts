import Vue from 'vue';
import Vuex from 'vuex';
import resource from '@/handlers/resource';

import { Album, Entry } from './models/album';

Vue.use(Vuex);

interface State {
  current: Entry;
  albums: Album[];
}

export default new Vuex.Store({
  state: {
    current: undefined,
    albums: [],
  },

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
    getCurrentAlbum: (state: State) => state.current,
    getAlbums: (state: State) => state.albums,
  },
});
