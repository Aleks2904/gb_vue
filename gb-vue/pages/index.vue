<template lang="pug">
  div
    section.preview
      .container.preview__container
        img.preview__img(src="@/static/indexPage/man.png" alt='man')
        h1.preview__text-block
          span.preview__first-text THE BRAND
          span.preview__second-text OF LUXERIOUS
          span.preview__third-text FASHION
    section.container.products-for
      ul.products-for__list
        li.products-for__item(
          v-for="(item, index) in getCatalogType"
          :key="index"
          )
          nuxt-link.products-for__link(:to="`/catalog/${item.type}`")
            img.products-for__img(:src="item.src" :alt="item.title")
            p.products-for__description {{item.description}}
            p.products-for__title {{item.title}}
    section.container.featured-block
      h2.featured-block__title Fetured Items
      p.featured-block__description Shop for items based on what we featured in this week
      ul.featured-block__list
        ItemProduct(v-for="(item, index) in getCatalog" :key="index" :item="item")
      button.featured-block__btn Browse All Product
    InfoSection
    Mailing

</template>

<script>

import ItemProduct from "../components/common/ItemProduct";
import { mapGetters, mapActions } from 'vuex'
import InfoSection from "../components/common/InfoSection";
import Mailing from "../components/common/Mailing";

export default {
  name: 'IndexPage',
  components: {Mailing, InfoSection, ItemProduct},
  async fetch(){
    await this.catalogMainRequest();
    await this.catalogTypeRequest();
  },
  data:()=>({
    productForData: [],
  }),
  methods:{
    ...mapActions('catalog', ['catalogTypeRequest', 'catalogMainRequest']),

  },
  computed:{
    ...mapGetters('catalog', ['getCatalog', 'getCatalogType']),
  },
  mounted() {
  }

}
</script>

<style scoped lang="scss">
.preview{
  background: $lightOrange;
  margin-bottom: 65px;

  &__container{
    position: relative;
  }

  &__img{
    height: 100%;
    width: auto;
    transform: translateX(-30%);

    @include px760-1023{
      max-height: 370px;
    }

    @include px759{
      opacity: 0;
      height: 360px;
    }
  }

  &__text-block{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-10%, -50%);

    padding-left: 30px;

    &:after{
      content: '';
      display: block;

      position: absolute;
      left: 0;
      top: 0;

      height: 100%;
      width: 12px;
      background: $orange;
    }

    @include px759{
      width: auto;
      right: 50%;
      transform: translate(50%, -50%);
    }
  }

  &__first-text{
    display: block;
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;

    @include px759{
      white-space: nowrap;

      font-size: 38px;
      line-height: 44px;
    }
  }

  &__second-text{
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    margin-right: 10px;

    @include px759{
      white-space: nowrap;
      font-size: 20px;
      line-height: 20px;
    }
  }

  &__third-text{
    color: $orange;

    font-weight: 700;
    font-size: 32px;
    line-height: 40px;

    @include px759{
      font-size: 20px;
      line-height: 20px;
    }
  }
}

.products-for{
  margin-bottom: 96px;

  &__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 25px;

    @include px760-1023{
      gap: 18px;
    }
  }

  &__item{
    width: calc(33% - 12.5px);

    @include px760-1023{
      width: calc(33% - 10px);
    }

    @include px759{
      width: 100%;
    }

    &:nth-child(n+4){
      width: 100%;
    }
  }

  &__link{
    position: relative;
    height: 260px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;

    &:hover *{
      cursor: pointer;
    }

    &:hover:after{
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover img{
      transform: scale(1.3);
      transition: transform 0.3s;
    }

    &:after{
      content: '';

      display: block;
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.4);

      transition: opacity 0.3s;
    }
  }

  &__img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: transform 0.3s;
  }

  &__description{
    position: relative;
    z-index: 1;

    text-align: center;
    font-size: 16px;
    color: $lightGray;

  }

  &__title{
    position: relative;
    z-index: 1;

    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: $orange;

  }
}

.featured-block{
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-bottom: 109px;


  &__title{
    font-size: 30px;
    line-height: 36px;
    color: $black;
    text-align: center;

    margin-bottom: 6px;
  }

  &__description{
    font-size: 14px;
    line-height: 17px;
    color: #9F9F9F;
    text-align: center;

    margin-bottom: 48px;
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

  &__btn{
    display: inline-block;

    border: 1px solid $orange;
    padding: 14px 30px;
    color: $orange;

    transition: transform 0.3s;

    &:hover,
    &:focus{
      transform: scale(1.1);
      transition: transform 0.3s;
    }
  }
}

</style>
