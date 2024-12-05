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
          <button 
            v-if="expandedIndex !== index" 
            @click="showMore(index)"
          >
            Show More
          </button>
          <button 
            v-else 
            @click="close"
          >
            Close
          </button>
        </td>
      </tr>
      <!-- Expanded Details Row -->
      <tr v-if="expandedIndex !== null">
        <td :colspan="7" class="details-row">
          <div class="fruit-details">
            <h3>Detailed Information for {{ fruits[expandedIndex].name }}</h3>
            <div class="detail-grid">
              <div><strong>Scientific Name:</strong> {{ fruits[expandedIndex].scientificName }}</div>
              <div><strong>Nutritional Info:</strong> {{ fruits[expandedIndex].nutritionalInfo }}</div>
              <div><strong>Growing Regions:</strong> {{ fruits[expandedIndex].growingRegions }}</div>
              <div><strong>Fun Fact:</strong> {{ fruits[expandedIndex].funFact }}</div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandedIndex: null,
      fruits: [
        {
          name: "Apple",
          color: "Red",
          taste: "Sweet",
          season: "Fall",
          averageWeight: "200g",
          scientificName: "Malus domestica",
          nutritionalInfo: "Rich in fiber, vitamin C, and antioxidants",
          growingRegions: "Temperate regions worldwide",
          funFact: "There are over 7,500 known cultivars of apples"
        },
        {
          name: "Banana",
          color: "Yellow",
          taste: "Sweet",
          season: "Year-round",
          averageWeight: "120g",
          scientificName: "Musa acuminata",
          nutritionalInfo: "High in potassium, vitamin B6, and vitamin C",
          growingRegions: "Tropical and subtropical regions",
          funFact: "Bananas are berries, botanically speaking"
        },
        {
          name: "Orange",
          color: "Orange",
          taste: "Citrus",
          season: "Winter",
          averageWeight: "150g",
          scientificName: "Citrus × sinensis",
          nutritionalInfo: "Excellent source of vitamin C",
          growingRegions: "Warm climates like Florida, California, and Brazil",
          funFact: "Oranges were first cultivated in China"
        },
        {
          name: "Strawberry",
          color: "Red",
          taste: "Sweet",
          season: "Spring",
          averageWeight: "25g",
          scientificName: "Fragaria × ananassa",
          nutritionalInfo: "High in antioxidants and vitamin C",
          growingRegions: "Worldwide, especially in temperate regions",
          funFact: "Strawberries are the only fruit with seeds on the outside"
        },
        {
          name: "Grapes",
          color: "Purple",
          taste: "Sweet/Tart",
          season: "Fall",
          averageWeight: "5g",
          scientificName: "Vitis vinifera",
          nutritionalInfo: "Contains resveratrol, good for heart health",
          growingRegions: "Mediterranean, California, Chile, Australia",
          funFact: "Grapes are botanically classified as berries"
        },
        {
          name: "Pineapple",
          color: "Yellow",
          taste: "Sweet/Tart",
          season: "Summer",
          averageWeight: "1.5kg",
          scientificName: "Ananas comosus",
          nutritionalInfo: "Rich in manganese and vitamin C",
          growingRegions: "Tropical regions like Hawaii, Philippines, Brazil",
          funFact: "A single pineapple takes about 2-3 years to grow"
        },
        {
          name: "Mango",
          color: "Orange",
          taste: "Sweet",
          season: "Summer",
          averageWeight: "300g",
          scientificName: "Mangifera indica",
          nutritionalInfo: "High in vitamins A and C",
          growingRegions: "India, Southeast Asia, Mexico",
          funFact: "Mango is the national fruit of India, Pakistan, and the Philippines"
        },
        {
          name: "Watermelon",
          color: "Green",
          taste: "Sweet",
          season: "Summer",
          averageWeight: "4kg",
          scientificName: "Citrullus lanatus",
          nutritionalInfo: "Hydrating, low in calories, rich in lycopene",
          growingRegions: "Warm regions worldwide",
          funFact: "Watermelon is both a fruit and a vegetable"
        },
        {
          name: "Blueberry",
          color: "Blue",
          taste: "Sweet",
          season: "Summer",
          averageWeight: "1g",
          scientificName: "Vaccinium corymbosum",
          nutritionalInfo: "Superfood with highest antioxidant capacity",
          growingRegions: "North America, particularly the United States",
          funFact: "Native Americans used blueberries for medicinal purposes"
        },
        {
          name: "Kiwi",
          color: "Brown",
          taste: "Tangy",
          season: "Winter",
          averageWeight: "75g",
          scientificName: "Actinidia deliciosa",
          nutritionalInfo: "More vitamin C than an orange, high in fiber",
          growingRegions: "New Zealand, Italy, Chile",
          funFact: "Kiwi fruit was originally called 'Yang Tao' in China"
        }
      ]
    };
  },
  methods: {
    showMore(index) {
      // Show details for the selected fruit
      this.expandedIndex = index;
    },
    close() {
      // Close the expanded details
      this.expandedIndex = null;
    }
  }
};
</script>

<style scoped>
table {
  margin: auto;
  border: 1px solid black;
  border-collapse: collapse;
  width: 80%;
}

th, tr, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

.details-row {
  background-color: #f9f9f9;
}

.fruit-details {
  padding: 20px;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>