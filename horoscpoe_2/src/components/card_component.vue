<script setup>
import { ref } from 'vue'
defineProps({
  deck: {
    type: Array,
    require: true
  },
  typeofcard: {
    type: String,
    require: true
  }
})
const selected_card = ref([]);
const result = ref([]);
const status = ref('select')

const select = (deck) => {
  while (true) {
    console.log('Start Loop');
    if (selected_card.value.length <= 2) {
      console.log('This if');
      let num = Math.floor(Math.random() * deck.length)
      if (!selected_card.value.includes(num)) {
        selected_card.value.push(num)
        if(selected_card.value.length == 3){status.value = 'popup' }
        break;
      }
    } else { break; }
  }
}
const getResult = (deck , type) =>{
  status.value = 'result'
  for(let i = 0; i < selected_card.value.length; i++){
    result.value.push({
      name: deck[selected_card.value[i]].name,
      mean: eval(`deck[selected_card.value[i]].${type}`)
    })
  }
}

</script>
 
<template>
<table class="cardselect" v-show="status == 'select'">
    <tr v-for="col in 4" class="colselect">
      <th v-for="row in 6">
        <div class="zoom"><img :src="`src/assets/back-card/back_${typeofcard}.png`" :alt="typeofcard"
          height="250" @click="select(deck , typeofcard)">
        </div>
      </th>
    </tr>
  </table>
  <div v-show="status == 'popup'">
     <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!-- <div class="modal-header"> -->
            <h3>HOROSCOPE</h3>
          <!-- </div> -->
          <div class="modal-body"> you're already picked 3 cards </div>
          <div class="modal-button">
            <button class="button" @click="getResult(deck , typeofcard)">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="status == 'result'">
  <div class="sun">
    <img src="../assets/category/sun.png" height="150">
  </div>
  <div>
    <h1>Result Card</h1>
  </div>
  <router-link :to="{name: 'Home' }"><button class="buttonback">BACK TO HOROSCOPE HOME</button></router-link>
  <div v-for="(i , index) in selected_card.length">
    <div class="cardrandom">
        <img :src="`src/assets/front-card/${result[index].name}.jpeg`" :alt="`${result[index].name}`" height="350">
    </div>
  <div class="cardresult">
    <div class="model-mask">
      <div class="model-wrapper">
        <div class="model-container">
          <div class="model-body" style="font-size: larger;"> Card Name : {{ result[index].name }} </div>
          <br>
          <div class="model-body"> Result card : {{ result[index].mean }}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Cinzel+Decorative:wght@900&family=Inconsolata:wght@400;800&family=Kanit:wght@300&family=Zen+Kaku+Gothic+New&display=swap');
.cardselect{
  position: static;
  margin: 0em 40em 80em 7em;
  width: 80%;
  height: 180%;
}
.modal-mask {
  position: fixed;
  /* z-index: 9998; */
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 50%;
  background-color: #323233;
  display: table;
  /* transition: opacity 0.3s ease; */
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  max-width: max-content;
  margin: 10px auto;
  padding: 20px 200px;
  background-color: #FFF5D1;
  font-family: 'Cinzel Decorative', cursive;
  border-radius: 20px;
  box-shadow: 0 2px 8px white
}
h3 {
  margin-top: 1em;
  color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  margin-left: 8.25em;
  position: fixed;
}

.modal-body {
  font-family: 'Cinzel Decorative', cursive;
  margin-left: -2em;
  text-align: center;
  padding-left: 10px;
  font-size: 1em;
  margin-top: 3em;
}

.modal-button {
  display: flex;
  justify-content: end;
}

.sun {
  position: relative;
  margin-top: 0.5em;
  margin-left: 42em;
}

h1 {
  color: #e1c68e;
  font-size: 2.3em;
  font-family: 'Cinzel Decorative', cursive;
  text-align: center;
  padding-top: 1em;
  margin-left: 1em;
}

.cardresult {
  margin-top: 5em;
  margin-left: 24.25em;
}
.model-mask {
  position: relative;
  padding-left: 20em;
  margin-top: -15em;
}

.model-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.model-container {
  /* max-width: max-content; */
  margin: 60px auto;
  padding: 60px 100px;
  background-color: #FFF5D1;
  font-family: 'Cinzel Decorative', cursive;
  border-radius: 20px;
  box-shadow: 0 2px 8px #e1c68e;
  position: relative;
  margin-right: 12em;
  margin-top: -10em;
}

.model-body {
  font-family: 'Inconsolata', monospace;
  /* margin-left: -15em; */
  /* text-align: center; */
  /* padding-left: -50px; */
}

.button {
  border-radius: 12px;
  margin: 4px 2px ;
  cursor: pointer; 
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-inline-start: 53.5%;
  margin-inline-end: 46.5%;
  margin-left: 38em;
  margin-top: 1em;
  background-color: #e1c68e;
  color: 00000;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
}

.buttonback {
  border-radius: 12px;
  margin: 4px 2px ;
  cursor: pointer; 
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  margin-left: 38em;
  margin-top: 1em;
  background-color: #e1c68e;
  color: 00000;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
}
.buttonback:hover{
  box-shadow: 0 2px 8px white;
  background-color: thistle;
  color: slateblue;
}

.button:hover {
  box-shadow: 0 2px 8px white;
  background-color: thistle;
  color: slateblue;
}

.cardrandom{
  margin-right: 12em;
  margin-top: 4em;
  /* position: relative; */
  margin-left: 20em;
}

.zoom {
  padding: -5px;
  transition: transform .5s; /* Animation */
  width: 125px;
  height: 125px;
  margin: 0 auto;
  margin-top: 1em;
}
.zoom:hover {
  transform: scale(1.2);
}
</style>