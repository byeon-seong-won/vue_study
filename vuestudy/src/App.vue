<template>
  <div>
    <div class="black-bg" v-if="modalOpen == true">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지내용임</p>
        <button @click="modalOpen=false">닫기</button>
      </div>
    </div>
    <div class="menu">
      <a>Home</a>
      <a>Products</a>
      <a>About</a>
    </div>
    <div>
      <h4 @click="modalOpen=true">{{products[0]}}</h4>
      <p>50만원</p>
      <button @click="btnClick(0)">신고하기</button>
      <span>신고수 : {{신고횟수[0]}}</span>
      <img src="./assets/pic26.jpg" alt="img">
    </div>
    <div>
      <h4 @click="modalOpen=true">{{products[1]}}</h4>
      <p>50만원</p>
      <button @click="btnClick(1)">신고하기</button>
      <span>신고수 : {{신고횟수[1]}}</span>
      <img src="./assets/pic27.jpg" alt="img">
    </div>
    <div>
      <h4 @click="modalOpen=true">{{products[2]}}</h4>
      <p>50만원</p>
      <button @click="btnClick(2)">신고하기</button>
      <span>신고수 : {{신고횟수[2]}}</span>
      <img src="./assets/pic28.jpg" alt="img">
    </div>
    <List :post="post"></List>
  </div>
</template>




<script>
import posts from './Post'
import List from './components/List.vue'
export default {
  name : 'App',
  data() {
    return {
      가격 : 100,
      products : ['역삼동', '천호동','마포구'],
      신고횟수 : [0,0,0],
      style : 'color:blue',
      modalOpen : false,
      post : posts
    }
  },
  components : {
    List
  },
  methods : {
    btnClick(i) {
      this.신고횟수[i]++;
    }
  }
}
</script>



<style>
* {font-family: 'Noto sans KR', sans-serif; letter-spacing: -0.03rem;font-size: 20px;}
.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color : white;
  padding : 10px;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
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
img {width: 100%;}

</style>
