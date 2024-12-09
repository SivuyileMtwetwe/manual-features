<template>
  <div>
    <h1>Friends View</h1>
    <div class="card-group">
      <div v-for="friend in friends" :key="friend.name" class="card-body card-group">
        <div class="card card mb-3" style="width: 18rem">
          <h5 class="card-title">{{ friend.name }}</h5>
          <p class="card-text">{{ friend.surname }}</p>
          <button class="btn btn-outline-dark" @click="showFriendDetails(friend)">Show More</button>
        </div>
      </div>
    </div>

    <Modal :show="showModal" @close="closeModal">
      <!-- Header Slot -->
      <template #header>
        <h2>Details for {{ selectedFriend?.name }}</h2>
      </template>

      <!-- Default Slot (Body) -->
      <template>
        <p><strong>Name:</strong> {{ selectedFriend?.name }}</p>
        <p><strong>Surname:</strong> {{ selectedFriend?.surname }}</p>
        <p><strong>Favorite Color:</strong> {{ selectedFriend?.favColor }}</p>
        <p><strong>Favorite Food:</strong> {{ selectedFriend?.favFood }}</p>
        <p><strong>Favorite Hobby:</strong> {{ selectedFriend?.favHobby }}</p>
      </template>

      <!-- Footer Slot -->
      <template #footer>
        <button class="btn btn-secondary" @click="closeModal">Close</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      selectedFriend: null,
    };
  },
  computed: {
    friends() {
      return this.$store.state.friends;
    },
  },
  methods: {
    showFriendDetails(friend) {
      this.selectedFriend = friend;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedFriend = null;
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
