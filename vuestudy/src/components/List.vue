<template>
    <div>
      <h5>{{post[0].title}}</h5>
      <p>블로그 글 날짜</p>
    </div>
    <div>
      <h5>{{post[1].title}}</h5>
      <p>블로그 글 날짜</p>
    </div>
    <div>
      <h5>{{post[2].title}}</h5>
      <p>블로그 글 날짜</p>
    </div>
  </template>
  <script>
  export default {
    props : {
        post : Array
    }
  }
  </script>
  <style>
  
  </style>