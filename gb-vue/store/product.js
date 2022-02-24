export const state = () => ({
  product: []
})

export const mutations = {
  setProduct(state, value){
    state.product = value
  },
}

export const getters = {
  getProduct: state => state.product,
}

export const actions = {
  async productRequest({commit}, id) {
    await this.$axios('/product/' + id).then((response) => {
      commit('setProduct', response.data)
    })
  },
}
