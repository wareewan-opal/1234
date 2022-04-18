<script setup>
import { ref , onBeforeMount} from 'vue';
import request_componentVue from '../components/request_component.vue';
import Wishlist_componentVue from '../components/Wishlist_component.vue';

let wish = ref([])

const getWish = async () => {
  const res = await fetch ('http://localhost:5000/requesttosun')
  if(res.status === 200){
    wish.value = await res.json()
  }
}

const deleteWish = async (wishID) => {
  let ans = confirm(`Do you want to delete?`)
  if(ans){
  const res = await fetch (`http://localhost:5000/requesttosun/${wishID}` , {method: 'delete'})
  if(res.status === 200){
    (wish.value = wish.value.filter((wish) => wish.id !== wishID))
  }
  }
}

const createNewWish = async (newWish) => {
  const res = await fetch('http://localhost:5000/requesttosun', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ id: newWish.id, name: newWish.name, noteDetail: newWish.noteDetail })
  })
  if (res.status === 201) {
    const addWish = await res.json()
    wish.value.push(addWish)
  }
}

const editingNote = ref({})

const toEditingNode = async (editNote) => {
  editingNote.value = editNote
  console.log(editingNote.value);
}

onBeforeMount(async () =>{
  await getWish()
})

const modifyWish = async (wishs) => {
  const res = await fetch(`http://localhost:5000/requesttosun/${wishs.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ name: wishs.name , noteDetail: wishs.noteDetail})
  })
  if(res.status === 200){
    const modifyWish = await res.json()
    wish.value = wish.value.map((wish) =>
    wish.id === modifyWish.id ? { id: modifyWish.id , name: modifyWish.name , noteDetail: modifyWish.noteDetail } : wish
    ) 
    console.log('sucessfully');
  }else {
    console.log('fail');
    }
    editingNote.value=""
}

</script>
 
<template>
  <h1>Your request to the sun.</h1>
  <h6>May everyone's wishes come true and fulfilled.</h6>
  <request_componentVue :arrayofwish="wish" @create="createNewWish" @update="modifyWish" :currentNote="editingNote"></request_componentVue>
  <Wishlist_componentVue :arrayofwish="wish" @delete="deleteWish" @edit="toEditingNode"></Wishlist_componentVue>
</template>
 
<style>
h6{
  color: #e1c68e;
  font-size: 1em;
  font-family: 'Cinzel Decorative', cursive;
  text-align: center;
  padding-top: 1em;
  margin-left: 1em;
}
</style>