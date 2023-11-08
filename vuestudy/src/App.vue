


<template>

    <div>
      <router-view :posts="posts"></router-view>
      <!-- /list 로 접속시 이게 <List>가 됨  -->
    </div>
    

</template>




<script>

// import List from './components/List.vue'

export default {
  name : 'App',
  data(){
    return {
      posts : [
          { 
            title : '첫 째 프로젝트 : 허위매물 전문 부동산 앱',
            content : 'Vue를 이용하면 비누같이 매끈한 앱을 만들 수 있습니다',
            date : 'September 24, 2021',
            number : 0
          },
          { 
            title : '둘 째 프로젝트 : 오마카세 배달 앱',
            content : '음식이 아니라 셰프를 직접 배달해드립니다',
            date : 'October 20, 2020',
            number : 1
          },
          { 
            title : '셋 째 프로젝트 : 현피 앱',
            content : '거리를 설정하면 가장 가까운 파이터를 소개해드려요! 서로 싸워보세요',
            date : 'April 24, 2019',
            number : 2
          }
      ]
    }
  },
  methods : {
    
  },
  components : {
    // List
  }
}

</script>



<style>
* {font-family: 'Noto sans KR', sans-serif; letter-spacing: -0.03rem;font-size: 20px;}
body {margin : 0;text-align: center;}
div {box-sizing: border-box;}
.container h5 {font-size: 20px;color: #333;}

</style>
