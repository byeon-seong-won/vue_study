



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
  name : 'Detail',
  props : {
    
  },
  data() {
    return {
      
    }
  },
  methods : {
    p
  },
  
}


</script>

<style>

</style>