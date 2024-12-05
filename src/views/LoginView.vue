<template>
  <div>
    <h1>Login</h1>
    <button @click="switchDiv()">
    <p v-if="bool">Sign In</p>

    <p v-else>Sign Up</p>
  </button>
    <span v-if="bool"><SigninComp/></span>
    <span v-else><SignupComp/></span>
  </div>
</template>
<script>
import SigninComp from "@/components/SigninComp.vue";
import SignupComp from "@/components/SignupComp.vue";

export default {
  components: {
    SigninComp,
    SignupComp
  },

  data() {
    return {
      bool: false,
    };
  },

  methods: {
    switchDiv() {
      this.bool = !this.bool;
    },
  },
};
</script>
<style></style>
