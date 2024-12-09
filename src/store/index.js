import { createStore } from 'vuex'

export default createStore({
  state: {
    friends: [{
      name: "Zenande",
      surname: "Nocanda",
      favColor: "Grey",
      favFood: "Pizza",
      favHobby: "Sleeping"
    },
    {name: "Sivuyile",
      surname: "Mtwetwe",
      favColor: "Blue",
      favFood: "Rice and Chicken",
      favHobby: "Coding"
    },
    {name: "Siyavuya",
      surname: "Khohlani",
      favColor: "Green",
      favFood: "Umphokoqo",
      favHobby: "Soccer"

    },
    {
      name: "Avela",
      surname: "Nikani",
      favColor: "Orange",
      favFood: "Umbengo",
      favHobby: "Rugby"
    }



]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
