


<template>
  <button @click="priceSort">가격순 정렬</button>
  <button @click="priceBack">되돌리기</button>
  <Modal :해당원룸="원룸들[모달누른거]" v-if="isModalopen == true" @modalClose="isModalopen=false"></Modal>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{menu}}</a>
  </div>
  <Card v-for="(a,i) in 원룸들" :key="i" :해당원룸="원룸들[i]" :신고수="신고수[i]" @modalClick="isModalopen=true; 모달누른거=$event"></Card>
</template>




<script>
import data from './data'
// import Discount from './components/Discount.vue'
import Card from './components/Card.vue'
import Modal from './components/Modal.vue'
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
    priceSort() {
      this.원룸들.sort(function(a,b) {
        return a.price - b.price;
      })
    },
    priceBack() {
      this.원룸들.sort(function(a,b) {
        return a.price - b.price;
      })
    }
  },
  components : {
    Modal,
    Card
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
