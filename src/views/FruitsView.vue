<template>
  <div>
    <h1>Fruits View</h1>
    <table>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Color</th>
        <th>Taste</th>
        <th>Season</th>
        <th>Average Weight</th>
        <th>Actions</th>
      </tr>
      <tr v-for="(fruit, index) in fruits" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ fruit.name }}</td>
        <td>{{ fruit.color }}</td>
        <td>{{ fruit.taste }}</td>
        <td>{{ fruit.season }}</td>
        <td>{{ fruit.averageWeight }}</td>
        <td>
          <button v-if="status !== index" @click="showMore(index)">
            Show More
          </button>
          <button v-else @click="close">Close</button>
        </td>
      </tr>
    </table>


    <div v-if="status !== null">
     <p>A/an {{ fruits[status].name }} is {{ fruits[status].color }} in color, it has a 
        {{ fruits[status].taste }} taste and is only grows in
        {{ fruits[status].season }} and is approximately 
        {{ fruits[status].averageWeight }} in weight</p>   

        
        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: null,
      fruits: [
        {
          name: "Apple",
          color: "Red",
          taste: "Sweet",
          season: "Fall",
          averageWeight: "200g",
        },
        {
          name: "Banana",
          color: "Yellow",
          taste: "Sweet",
          season: "Year-round",
          averageWeight: "120g",
        },
        {
          name: "Orange",
          color: "Orange",
          taste: "Citrus",
          season: "Winter",
          averageWeight: "150g",
        },
        {
          name: "Strawberry",
          color: "Red",
          taste: "Sweet",
          season: "Spring",
          averageWeight: "25g",
        },
        {
          name: "Grapes",
          color: "Purple",
          taste: "Sweet/Tart",
          season: "Fall",
          averageWeight: "5g",
        },
        {
          name: "Pineapple",
          color: "Yellow",
          taste: "Sweet/Tart",
          season: "Summer",
          averageWeight: "1.5kg",
        },
        {
          name: "Mango",
          color: "Orange",
          taste: "Sweet",
          season: "Summer",
          averageWeight: "300g",
        },
        {
          name: "Watermelon",
          color: "Green",
          taste: "Sweet",
          season: "Summer",
          averageWeight: "4kg",
        },
        {
          name: "Blueberry",
          color: "Blue",
          taste: "Sweet",
          season: "Summer",
          averageWeight: "1g",
        },
        {
          name: "Kiwi",
          color: "Brown",
          taste: "Tangy",
          season: "Winter",
          averageWeight: "75g",
        },
      ],
    };
  },
  methods: {
    showMore(index) {
      this.status = index;
    },
    close() {
      this.status = null;
    },
  },
};
</script>

<style scoped>
table {
  margin: auto;
  /* display: inline;
  justify-content: center;
  align-items: center; */
  border: 1px solid black;
  border-collapse: collapse;
}

th,
tr,
td {
  border: 1px solid black;
}
</style>
