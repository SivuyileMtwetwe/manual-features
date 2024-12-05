<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <CardComp text="Sivuyile"/>
</template>

<script>
import CardComp from '@/components/CardComp.vue';


export default {
components:{
  CardComp
},

data(){
  return {
    object: {
      name: "Sivuyile",
      favSport: "Cricket"
    }
  }
}
}
</script>
<style lang="">
  
</style>