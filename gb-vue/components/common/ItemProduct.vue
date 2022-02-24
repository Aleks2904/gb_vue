<template lang="pug">
  li.itemProduct
    nuxt-link.itemProduct__link( event="" :to="'/product/' + item.type + '-' + item.id" @click.native="linkClick")
      .itemProduct__img-wrapper
        img.itemProduct__img(:src="item.src" :alt="item.title")
        button.itemProduct__add( ref="btn") Add to Cart
          span.font-awesome.itemProduct__add_icon
      .itemProduct__content-wrapper
        p.itemProduct__title {{item.title}}
        p.itemProduct__description {{item.description}}
        p.itemProduct__price $ {{item.price}}
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'itemProduct',
  props:{
    item: {
      type: Object,
      require: true,
    }
  },
  methods:{
      ...mapActions('basket', ['basketAdd']),
    linkClick(e){
      e.preventDefault()
      if(e.target === this.$refs.btn || this.$refs.btn.contains(e.target)){
        this.basketAdd({
          id: this.item.id,
          type: this.item.type
        })
      }else{
        this.$router.push('/product/' + this.item.type + '-' + this.item.id)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.itemProduct{
  background:  #F8F8F8;

  &__link{
    &:hover img,
    &:focus img{
      transform: rotate(360deg) scale(1.4);
      transition: transform 0.3s;
    }

    &:hover *,
    &:focus *{
      cursor: pointer;
      color: $orange;
      transition: color 0.3s;
    }

    &:hover .itemProduct__img-wrapper:after,
    &:focus .itemProduct__img-wrapper:after{
      opacity: 1;
      z-index: 1;
      transition: opacity 0.3s;
    }

    &:hover .itemProduct__add,
    &:focus .itemProduct__add{
      opacity: 1;
      z-index: 2;

      color: white;
      transition: color 0.3s;
    }
  }

  &__img-wrapper{
    overflow: hidden;
    position: relative;

    &:after{
      content: '';
      display: block;

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      z-index: -1;

      background: rgba(0,0,0,0.5);
      opacity: 0;

      transition: opacity 0.3s;
    }
  }

  &__img{
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s;
  }

  &__add{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;

    padding: 15px 15px 15px 60px;

    z-index: -1;
    opacity: 0;

    border: 1px solid white;
    border-radius: 3px;

    transition: color 0.3s, transform 0.3s, border-color 0.3s;

    &:hover,
    &:focus{
      color: $orange !important;
      border-color: $orange;
      transition: color 0.3s, border-color 0.3s;
    }

    &:hover .itemProduct__add_icon:after,
    &:focus .itemProduct__add_icon:after{
      color: $orange !important;
      transition: color 0.3s;
    }

    &:active{
      transform: translate(-50%, -50%) scale(1.1);
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
        z-index: 1;
        color: white;
        transition: color 0.3s;
      }
    }
  }

  &__content-wrapper{
    padding: 25px 16px;
    background:  #F8F8F8;
  }
  &__title{
    font-size: 13px;
    line-height: 16px;

    transition: color 0.3s;

    margin-bottom: 12px;
  }

  &__description{
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;

    color: #5D5D5D;
    transition: color 0.3s;

    margin-bottom: 18px;
  }

  &__price{
    font-size: 16px;
    line-height: 19px;
    color: $orange;
  }
}
</style>
