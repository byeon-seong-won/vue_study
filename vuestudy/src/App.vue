<template>
  <div>
    <div class="menu">
      <a>Home</a>
      <a>Products</a>
      <a>About</a>
    </div>
    <div v-for="(a,i) in products" :key="i">
      <h4 @click="modalOpen=true; modalIdx=i">{{products[i]}}</h4>
      <Modal v-if="modalOpen == true" :post="post[i]" :modalClose="modalOpen = false"></Modal>
      <p>50만원</p>
      <button @click="btnClick(i)">신고하기</button>
      <span>신고수 : {{신고횟수[i]}}</span>
      <img src="./assets/pic26.jpg" alt="img">
    </div>
    <List :post="post"></List>
  </div>
</template>




<script>
import posts from './Post'
import List from './components/List.vue'
import Modal from './components/Modal.vue'
export default {
  name : 'App',
  data() {
    return {
      가격 : 100,
      products : ['역삼동', '천호동','마포구'],
      신고횟수 : [0,0,0],
      style : 'color:blue',
      modalOpen : false,
      post : posts,
      modalIdx : ''
    }
  },
  components : {
    List,
    Modal
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

img {width: 100%;}

</style>
