<template>
    <div class="black-bg">
        <div class="white-bg">
          <h4>{{ post.title }}</h4>
          <p>{{ post.content }}</p>
          <p>{{ post.price }} 원</p>
          <button>닫기</button>
        </div>
    </div>
</template>



<script>
export default {
  name : 'Modal',
  props : {
    post : Object
    
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