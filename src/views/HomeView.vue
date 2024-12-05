<template>
  <div class="home">
    <!-- <h1>My name is {{ fullnameA }} and I am {{ ageIncrase() }} in age</h1>
    <img alt="Vue logo" src="../assets/logo.png" />

    <button @click="age++">Increase Age</button>
    <button @click="age--">Decrease Age</button> -->

    <!-- <button @click="fullname">Fullname</button> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <button <<router-link to="/FavCarComp"/></button> -->
    <!-- <router-link to="/FavCarComp">To FavCar</router-link> -->
  </div>
  <fav-car-comp />
  <!-- <h1>{{ count }}</h1>

  <button @click="count--">-</button>
  <button @click="count++">+</button> -->

  <button @click="toggleImg()">
    <p v-if="bool">Hide Image</p>

    <p v-else>show Image</p>
  </button>
<!-- <h1 v-show="bool">The image is shown</h1> -->
<!-- <h1 v-show="bool">The image is H</h1> -->
  <div v-if="bool">
    <img width="100px" :src="url" alt="car" />
  </div>

  <section>
    <div v-for="friend in friends" :key="friend " >
      
      
      <p v-if="friend.favFood === 'Rice and Chicken'"  >  {{ friend.name }} likes to eat {{ friend.favFood }}. and their surname is {{ friend.surname }}

            </p>
            
</div>

      <!-- {{ friend }} -->
            
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import FavCarComp from "@/components/FavCarComp.vue";
export default {
  name: "FavComp",
  components: {
    FavCarComp,
  },

  data() {
    return {
      bool: true,
      name: "Sivuyile",
      lastName: "Mtwetwe",
      age: 24,
      count: 0,
      url: "https://image-prod.iol.co.za/resize/1456x145600/?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/e14d453e-6641-5374-971a-dca315ed2467&operation=CROP&offset=0x0&resize=1200x800",

      friends: [{
        name: "Zenande",
        surname: "Nocanda",
        favFood: "Pizza",
      },
      {name: "Sivuyile",
        surname: "Mtwetwe",
        favFood: "Rice and Chicken",
      },
      {name: "Siyavuya",
        surname: "Khohlani",
        favFood: "Umphokoqo",
      },
      {
        name: "Avela",
        surname: "Nikani",
        favFood: "Umbengo",
      }



]
    };
  },

  methods: {
    fullname() {
      return this.name + " " + this.lastName;
    },

    ageIncrase() {
      return this.age + 10;
    },
    toggleImg() {
      this.bool = !this.bool;
    },
  },

  computed: {
    fullnameA() {
      return this.name + " " + this.lastName;
    },
  },
};
</script>
