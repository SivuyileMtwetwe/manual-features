<template>
  <div >
    <h1>Friends View</h1>
<div class="card-group">
   <div v-for="friend in friends" :key="friend" class="card-body card-group ">
      <div class="card card mb-3" style="width: 18rem">
        <h5 class="card-title">{{ friend.name }}</h5>
        <p class="card-text">{{ friend.surname }}</p>
        <a href="#" class="btn btn-outline-dark">Show More</a>
      </div>
    </div> 
</div>
    
  </div>
</template>
<script>
export default {
  computed: {
    friends() {
      return this.$store.state.friends;
    },
  },
};
</script>
<style scoped>

</style>
