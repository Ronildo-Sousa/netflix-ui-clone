<template>
  <div>
    <Navbar :black="blackHeader" />
    <Banner :feturedList="Originals"  />

    <div class="-mt-32">
      <List :items="Originals" :title="'Originais da Netflix'" />
      <List :items="Trending" :title="'Em Alta'" />
      <List :items="Action" :title="'Ação'" />
      <List :items="Horror" :title="'Terror'" />
    </div>

    <footer class="text-center mt-3 mb-3 bg-gray-900">
      Todos os dados são do site <a href="https://developers.themoviedb.org" class="font-bold hover:bg-blue-700">TMDB ❤ </a>
    </footer>

    <div
    v-show="Originals === null" 
    class="fixed left-0 right-0 top-0 bottom-0 z-30 flex justify-center items-center" style="background: #000">
      <img src="https://media1.tenor.com/images/f6b11bd53411d94338117381cf9a9b9b/tenor.gif?itemid=18131525" alt="carregando...">
    </div>
  </div>
</template>

<script>
import List from "./components/List.vue";
import tmdbList from "./services/tmdb";
import Banner from "./components/Banner.vue";
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
  data() {
    return {
      Originals: null,
      Trending: null,
      Action: null,
      Horror: null,
      Romance: null,
      Documentary: null,
      blackHeader: false
    };
  },
  components: {List, Banner, Navbar },

  methods: {
    scrollListener(){
      ((window.scrollY > 10) ? this.blackHeader = true : this.blackHeader = false);
    }
  },

  beforeMount() {
    tmdbList.getOriginals().then((response) => {
      this.Originals = response;
    }),
      tmdbList.getTrending().then((response) => {
        this.Trending = response;
      }),
      tmdbList.getAction().then((response) => {
        this.Action = response;
      }),
      tmdbList.getHorror().then((response) => {
        this.Horror = response;
      }),
      tmdbList.getRomance().then((response) => {
        this.Romance = response;
      })
  },
  
  created() {
    window.addEventListener('scroll', this.scrollListener)
  }
};
</script>

<style>
</style>
