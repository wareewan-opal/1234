<script setup>
import { computed   } from 'vue';
defineEmits(['create' ,'update'])
const props = defineProps({
  currentNote:{
      type: Object,
      default: {}
  }
})
const newWish  = computed(() => {
    return {id: props.currentNote.id , name: props.currentNote.name , noteDetail: props.currentNote.noteDetail }
})

</script>

<template>
    <div class="name">
    <textarea cols="70" rows="1" placeholder="   input your names..." v-model="newWish.name"></textarea>
  </div>
  <div class="wish">
    <textarea cols="70" rows="10" placeholder="   input your wish..." v-model="newWish.noteDetail"></textarea>
   </div> 
   <button class="update" v-if="newWish.id > 0" @click="$emit('update' , newWish)">Update</button>
    <button class="create" @click="$emit('create' , newWish)">Create</button>
    <router-link :to="{name: 'Home' }"><button class="button2">BACK TO HOROSCOPE HOME</button></router-link>

</template>
 
<style>
.text{
    position: absolute;
    margin-top: 1.25em;
    padding-left: 32.5em;
    margin-left: -13em;
}
.name{
  margin-left: 30em;
  font-family: 'Inconsolata', monospace;
}
.wish{
  margin-left: 30em;
  font-family: 'Inconsolata', monospace;
}
.show{
  display: grid;
  margin-left: 10em;
  margin-top: 1em;
  background-color: antiquewhite;
  border-radius: 12px;
  font-family: 'Inconsolata', monospace;
  margin-right: 40em;
  box-shadow: 0 2px 8px white;
  position: relative;
  padding-left: 1em;
  width: 50%;
  clear: both;
  padding-top: 1em;
}
.delete{
  font-size: smaller;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  background-color: #e1c68e;
  font-family: 'Inconsolata', monospace;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
  padding: 5px 15px;
}
.create , .update{
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  background-color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
  display: inline-block;
  margin-inline-start: 44em;
  padding: 10px 30px;
  margin-top: 1em;
}
.edit{
  font-size: smaller;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  background-color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
  padding: 5px 15px;
}
.button2 {
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  background-color: #e1c68e;
  font-family: 'Cinzel Decorative', cursive;
  color: black;
  display: inline-block;
  margin-inline-start: 38em;
  padding: 10px 30px;
  margin-top: 1em;
}
.button2:hover , .update:hover{
  box-shadow: 0 2px 8px white;
  background-color: thistle;
  color: slateblue;
}

</style>