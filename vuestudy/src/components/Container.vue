


<template>
    <div v-if="step == 0">
        <Post :post="posts[i]" :idx="i" v-for="(a,i) in posts" :key="i"/>
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
        <div :class="checkFilter + ' upload-image'" :style="`background-image:url(${uploadImg})`"></div>
        <div class="filters">
            <Filterbox :uploadImg="uploadImg" :filter="filter" v-for="filter in filters" :key="filter">
                {{filter}}
            </Filterbox>
        </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
        <div :class="checkFilter + ' upload-image'" :style="`background-image:url(${uploadImg})`"></div>
        <div class="write">
            <textarea class="write-box" @input="$emit('write', $event.target.value)">write!</textarea>
        </div>
    </div>







</template>
   
<script>
  import Post from './Post.vue'
  import Filterbox from './Filterbox.vue'
  export default {
    name : 'App',
    data() {
        return {
            filters : [ 
                "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"
            ],
            checkFilter : ''
        } 
    },
    components : {
        Post,
        Filterbox
    },
    props : {
        posts : Array,
        step : Number,
        uploadImg : String
    },
    mounted() {
        this.emitter.on('filterChange', (a) => {
            this.checkFilter = a
        })
    }
  }

</script>
  


<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
border: 1px solid red;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>