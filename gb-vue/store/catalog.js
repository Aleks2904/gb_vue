export const state = () => ({
  catalog: [],
  catalogType: [],
  catalogs: [],
  dropList: [],
})

export const mutations = {
  setCatalogMain(state, value){
    state.catalog = value
  },

  setCatalogType (state, value){
    state.catalogType = value
  },

  setCatalogs(state,value){
    state.catalogs = value
  },

  setDropList (state,value){
    state.dropList = value
  },
}

export const getters = {
  getCatalog: state => state.catalog,
  getCatalogType: state => state.catalogType,
  getCatalogs: state => state.catalogs,
  getDropList: state => state.dropList,
}

export const actions = {
  async catalogMainRequest({commit}){
    await this.$axios('/catalog-main').then((response)=>{
      commit('setCatalogMain', response.data)
    })
  },

  async catalogTypeRequest({commit}){
    await this.$axios('/catalog-type').then((response)=>{
      commit('setCatalogType', response.data)
    })
  },

  async catalogsRequest({commit}, id){
    await this.$axios('/catalogs/'+ id).then(response=>{
      commit('setCatalogs', response.data)
    })
  },

  async dropListRequest({commit}){
    await this.$axios('/drop-list').then(response=>{
      commit('setDropList', response.data)
    })
  },
}
