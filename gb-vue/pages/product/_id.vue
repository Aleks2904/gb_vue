<template lang="pug">
  div
    section.preview
      .container.preview__container
        h1.preview__title  DETAIL PAGE
        BreadCrumbs(:arr="breadCrumbs" :idPage="returnIdPage.split('-')[0]")
    section.main(v-if="getProduct.length > 0")
      .main__img-cotainer
        img.main__img(:src="getProduct[0].src" :alt="getProduct[0].title")
      .container.main__info-block
        .main__wrapper
          h2.main__title {{returnIdPage.split('-')[0]}} COLLECTION
          p.main__description {{getProduct[0].description}}
          p.main__price ${{getProduct[0].price}}
        button.main__btn(@click="add") Add to Cart
          span.font-awesome.main__btn_icon
    section.container.advertising
      ul.advertising__list
        ItemProduct(v-for="item in advertisingList" :key="item.id" :item="item")
    InfoSection
    Mailing
</template>

<script>
import InfoSection from "../../components/common/InfoSection";
import Mailing from "../../components/common/Mailing";
import {mapActions, mapGetters} from "vuex";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import ItemProduct from "../../components/common/ItemProduct";
export default {
  name: 'detailed-product',
  components: {ItemProduct, BreadCrumbs, Mailing, InfoSection},
  async fetch(){
    await this.productRequest(this.returnIdPage)
    const brName = this.returnIdPage.split('-')[0]
    this.breadCrumbs.push({name: brName, link: `/product/${this.returnIdPage}`})
    await this.catalogsRequest(this.returnIdPage.split('-')[0])
    this.updateAdvertisingList();
  },
  data:()=>({
    breadCrumbs:[
      {
        name:'HOME',
        link: '/'
      }
    ],
    advertisingList: [],
  }),

  methods:{
    ...mapActions('product', ['productRequest']),
    ...mapActions('catalog', ['catalogsRequest']),
    ...mapActions('basket', ['basketAdd']),
    updateAdvertisingList(){
      const width = window.innerWidth;
      if(width >= 1024){
        this.advertisingList = this.getCatalogs.slice(0,3)
      }else{
        this.advertisingList = this.getCatalogs.slice(0,2)
      }
    },
    add(){
      this.basketAdd({
        id: this.getProduct[0].id,
        type: this.getProduct[0].type
      })
    }
  },

  computed:{
    ...mapGetters('product', ['getProduct']),
    ...mapGetters('catalog', ['getCatalogs']),

    returnIdPage() {
      return this.$route.params.id
    }
  },
  watch:{
    width(){

    }
  },
  mounted() {
    document.addEventListener('resize', this.updateAdvertisingList)
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

.main{
  margin-bottom: 80px;

  &__img-cotainer{
    position: relative;
    background: #F7F7F7;
    display: flex;
    justify-content: center;
  }

  &__img{
    width: auto;
    max-height: 777px;
  }

  &__info-block{
    position: relative;
    z-index: 1;

    margin-top: -50px;
    border-radius: 16px;
    padding: 60px 0;
    border: 1px solid #EAEAEA;
    background: white;
  }

  &__wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 600px;
    margin: 0 auto 60px;

    padding-bottom: 50px;
    border-bottom: 1px solid #EAEAEA;
  }

  &__title{
    position: relative;
    padding-bottom: 12px;
    margin-bottom: 27px;

    font-size: 14px;
    line-height: 17px;
    font-weight: 300;
    color: $orange;
    text-transform: uppercase;
    text-align: center;

    &:after{
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      width: 60px;
      height: 3px;
      background: $orange;
    }
  }

  &__description{
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;

    text-align: center;
    color: $black;

    margin: 0 auto 30px;
  }

  &__price{
    color: $orange;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;

    text-align: center;
  }

  &__btn{
    position: relative;
    margin: 0 auto;

    display: flex;
    align-items: center;

    padding: 15px 15px 15px 60px;

    color: $orange;

    border: 1px solid $orange;
    border-radius: 3px;

    transition: transform 0.3s;

    &:hover,
    &:focus{
      transform: scale(1.1);
      transition: transform 0.3s;
    }

    &:active{
      transform: scale(0.9);
      transition: transform 0.3s;
    }

    &_icon{
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);

      width: 30px;
      height: 30px;

      &:after{
        content: '\f291';
        color: $orange;
      }
    }
  }
}
.advertising{
  margin-bottom: 80px;

  &__list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5%;

    @include px760-1023{
      grid-template-columns: repeat(2, 1fr);
    }

    @include px759{
      grid-template-columns: 1fr;
    }
  }
}
</style>
