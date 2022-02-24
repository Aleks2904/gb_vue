<template lang="pug">
  div
    section.preview
      .container.preview__container
        h1.preview__title CATALOG
        BreadCrumbs(:arr="breadCrumbs" :idPage="returnIdPage")
    section.container.catalog
      .catalog__filters-block
        v-select(
          v-model='activeFilter'
          v-if='getDropList.length > 0'
          :options='getDropList'
          :searchable='false'
          :clearable='false'
          :clearSearchOnSelect='false'
          @input='changeDropDown')
        .catalog__filters
      ul.catalog__list
        ItemProduct(v-for="item in getCatalogs" :key="item.id" :item="item")
      .catalog__nav
    InfoSection
    Mailing
</template>

<script>
import InfoSection from "../../components/common/InfoSection";
import Mailing from "../../components/common/Mailing";
import {mapActions, mapGetters} from "vuex";
import ItemProduct from "../../components/common/ItemProduct";
import BreadCrumbs from "../../components/common/BreadCrumbs";
export default {
  name: 'catalog',
  components: {BreadCrumbs, ItemProduct, Mailing, InfoSection},
  async fetch(){
    await this.dropListRequest();
    await this.catalogsRequest(this.returnIdPage)
    this.breadCrumbs.push({name: this.returnIdPage, link: `/${this.returnIdPage}`});
    this.activeFilter = this.getDropList.filter(el => el === this.returnIdPage)
  },
  data:()=>({
    breadCrumbs:[
      {
        name:'HOME',
        link: '/'
      }
    ],
    activeFilter: '',
  }),
  methods: {
    ...mapActions('catalog', ['catalogsRequest', 'dropListRequest']),
    changeDropDown(){
      this.$router.push('/catalog/' + this.activeFilter)
    },
  },
  computed:{
    ...mapGetters('catalog', ['getCatalogs', 'getDropList']),
    returnIdPage(){
      return this.$route.params.id
    },
  }
}
</script>

<style scoped lang="scss">
.preview{
  background: #F8F3F4;
  padding: 50px 0;

  &__container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title{
    font-size: 24px;
    line-height: 29px;
    color: $orange;
  }
}

.catalog{
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-bottom: 109px;


  &__filters-block{
    width: auto;
    padding: 50px 0;
  }

  &__list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    margin-bottom: 63px;

    @include px760-1023{
      grid-template-columns: repeat(2, 1fr);
    }

    @include px759{
      grid-template-columns: 1fr;
    }
  }

}
</style>

<style lang='scss'>
.catalog__filters-block .v-select{
  position: relative;
}

.catalog__filters-block .vs__dropdown-toggle{
  border: none !important;
  cursor: pointer !important;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
}

.catalog__filters-block .vs__selected-options{
  margin: 0 !important;
  padding: 0;
}

.catalog__filters-block .vs__selected-options input{
  display: none;
}

.catalog__filters-block .vs__selected{
  position: relative !important;
  cursor: pointer !important;

  color: green !important;
  font-family: "UltimaPro" !important;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;

  margin: 0;
  margin-right: 7px;
  padding: 0;
}

.catalog__filters-block .vs__actions{
  padding: 0px;
  padding-top: 6px;
}

.catalog__filters-block .vs__actions svg{
  fill: green !important;
}

.catalog__filters-block .vs__dropdown-option{
  padding: 5px 10px;
  cursor: pointer;

  &:hover,
  &:focus{
    background: $orange !important;
  }
}

.catalog__filters-block .vs__dropdown-option--selected{
  background: transparent !important;
}

.catalog__filters-block .vs__dropdown-option--highlight{
  background: $orange !important;
}

.catalog__filters-block .vs__dropdown-option--selected{
  color: green !important;
}

.catalog__filters-block .vs__dropdown-menu{
  font-size: 16px !important;
  line-height: 16px !important;

  position: absolute;
  bottom: 0;
  z-index: 3;

  transform: translateY(100%);
  background: white;
}

.catalog__filters-block .vs__open-indicator{
  fill: green !important;
}
</style>
</style>
