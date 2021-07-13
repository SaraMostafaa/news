import Vue from 'vue'
import Vuex from "vuex";
import newsModule from "./modules/news/index.js"


Vue.use(Vuex)

 const store = new Vuex.Store({

modules:{
    news: newsModule
}
});



export default store;