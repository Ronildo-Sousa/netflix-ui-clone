<template>
  <header
    class="fixed z-50 top-0 left-0 right-0 h-5 max-h-5 flex justify-between items-center pl-7 pb-10 pt-4 transition-all"
    :class="[black ? 'bg-gray-800' : 'bg-transparent']"
  >
   
      <div class="h-7 mt-7">
        <a href="/">
          <img
            class="h-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1920px-Netflix_2014_logo.svg.png"
            alt="logo"
          />
        </a>
      </div>
      <div class="lg:hidden w-1/4 flex justify-center mt-5">
        <i class="fas fa-bars fa-lg hover:text-gray-300 cursor-pointer"></i>
      </div>
      <div class="hidden lg:w-full lg:flex justify-between items-end mt-7">
        <ul class="hidden lg:w-1/2 lg:flex pl-7">
          <li class="mr-5 cursor-pointer">Inicio</li>
          <li class="mr-5 cursor-pointer">Séries</li>
          <li class="mr-5 cursor-pointer">Filmes</li>
          <li class="mr-5 cursor-pointer">Mais Recentes</li>
          <li class="mr-5 cursor-pointer">Minha lista</li>
        </ul>

        <div class="hidden lg:flex justify-around items-center w-1/5 pr-3 cursor-pointer">
          <i class="fas fa-search"></i>
          <span>INFANTIL</span>
          <i class="fas fa-gift"></i>
          <i class="fas fa-bell"></i>
          <div class="w-14">
            <img
              src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUb8y4ccuEVy561Cyng-U7DYPnvBSEtASh7jutgnPDpIpjLmnSW3ke7syU6UCS9XFi9WbJ3PDfMRN3qwuzCP6iTlMTnB.jpg?r=72c"
              alt="user"
            />
          </div>
        </div>
      </div>
  
  </header>
</template>

<script>
export default {
  name: "Navbar",
  props: { black: Boolean },
  mounted() {},
};
</script>

<style>
</style>