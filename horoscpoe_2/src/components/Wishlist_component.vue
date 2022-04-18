<script setup>
defineEmits(['delete' ,'edit'])
defineProps({
  arrayofwish:{
    type: Array,
    require: true
  }
})
</script>
 
<template>
<div class="text">
     <div class="show">
        <ul v-for="(wish) in arrayofwish">
                <li>
                  <b>Wish from </b>{{wish.name}}
                    <p><b>Detail :</b> {{wish.noteDetail}}</p>
                </li>&nbsp;&nbsp;
          <button class="delete" @click="$emit('delete',wish.id)">Delete Wish from :{{ wish.name}}</button>&nbsp;
          <button class="edit" @click="$emit('edit',wish)">Edit Wish from :{{ wish.name}}</button>
        </ul>
        </div>
  </div>
</template>
 
<style>

</style>