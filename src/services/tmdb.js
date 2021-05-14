import { http } from "./config"
const API_KEY = process.env.VUE_APP_TMD_API_KEY

export default {
    getOriginals: () => {
      return http.get(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)  
    },
    getTrending: () => {
        return http.get(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
    },
    getTopRated: () => {
        return http.get(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
    },
    getAction: () => {
        return http.get(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
    },
    getComedy: () => {
        return http.get(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
    },
    getHorror: () => {
        return http.get(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
    },
    getRomance: () => {
        return http.get(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
    },
    getInfo: (id, type) => {
        return http.get(`/${type}/${id}?language=pt-BR&api_key=${API_KEY}`)
    }
}

