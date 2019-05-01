import Vue from 'vue';
import Vuex from 'vuex';
import resource from '@/handlers/resource';

import { Store } from './models/store';
import { Response, Entry } from './models/album';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new Store(),
  mutations: {
    LOAD_ALBUMS: (state, payload: Response) => {
      return state.albums = state.search = payload.entry;
    },

    SET_CURRENT_ALBUM: (state, album: Entry) => {
      return state.current = album;
    },

    FILTER_ALBUMS: (state, search: string) => {
      return state.search = state.albums.filter(
        (album: Entry) => album.title.label.toUpperCase().indexOf(search.toUpperCase()) >= 0,
      );
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

    setCurrentAlbum: ({ commit }, info: Entry) => {
      commit('SET_CURRENT_ALBUM', info);
    },

    filterAlbums: ({ commit }, search: string) => {
      commit('FILTER_ALBUMS', search);
    },
  },

  getters: {
    getCurrentAlbum: (state: Store) => state.current,
    getAlbums: (state: Store) => state.search,
    getAlbumsTitle: (state: Store) => state.albums.map((album) => album.title.label),
  },
});
