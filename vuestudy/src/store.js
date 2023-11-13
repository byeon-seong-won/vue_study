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
    likeToggle(state) {
      if(state.likeClick == false) {
        state.like[0]++;
        state.likeClick = true
      } else if(state.likeClick == true) {
        state.like[0]--;
        state.likeClick = false
      }
    }
  }
})

export default store