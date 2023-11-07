



<template>
    <div class="black-bg">
      <div class="white-bg">
        <h4>{{해당원룸.title}}</h4>
        <p>{{해당원룸.content}}만원</p>
        <p>{{해당원룸.price}}만원</p>
        <img :src="해당원룸.image" alt="img">
        <button @click="$emit('modalClose')">닫기</button>
        <input v-model="month">
        <button @click="priceCount()">입력하기</button>
        <p>최종가격 : {{ totalPrice }}</p>
      </div>
    </div>
</template>



<script>
export default {
  name : 'Modal',
  props : {
    해당원룸 : Object,
  },
  data() {
    return {
      month : 1,
      totalPrice : ''
    }
  },
  methods : {
    priceCount() {
      this.totalPrice = this.month * 10
    }
  },
  watch : {
    month(a) {
      if(isNaN(a) == true) {
        alert('숫자만 입력 플리즈');
        this.month = 1;
      }
    }
  }
}


</script>

<style>
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