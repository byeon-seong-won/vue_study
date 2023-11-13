import { createStore } from 'vuex'
import {post} from './assets/Instapost'


const store = createStore({
  state(){
    return {
      name : 'Byeon',
      age : 20,
      like : [1,2,3],
      likeClick : false,
      post : post 
    }
  },
  mutations : {
    likeToggle(state,idx) {
      if(state.likeClick == false) {
        state.like[idx]++;
        state.likeClick = true
      } else if(state.likeClick == true) {
        state.like[idx]--;
        state.likeClick = false
      }
    }
  }
})

export default store