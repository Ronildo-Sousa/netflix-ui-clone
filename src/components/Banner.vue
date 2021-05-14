<template>
  <div
    v-if="fetured !== null"
    class="h-1/5 lg:h-screen bg-center bg-cover mb-6"
    :style="{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${fetured.backdrop_path})`,
    }"
  >
    <div class="w-full h-full bg-gradient-to-t from-black  to-transparent">
      <div class="w-full h-full flex flex-col justify-center pl-7 pb-32 pt-20 bg-gradient-to-r from-black  to-transparent">
        <div class="text-3xl lg:text-6xl font-bold">{{ fetured.original_name }}</div>

        <div class="text-lg font-bold mt-2 lg:mt-7">
          <div class="inline-block text-green-500 mr-4">{{ fetured.vote_average }} pontos</div>
          <div class="inline-block mr-4">{{ getFullYear(fetured.first_air_date) }}</div>
          <div class="inline-block mr-4">{{ fetured.number_of_seasons}} temporada{{ fetured.number_of_seasons > 1 ? 's' : ''}}</div>
          <div class="lg:w-2/5 mt-4 text-lg 
          font-normal lg:text-xl text-gray-300">{{ smallDescription(fetured.overview) }}</div>
          <div class="mt-4 flex">
            <a class="inline-block bg-gray-50 text-gray-900 sm:text-sm lg:text-lg font-bold rounded mr-3 p-2 hover:bg-gray-100" :href="`/watch/${fetured.id}`">
            <i class="fas fa-play"></i>
            Assistir
            </a>
            <a class="inline-block bg-gray-600 text-white sm:text-sm lg:text-lg font-bold rounded mr-3 p-2 hover:bg-gray-700" :href="`/list/add/${fetured.id}`">
             <i class="fas fa-plus"></i>
             Minha Lista
            </a>
          </div>
          <div class="mt-4 text-sm text-gray-300">
            <strong>Gêneros:</strong>
            {{ getGenres(fetured).join(', ') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tmdb from "../services/tmdb";

export default {
  name: "Banner",
  props: { feturedList: Object },
  components: {},
  data() {
    return {
      fetured: null,
    };
  },
  methods: {
    getFetured() {
      let random = Math.floor(
        Math.random() * (this.feturedList.data.results.length - 1)
      );
      let chosen = this.feturedList.data.results[random];

      tmdb.getInfo(chosen.id, "tv").then((response) => {
        this.fetured = response.data;
      });
    },
    getFullYear(date){
      let firstDate = new Date(date);

      return firstDate.getFullYear();
    },
    getGenres(item){
      let genres = [];
      for(let i in item.genres){
        genres.push(item.genres[i].name);
      }
      return genres;
    },
    smallDescription(description){
      if (description.length > 200) {
        description = description.substring(0,200) + '...';
      }
      return description;
    }
  },
  beforeMount() {
    this.getFetured();
  },
};
</script>

<style>
</style>