<template>
  <div>
    <div class="menu">
      <a>Home</a>
      <a>Products</a>
      <a>About</a>
    </div>
    <div>
      <h4>XX 원룸</h4>
      <p>XX 만원</p>
    </div>
    <div>
      <h4>XX 원룸</h4>
      <p> {{가격}} 만원</p>
    </div>
  </div>
</template>




<script>


export default {
  name : 'App',
  data() {
    return {
      가격 : 100,
      style : 'color:blue'
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


</style>
