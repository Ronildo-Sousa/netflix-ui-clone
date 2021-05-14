<template>
  <div
  v-if="items"
   class="mb-7" 
   @mouseenter="listHover = true" @mouseleave="listHover = false">
    <h2 class="ml-7 text-lg lg:text-2xl font-bold">{{ title }}</h2>
    <div 
    @click="handleLeftArrow"
    class="absolute w-10 left-0 flex justify-center items-center z-40 bg-gray-900  cursor-pointer transition-all ease-in-out opacity-80 lg:opacity-0" style="height: 235px"
    :class="[listHover ? 'lg:opacity-80' : '']">
       <i class="fas fa-arrow-circle-left fa-lg lg:fa-2x"></i>
    </div>

    <div 
    @click="handleRightArrow"
    class="absolute w-10 right-0 flex justify-center items-center z-40 bg-gray-900 cursor-pointer opacity-80 lg:opacity-0" style="height: 235px"
    :class="[listHover ? 'lg:opacity-80' : '']">
      <i class="fas fa-arrow-circle-right fa-lg lg:fa-2x"></i>
    </div>

    <div class="overflow-x-hidden pl-7">
      <div 
      class="transition-all duration-75 ease-in-out"
        :style="{
          marginLeft: scrollX + 'px',
          width: sizeList + 'px'
        }"
      >
        <div v-for="item in items.data.results" :key="item" class="inline-block w-40">
          <img
            :src="`https://image.tmdb.org/t/p/w300${item.poster_path}`"
            class="w-full transform scale-90 hover:scale-100 cursor-pointer transition-all duration-75 ease-in-out"
            alt="movie"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: { items: Object, title: String },
  data() {
    return {
      listHover: false,
      scrollX: 0,
      sizeList: this.items.data.results.length * 200
    }
  },
  methods: {
    handleLeftArrow(){
      let x = this.scrollX + Math.round(window.innerWidth / 2);
      if (x > 0) {
        x = 0;
      }
      this.scrollX = x;
    },
    handleRightArrow(){
      let x = this.scrollX - Math.round(window.innerWidth / 2);
      let listW = this.items.data.results.length * 160;

      if ((window.innerWidth - listW) > x) {
        x = ((window.innerWidth - listW) - 60);
      }

      this.scrollX = x;
    }
  },
};
</script>

<style>
</style>