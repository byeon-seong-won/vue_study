<template>
    <div>
      <h5 @click="$router.push('/detail/0')">{{posts[0].title}}</h5>
      <p>블로그 글 날짜</p>
    </div>
    <div>
      <h5 @click="$router.push('/detail/1')">{{posts[1].title}}</h5>
      <p>블로그 글 날짜</p>
    </div>
    <div>
      <h5 @click="$router.push('/detail/2')">{{posts[2].title}}</h5>
      <p>블로그 글 날짜</p>
    </div>
  </template>
  <script>
  export default {
    props : {
      posts : Array
    }
  }
  </script>
  <style>
  
  </style>