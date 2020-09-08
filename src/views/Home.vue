<template>
  <div class="home">
    <div class="header">
     <img src="../assets/computer-767781_1280.jpg" alt="#" class="image">
     <div class="header-list">
       <a class="logo" href="">TOP</a>
       <a class="logo" href="#profile" v-smooth scroll>PROFILE</a>
       <a class="logo" href="#skills" v-smooth-scroll>SKILLS</a>
       <a class="logo" href="#works" v-smooth-scroll>WORKS</a>
       <a class="logo" href="#contact" v-smooth-scroll>CONTACT</a>
     </div>
     <div class="top logo">
      <h1>Masaki<br>Tanada's<br>Portfolio</h1>
     </div>
    </div>
    <div class="main">
     <div class="profile" id="profile">
      <h2 class="title">PROFILE</h2>
     <div class="profile-left">

     </div>
     <div class="profile-right">
      <div class="container">
        <p><span>名前:</span>棚田真起（たなだまさき）</p>
        <p><span>出身:</span>東京都</p>
        <p class="active-title">活動:</p><div class="text">現在大学1年。在学中。<br>2020年6月よりプログラミングの学習を始めた。<br>趣味はサッカー、体を動かすこと。</div>
      </div>
     </div>
    </div>
    <div class="skill" id="skills">
      <h2 class="title">SKILLS</h2>
     <div class="box">
      <div class="card">
       <p>HTML</p>
       <img src="../assets/HTML5_Badge.svg" alt="#">
      </div>
      <div class="card">
       <img src="../assets/css-3.svg" alt="#">
      </div>
      <div class="card">
       <p>javascript</p>
       <img src="../assets/javascript.svg" alt="#">
      </div>
      <div class="card">
       <p>Vue.js</p>
       <img src="../assets/vue.svg" alt="#">
      </div>
      <div class="card">
       <p>PHP</p>
       <img src="../assets/php.svg" alt="#">
      </div>
      <div class="card">
       <p>laravel</p>
       <img src="../assets/laravel.svg" alt="#">
      </div>
     </div>
    </div>
    <div class="works" id="works">

    </div>
    <div class="contact" id="contact">
     <h2 class="title">CONTACT</h2>
     <p>最後までご覧いただきありがとうございました。<br>制作の依頼・ご相談などお気軽にメールまたはツイッターDMよりお問い合わせください。</p>
     <form name="contact" method="POST" data-netlify="true" action="/thankyou">
     <input type="hidden" name="form-name" value="contact" />
  <p class="name">
    <label>Your Name: <input type="text" name="name"/></label>   
  </p>
  <p class="email">
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </div>
   </div>
   <div class="footer">
      <p>©Masaki Tanada, All Rights Reserved.</p>
   </div>
  </div>
</template>

<script>
import vueSmoothScroll from 'vue-smooth-scroll'

export default {
  methods: {
    Vue,use(vueSmoothScroll){
    new Vue({
      el:'#profile',
      el:'#skills',
      el:'#works',
      el:'#contact',
    });
  }
 }
}
</script>

<style scoped>


.logo{
  font-family: Georgia, 'Times New Roman', Times, serif;
}

nuxt-link{
  cursor: pointer;
}

.header-list a {
  position: relative;
  display: inline-block;
  text-decoration: none;
}
.header-list a::after {
  position: absolute;
  bottom: 2px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #333;
  opacity: 0;
  visibility: hidden;
  transition: .3s;
}
.header-list a:hover::after {
  bottom: -4px;
  opacity: 1;
  visibility: visible;
}

.title{
  text-align: center;
  padding-top: 30px;
  font-size: 40px;
  letter-spacing: 7px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.image{
  width: 100%;
  height: auto;
}

.header-list{
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0px;
  width: 100%;
  padding: 20px 0 20px 0;
}

.header-list a{
  margin:0 40px 0 40px;
  font-size: 25px;
  color:black;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 10px 0 10px 0;
}

.top{
  position: absolute;
  top: 35%;
  right: 150px;
  font-weight: 600;
  font-size: 60px;
  letter-spacing: 10px;
  color:rgb(0, 0, 0);
}

.top h1{
  line-height: 100px;
}

.profile{
  height: 500px;
  background-color:wheat;
  position: relative;
  top:-3px;
  width: 100%;
}

.profile-right{
  position: relative;
  left: 50%;
  top: 100px;
  width: 50%;
}

.container{
  letter-spacing: 2px;
}

.container p{
  margin: 30px 0 30px 0;
}

.container span{
  margin-right: 30px;
}

.text{
  position: relative;
  left: 75px;
  top: -45px;
  line-height: 25px;
  width: 60%;
}

.skill{
  background-color: olive;
  position: relative;
  top: -2px;
  width: 100%;
  padding-bottom: 20px;
}

.card{
  margin: 30px;
  background-color: white;
  padding: 40px;
}

.card p{
  text-align: center;
  margin: 0 auto;
  width: 100%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  font-size: 30px;
}

.card img{
  width: 200px;
  height: 200px;
  margin-top: 10px;
}

.box{
  display: flex;
  flex-wrap: wrap;
  margin: 20px  auto;
  width: 80%;
  justify-content: space-around;
}

.contact{
  height: 600px;
}

.contact>p{
  text-align: center;
  margin: 40px;
  font-size: 20px;
  font-weight: bold;
  line-height: 35px;
}

form{
  width: 50%;
  margin: 0 auto;
}

input,
select,
textarea{
  width: 300px;
}


.footer{
  background-color: black;
  color: #ffffff;
  height: 50px;
  margin-top: 30px;
  width: 100%;
}

.footer p{
  text-align: center;
  line-height: 50px;
  font-size: 12px;
}
</style>
