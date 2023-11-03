<template>
  <div>
    <h4>XX 원룸</h4>
    <p>XX 만원</p>
  </div>
  <div>
    <h4>XX 원룸</h4>
    <p>XX 만원</p>
</div>






<script>
import postdata from './assets/data.js'
import Container from './components/Container.vue'
import axios from 'axios';


export default {
  name : 'App',
  data() {
    return {
      게시물 : postdata,
      더보기클릭 : 0,
      step : 0,
      img : '',
      inputCont : '',
      선택한필터 : ''
    }
  },
  mounted() {
    this.emitter.on('click', (a)=> {
      this.선택한필터 = a
    })
  },
  components : {
    Container
  },
  methods : {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기클릭}.json`).then((결과) => {
        this.게시물.push(결과.data)
        // this.더보기클릭++
      })
    },
    upload(e){
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      this.step++
      this.img = url
    },
    publish() {
        var 새게시물 = {
            name: "Seong won",
            userImage: "https://picsum.photos/100?random=3",
            postImage: this.img,
            likes: 500,
            date: "Oct 30",
            liked: false,
            content: this.inputCont,
            filter: this.선택한필터
        };
        this.게시물.unshift(새게시물);
        this.step = 0;
    }
  }
}
</script>



<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

</style>
