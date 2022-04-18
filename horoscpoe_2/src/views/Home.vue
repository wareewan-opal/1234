<script setup>
</script>
 
<template>
<div class="container">
<div class="sun1">
  <router-link :to="{ name: 'RequestSun' }"><img src="../assets/category/sun.png" height="150"></router-link>
</div>
</div>
<div class="titlename">
  <p>HOROSCOPE</p>
  </div>
  <table style="width:80%">
  <tr class="category">
    <th><router-link :to="{name: 'Love' }"><img src="../assets/category/love.png" alt="love" height="390"></router-link>
    <router-link :to="{name: 'Love' }"><h5>LOVE HOROSCOPE</h5></router-link></th>
    <th><router-link :to="{name: 'Study' }"><img src="../assets/category/study.png" alt="study" height="390"></router-link>
    <router-link :to="{name: 'Study' }"><h5>STUDY HOROSCOPE</h5></router-link></th>
    <th><router-link :to="{name: 'Health' }"><img src="../assets/category/Health.png" alt="health" height="390"></router-link>
    <router-link :to="{name: 'Health' }"><h5>HEALTH HOROSCOPE</h5></router-link></th>
    <th><router-link :to="{name: 'Finance' }"><img src="../assets/category/finance.png" alt="finance" height="390"></router-link>
    <router-link :to="{name: 'Finance' }"><h5>FINANCE HOROSCOPE</h5></router-link></th>
  </tr>
  </table>
  <div class="left1">
  <img src="../assets/category/left.png" height="550">
</div>
<div class="right1">
  <img src="../assets/category/right.png" height="550">
</div>
<div class="last">
    <img src="../assets/category/Last.png"  height="90">
</div>
<div class="titlename2">
  <h9> &copy; INT203 Client-Side Web Programming || project round 2 : name HOROSCOPE by sec2 group 6</h9>
  </div>
</template>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Cinzel+Decorative:wght@900&family=Kanit:wght@300&family=Zen+Kaku+Gothic+New&display=swap');
html , body {
 background-color:#323233;
 max-width:100%;
 max-height: 0em
}
table {
    padding-right: 10em;
    margin-right: -10em;
}
table, th, td {
  position: relative;
  padding-left: 2.5em;
  margin-left: 9em;
}
.category{
   position: relative;
   margin-left: -10em;
}
.sun1{
  position: relative;
  margin-top: 0.5em;
  margin-left: 35em;
}
.titlename{
  color: #e1c68e;
  font-size: 2.3em;
  font-family: 'Cinzel Decorative', cursive;
  letter-spacing: 1cm;
  margin-left: 13.25em;
}
.right1{
  position:absolute;
  margin-left: 160ex;
  margin-top: -40em;
}
.left1{
  position:absolute;
  margin-top: -40em;
}

.last {
 margin-left: 20em;
}
h5{
  text-align: center;
  color: #C6C2C1 ;
}
h5:hover{
  color: #e1c68e;
}
.copyright{
  color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  font-size: x-small;
  margin-left: 47em;
}
.titlename2{
  color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  margin-left: 19em;
}
.sun1:hover img{
  cursor: pointer;
  transform: scale(1.1);
}
</style>