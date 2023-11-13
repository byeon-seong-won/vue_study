


<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--" v-if="step !== 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step++" v-if="step !== 2">Next</li>
      <li @click="publish" v-if="step == 2">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <!-- <button @click="newPost">새로운 게시글</button> -->

  <input @change="upload" multiple type="file" id="file" />
  <h4>안녕 {{ $store.state.name}} </h4>

  <Container :posts="posts" :step="step" :uploadImg="uploadImg" @write="input = $event"/>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>




<script>

// import List from './components/List.vue'
// import axios from 'axios'
import Container from './components/Container.vue'


export default {
  name : 'App',
  data(){
    return {
      posts : [
        {
          name: "Kim Hyun",
          userImage: "https://picsum.photos/100?random=3",
          postImage: "https://picsum.photos/600?random=3",
          likes: 36,
          date: "May 15",
          liked: false,
          content: "오늘 무엇을 했냐면요 아무것도 안했어요 ?",
          filter: "perpetua"
        },
        {
          name: "John Doe",
          userImage: "https://picsum.photos/100?random=4",
          postImage: "https://picsum.photos/600?random=4",
          likes: 20,
          date: "Apr 20",
          liked: false,
          content: "흔한 자랑스타그램",
          filter: "clarendon"
        },
        {
          name: "Minny",
          userImage: "https://picsum.photos/100?random=5",
          postImage: "https://picsum.photos/600?random=5",
          likes: 49,
          date: "Apr 4",
          liked: false,
          content: "우리집 개는 화장실 물도 내림",
          filter: "lofi"
        }
      ],
      isTab : 0,
      step : 0,
      uploadImg : '',
      input : '',
      checkFilter : ''
    }
  },
  components : {
    Container
  },  
  methods : {
    // newPost() {
    //   axios.get('https://codingapple1.github.io/vue/more0.json').then( 결과 => {
        
    //   }).catch( ()=> {
    //     alert('다시 클릭!')
    //   })
    // }
    tabClick(idx) {
      this.isTab = idx
    },
    upload(e){
    let 파일 = e.target.files;
    let url = URL.createObjectURL(파일[0]);
    this.step++;
    this.uploadImg = url;
    },
    publish() {
      var 새게시물 = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=1",
        postImage: this.uploadImg,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.input,
        filter: this.checkFilter
      };
      this.posts.unshift(새게시물);
      this.step = 0;
    },
  },
    mounted() {
        this.emitter.on('filterChange', (a) => {
            this.checkFilter = a
        })
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
