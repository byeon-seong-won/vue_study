


<template>
    <div :class="filter + ' filter-item'" :style="`background-image:url(${uploadImg})`" @click="fire">
        <slot></slot>
    </div> 
</template>

<script>
  export default {
    name : 'Filterbox',
    props : {
        uploadImg : String,
        filter : String
    },
    methods : {
      fire() {
        this.emitter.emit('filterChange',this.filter)
      }
    }
  }

</script>


<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : red;
  background-size: cover;
  background-position : center;
  cursor: pointer;
}
</style>
  
