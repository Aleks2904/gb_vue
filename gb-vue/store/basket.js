export const state = () => ({
  basket: [],
  basketLength: 0,
})

export const mutations = {
  setBasket(state, value){
    state.basket = value
  },
  setBasketLength(state, value){
    state.basketLength = value
  }
}

export const getters = {
  getBasket: state => state.basket,
  getBasketLength: state => state.basketLength,
}

export const actions = {
  async basketRequest({commit}) {
    await this.$axios('/basket').then((response) => {
      commit('setBasket', response.data)
    })
  },
  async basketAdd({commit}, {id, type}){
    await this.$axios.put('/basket', {id, type}).then(response => {
      commit('setBasketLength', response.data)
    })
  },
  async basketRemove({commit, dispatch},{id, type}){
    await this.$axios.put('/basket-remove', {id, type}).then(response => {
      commit('setBasket', response.data)
      dispatch('basketLengthRequest')
    })
  },
  async basketLengthRequest({commit}){
    await this.$axios('/basket-length').then(response => {
      commit('setBasketLength', response.data)
    })
  }

}
