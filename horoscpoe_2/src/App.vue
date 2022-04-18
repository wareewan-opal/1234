<script setup>

</script>
 
<template>
<div class="sun">
  <img src="./assets/sun2.png" height="150">
</div>
  <div class="titlename">
<<<<<<< HEAD
    <p>HOROSCOPE 1</p>
=======
    <p>HOROSCOPE</p>
>>>>>>> 6ebcca0 (first commit)
  </div>
<div class="left">
  <img src="./assets/left.png" height="550">
</div>
<div class="right">
  <img src="./assets/right.png" height="550">
</div>
<div class="last">
    <img src="./assets/Last.png"  height="110">
</div>
<div class="copyright">
<p> &copy; INT 203 Client-Side Web Programming ||</p>
project round 2 : name HOROSCOPE by sec2 group 6
</div>


</template>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Cinzel+Decorative:wght@900&family=Kanit:wght@300&family=Zen+Kaku+Gothic+New&display=swap');
html , body{
  background-color: #323233;
  width: 2000;
  height: 1080;
}
.sun{
  text-align: center;
  padding-top: 2.3ex;
  margin-left: 0.5em;
}
.last{
  text-align: center;
  margin-left: -2ex;
  padding-top: 30em;
  margin-top: -1.5ex;
}

.titlename{
  text-align: center;
  color: #e1c68e;
  font-size: 2.3em;
  font-family: 'Cinzel Decorative', cursive;
  letter-spacing: 1cm;
  margin-left: 1.5em;
}
.right{
  margin-top: -37%;
  /* margin-bottom: -46%; */
  text-align: right;
}
.left{
  margin-top: -19%;
  text-align: left;
}
.copyright{
  text-align: center;
  color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  font-size: medium;
}
</style>