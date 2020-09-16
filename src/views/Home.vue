<template>
  <div class="home">
    <div class="header">
      <div class="header-logo-menu">
        <div id="nav-drawer">
          <input type="checkbox" id="nav-input" class="nav-unshown">
          <label for="nav-input" id="nav-open"><span></span></label>
          <label for="nav-input" id="nav-close" class="nav-unshown"></label>
          <div class="header-list">
           <a class="logo" href="">TOP</a>
           <a class="logo" href="#" @click="clickSmoothScrollprofile()">PROFILE</a>
           <a class="logo" href="#" @click="clickSmoothScrollskills()">SKILLS</a>
           <a class="logo" href="#" @click="clickSmoothScrollworks()">WORKS</a>
           <a class="logo" href="#" @click="clickSmoothScrollcontact()">CONTACT</a>
         </div>
        </div>
     </div>
     <div class="top logo">
      <h1>Masaki<br />Tanada's<br />Portfolio</h1>
     </div>
    </div>
    <div class="main">
     <div class="profile" id="profile">
      <h2 class="title">PROFILE</h2>
     <div class="profile-left"> </div>
     <div class="profile-right">
      <div class="container">
        <p class="name-en">Tanada Masaki</p>
        <p class="name-ja">棚田真起</p>
        <div class="text">東京都在住。現在大学1年。在学中。<br />2020年6月よりプログラミングの学習を始めました。<br />趣味はサッカー、体を動かすこと。</div>
      </div>
     </div>
    </div>
    <div class="skill" id="skills">
      <h2 class="title">SKILLS</h2>
     <div class="box">
      <div class="card">
       <p>HTML</p>
       <img src="../assets/HTML5_Badge.svg" alt="#" />
      </div>
      <div class="card">
       <img src="../assets/css-3.svg" alt="#" />
      </div>
      <div class="card">
       <p>javascript</p>
       <img src="../assets/javascript.svg" alt="#" />
      </div>
      <div class="card">
       <p>Vue.js</p>
       <img src="../assets/vue.svg" alt="#" />
      </div>
      <div class="card">
       <p>PHP</p>
       <img src="../assets/php.svg" alt="#" />
      </div>
      <div class="card">
       <p>laravel</p>
       <img src="../assets/laravel.svg" alt="#" />
      </div>
     </div>
    </div>
    <div class="works" id="works"></div>
    <div class="contact" id="contact">
     <h2 class="title">CONTACT</h2>
     <p>最後までご覧いただきありがとうございました。<br />制作の依頼・ご相談などお気軽にメールまたはツイッターDMよりお問い合わせください。</p>
     <form 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      action="/thankyou"
      >
     <input 
      type="hidden" 
      name="form-name" 
      value="contact"  />
     <div class="name">
    <label>お名前: <input type="text" name="name"/></label>   
  </div>
  <div class="email">
    <label>メールアドレス: <input type="email" name="email" /></label>
  </div>
  <div class="company">
    <label>会社名: <input name="company" type="text">
    </label>
  </div>
  <div class="about">
    <label>お問い合わせ内容: <textarea name="message"></textarea></label>
  </div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </div>
   </div>
    <p class="footer">©Masaki Tanada, All Rights Reserved.</p>
  </div>
</template>

<script>
export default {
  methods: {
   clickSmoothScrollprofile() {
     event.preventDefault();
     this.$SmoothScroll(
       document.querySelector("#profile"),
       400,
       null,
       null,
       "y"
     );
   },
   clickSmoothScrollskills() {
     event.preventDefault();
     this.$SmoothScroll(
       document.querySelector("#skills"),
       400,
       null,
       null,
       "y"
     );
   },
   clickSmoothScrollworks() {
     event.preventDefault();
     this.$SmoothScroll(
       document.querySelector("#works"),
       400,
       null,
       null,
       "y"
     );
   },
   clickSmoothScrollcontact() {
     event.preventDefault();
     this.$SmoothScroll(
       document.querySelector("#contact"),
       400,
       null,
       null,
       "y"
     );
   },
 },
};
</script>

<style scoped>
.nav-unshown{
  display: none;
}

