<script setup>
import {ref , onBeforeMount} from 'vue'
import card_component from '../components/card_component.vue';
const deck = ref([])
const type = ref('study');
//Get Card
const getCard = async () => {
  const res = await fetch ('http://localhost:5000/major-arcana')
  if(res.status === 200){
    deck.value = await res.json()
  }
}
onBeforeMount(async () =>{
  await getCard()
})
</script>
 
<template>
    <h1>STUDY HOROSCOPE</h1>
    <card_component :deck="deck" :typeofcard="type"></card_component>
</template>
<style>
h1{
  color: #e1c68e;
  font-size: 2.3em;
  font-family: 'Cinzel Decorative', cursive;
  text-align: center;
  padding-top: 1em;
}
</style>