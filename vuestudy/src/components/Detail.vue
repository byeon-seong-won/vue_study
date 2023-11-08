



<template>
    <div>
      <!-- {{$route.params.id}} -->
      <h4>상세페이지</h4>
      <h5>{{posts[$route.params.id].title}}</h5>
      <p>{{posts[$route.params.id].content}}</p>
      <router-view></router-view>
      <!-- router.js에 detail의 Children을 보여줌 -->
    </div>
</template>



<script>
export default {
  name : 'Detail',
  props : {
    posts : Array
  },
  data() {
    return {
      
    }
  },
  methods : {
    
  },
  
}


</script>

<style>

</style>