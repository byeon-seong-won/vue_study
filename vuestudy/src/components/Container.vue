


<template>
    <div>
        <Post posts="posts"/>
        <Post posts="posts"/>
        <Post posts="posts"/>
    </div>
</template>
   
<script>
  import Post from './Post.vue'
  export default {
    name : 'App',
    components : {
      Post
    },
    props : {
        posts : Array
    }
  }

</script>
  
