



<template>
    <div class="black-bg">
      <div class="white-bg">
        <h4>{{해당원룸.title}}</h4>
        <p>{{해당원룸.content}}만원</p>
        <p>{{해당원룸.price}}만원</p>
        <img :src="해당원룸.image" alt="img">
        <button @click="$emit('modalClose')">닫기</button>
        <input type="text" placeholder="내용을 입력하세요">
      </div>
    </div>
</template>



<script>
export default {
  name : 'Modal',
  props : {
    해당원룸 : Object,
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