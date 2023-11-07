



<template>
    <div>
        <h4 @click="$emit('modalClick', 해당원룸.id)">{{해당원룸.title}}</h4>
        <p>{{해당원룸.content}}만원</p>
        <p>{{해당원룸.price}}만원</p>
        <img :src="해당원룸.image" alt="img">
        <!-- <button @click="$emit=('btnClick')">허위매물신고</button>
        <span>신고수 : {{신고수}}</span> -->
    </div>
</template>

<script>
export default {
  name : 'Card',
  props : {
    해당원룸 : Object,
    신고수 : Number
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