.logo{
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.header-list a::after {
  position: absolute;
  bottom: 2px;
  left: 0;
  content: "";
  width: 100%;
  height: 2px;
  background: #333;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
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


.header{
  background-image: url("../assets/computer-767781_1280.jpg");
  background-size: cover;
  height:850px;
}


.header-list{
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0px;
  width: 100vw;
  padding: 20px 0 20px 0;
}

.header-list a{
  margin:0 3vw;
  font-size: 2vw;
  color:black;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 10px 0 10px 0;
  position: relative;
  display: inline-block;
  text-decoration: none;
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
  margin-left: 50%;
  margin-top: 3%;
  width: 300px;
}

.container{
  letter-spacing: 2px;
  width: 100%;
}

.container p{
  margin: 0px 0 30px 0;
}

.name-en{
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 5px;
  padding-left: 20px;
}

.name-ja{
  font-size: 24px;
  font-weight: 550;
  padding-left: 24px;
}

.container span{
  margin-right: 30px;
}

.text{
  padding-left: 24px;
  line-height: 25px;
}

.skill{
  background-color: olive;
  position: relative;
  top: -3px;
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
  height: 700px;
  text-align: center;
}

.contact>p{
  text-align: center;
  margin: 40px;
  font-size: 20px;
  font-weight: bold;
  line-height: 35px;
}

form{
  justify-content:center;
  align-items: center;
  margin: 0px 25vw;
}


input,
textarea{
  width: 60%;
  background-color: #E8E8EA;
  height: 50px;
  border: none;
  margin-left: 20px;
}

label{
  font-size: 13px;
}

.name,
.email,
.company,
.about{
  text-align: right;
  margin: 40px 0;
  padding-right: 5vw;
}

button{
 width: 50vw;
 height: 50px;
 font-size :20px;
 background-color: black;
 color: white;
 cursor: pointer;
 margin: 30px 0 30px 0;
 text-align: center;
}


.footer{
  text-align: center;
  line-height: 50px;
  font-size: 12px;
  width: 100%;
  background-color:black;
  color:white;
}

@media screen and (max-width: 768px) {
  .header{
    background-size: cover;
    height: 500px;
  }

  .top{
    position: absolute;
    bottom: 20vw;
    right: 30px;
    line-height: 5px;
  }

  .top h1{
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 5px;
  }

  .name-en{
  margin-top: 0px;
  }

  .text{
  font-size: 13px;
  }

  header {
  padding:10px;
  background: #ccc;
  }

  #nav-drawer {
  position: relative;
  }

  /*チェックボックス等は非表示に*/
  .nav-unshown {
  display:none;
  }

  /*アイコンのスペース*/
  #nav-open {
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;
  position: absolute;
  top: 10px;
  left: 10px;
  }

  /*ハンバーガーの形をCSSで表現*/
  #nav-open span,
  #nav-open span:before,
  #nav-open span:after {
  position: absolute;
  height: 3px;/*線の太さ*/
  width: 25px;/*長さ*/
  border-radius: 3px;
  background: black;
  display: block;
  content: '';
  cursor: pointer;
  }

 #nav-open span:before {
  bottom: -8px;
 }

 #nav-open span:after {
  bottom: -16px;
 }

 /*閉じる用の薄黒箇所*/
 #nav-close {
  display: none;
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;
  }

  /*メニューの中身*/
  .header-list {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 90%;
  max-width: 330px;/*最大幅（お好みで調整を）*/
  height: 100%;
  background: #fff;
  transition: .3s ease-in-out;
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);
  display: block;
  }

  /*チェックがついたら表示させる*/
  #nav-input:checked ~ #nav-close {
  display: block;
  opacity: .5;
  }

  #nav-input:checked ~ .header-list{
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  box-shadow: 6px 0 25px rgba(0,0,0,.15);
  }

  .header-logo-menu{
  display: flex;
  display: -moz-flex;
  display: -o-flex;
  display: -webkit-flex;
  display: -ms-flex;
  flex-direction: row;
  -moz-flex-direction: row;
  -o-flex-direction: row;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
 }

 /*ロゴやサイトタイトルをセンタリング*/
 .logo-area{text-align:center;margin:auto;}

 .header-list a{
  margin-top: 20px;
 }

 .profile-right{
  width: 50%;
 }

 .contact{
  height: 800px;
 }

 form{
  margin: 0px 5vw;
 }

 input,
 textarea{
  margin-left: 10px;
  width: 50vw;
 }
}

@media screen and (max-width: 480px) {
  .header{
    position: relative;
  }
  .top{
    letter-spacing: 5px;
    color: rgb(0, 0, 0);
  }

  .top h1{
    position: absolute;
    right: 10px;
    bottom: 0px;
    line-height: 40px;
    font-size: 30px;
  }

  .name-en{
    font-size: 8vw;
  }

  .name-ja{
    font-size: 5vw;
  }

  .text{
    width: 80%;
    font-size: 3vw;
  }

  .contact{
    height: 700px;
  }

  .contact p{
    width: 90%;
    font-size: 18px;
  }

  label{
    font-size: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .name input,
  .email input,
  .company input,
  .about textarea{
    margin-left: 10px;
    width: 50vw;
  }

  .name label,
  .email label,
  .company label,
  .about label{
    font-size: 3vw;
  }

  .email{
    justify-content: right;
  }

  .contact{
    height: 900px;
  }

  .contact p{
    font-size: 5vw;
    width: 80vw;
    margin: 40px auto;
  }
}
</style>
