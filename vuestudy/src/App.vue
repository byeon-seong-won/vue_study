<template>
  <div class="black-bg" v-if="isModalopen == true" :modalIdx="modalIdx">
    <div class="white-bg">
      <h4>{{원룸들[modalIdx].title}}</h4>
      <p>{{원룸들[modalIdx].content}}만원</p>
      <p>{{원룸들[modalIdx].price}}만원</p>
      <img :src="원룸들[modalIdx].image" alt="img">
      <button @click="isModalopen=false">닫기</button>
    </div>
  </div>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{menu}}</a>
  </div>
  <div v-for="(a,i) in 원룸들" :key="i">
    <h4 @click="isModalopen=true; modalIdx=i">{{원룸들[i].title}}</h4>
    <p>{{원룸들[i].content}}만원</p>
    <p>{{원룸들[i].price}}만원</p>
    <img :src="원룸들[i].image" alt="img">
    <button @click="신고수[i]++">허위매물신고</button>
    <span>신고수 : {{신고수[i]}}</span>
  </div>
</template>




<script>
import data from './data'
export default {
  name : 'App',
  data(){
    return {
      price1 : 60,
      스타일 : 'color : red',
      products : ['역삼동원룸', '천호동원룸','마포구원룸'],
      menus : ['home','products','about'],
      신고수 : [0,0,0],
      isModalopen : false,
      원룸들 : data,
      modalIdx : ''
    }
  },
  methods : {
    
  }
}

</script>



<style>
* {font-family: 'Noto sans KR', sans-serif; letter-spacing: -0.03rem;font-size: 20px;}
body {margin : 0;}
div {box-sizing: border-box;}
.menu {
  background : beige;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color : #333;
  padding : 10px;
  font-weight: bold;
  border: 1px solid #333;
  text-transform: uppercase;
}
img {width: 50%;}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 

</style>
