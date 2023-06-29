import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
  },
 
  mutations: {
    setProducts: (state,products) => {
      state.products = products;
  },
  setProduct: (state,product) => {
    state.product = product;
  },
},

  actions: {
    getProducts: async (context) => {
      fetch("https://sisiphopeps.github.io/data/db.json")
      .then((response)=> response.json())
      .then((products)=> context.commit("setProducts",products))
    },

    getProduct: async (context,id) => {
      fetch("https://sisiphopeps.github.io/data/db.json/"+ id)
      .then((response)=> response.json())
      .then((product)=> context.commit("setProduct",product))
  },
}
 
});
