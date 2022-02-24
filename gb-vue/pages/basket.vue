<template lang="pug">
  div
    section.preview
      .container
        h1.preview__title Basket
    section.container.basket
      .basket__container
        .basket__card
          ul.basket__card-list
            li.basket__card-item(v-for="item in getBasket" :key="item.type+'-'+item.id")
              img.basket__card-img(:src="item.src" :alt="item.title")
              .basket__card-item-wrapper
                .basket__card-wrapper
                  p.basket__card-title {{item.title}}
                  button.basket__card-remove(@click="remove(item)")
                .basket__card-inner
                  .basket__card-inner-text
                    p.basket__card-text Price:
                    p.basket__card-price ${{item.price}}
                  .basket__card-inner-text
                    p.basket__card-text Description:
                    p.basket__card-text {{item.description}}
                  .basket__card-inner-text
                    p.basket__card-text Quantity:
                    p.basket__card-text {{item.count}}

        .form
          h2.form__form-title
          form.form__form
            div
              input.form__input(placeholder="Bangladesh")
              input.form__input(placeholder="State")
              input.form__input(placeholder="Postcode / Zip")
              button.form__bsket-btn GET A QUOTE
            div
              .form__total-wrapper
                .form__total-inner
                  .form__total-inner-wrap
                    p.form__total-text GRAND TOTAL
                    p.form__total-price ${{totalPrice}}
                button.form__total-btn PROCEED TO CHECKOUT
    Mailing
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Mailing from "../components/common/Mailing";

export default {
  name: 'basket',
  components: {Mailing},
  async fetch(){
    await this.basketRequest();
    this.setTotalPrice();
  },
  data:()=>({
    totalPrice: 0,
  }),
  methods:{
    ...mapActions('basket', ['basketRequest', 'basketRemove']),

    remove(item){
      this.basketRemove({id: item.id, type: item.type})
    },

    setTotalPrice(){
      let total = 0;
      this.getBasket.forEach(el=>{
        total += el.count * el.price
      })

      this.totalPrice = total;
    },
  },
  computed:{
    ...mapGetters('basket', ['getBasket']),
  },
  watch:{
    getBasket:{
      handler(){
        this.setTotalPrice();
      },
      deep: true,
    }
  }

}
</script>

<style scoped lang="scss">
.preview{
  background: #F8F3F4;
  padding: 50px 0;

  &__title{
    text-transform: uppercase;
    font-size: 24px;
    line-height: 29px;
    color: $orange;
  }
}

.basket{
  &__container{
    padding: 80px 0;
    display: grid;
    grid-template-columns: 1fr 30%;
    grid-column-gap: 10%;

    @include px1023{
      padding: 70px 0;
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
    }
  }

  &__card-list{
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__card-item{
    display: grid;
    grid-template-columns: 33% 1fr;

    box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);

    @include px759{
      grid-template-columns: 1fr;

    }
  }

  &__card-img{
    height: 100%;
    width: auto;
  }

  &__card-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__card-title{
    font-size: 24px;
    line-height: 29px;
    color: $black;
  }

  &__card-remove{
    position: relative;

    width: 20px;
    height: 20px;

    &:after,
    &:before{
      content: '';
      display: block;
      width: 2px;
      height: 75%;
      background: $black;

      position: absolute;
      top: 50%;
      left: 50%;
    }

    &:after{
      transform: translate(-50%,-50%) rotate(45deg);
    }

    &:before{
      transform: translate(-50%,-50%) rotate(-45deg);
    }
  }

  &__card-item-wrapper{
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__card-inner{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__card-inner-text{
    display: flex;
    gap: 10px;
  }

  &__card-text{
    font-size: 22px;
    line-height: 26px;
    color: #575757;
  }

  &__card-price{
    font-size: 22px;
    line-height: 26px;
    color: $orange;
  }
}

.form{
  display: flex;
  flex-direction: column;

  &__form-title{
    font-size: 16px;
    line-height: 19px;
    color: $black;

    margin-bottom: 20px;
  }

  &__form{
    @include px760-1023{
      display: grid;
      grid-template-columns: 1fr 30%;
      grid-column-gap: 5%;
    }
  }

  &__input{
    width: 100%;
    padding: 13px 17px;
    border: 1px solid #A4A4A4;

    &:not(:last-child){
      margin-bottom: 20px;
    }

    &::placeholder{
      color: #B1B1B1;
    }
  }

  &__bsket-btn{
    padding: 9px 15px;
    font-size: 11px;
    line-height: 13px;

    border: 1px solid #A4A4A4;

    color: #4A4A4A;

    margin-bottom: 50px;
  }

  &__total-wrapper{
    background: #F5F3F3;
    padding: 40px 34px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

  }

  &__total-inner-wrap{
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  &__total-text{
    font-size: 16px;
    line-height: 19px;

    color: #222222;
  }

  &__total-price{
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;

    color: $orange;
  }

  &__total-btn{
    text-align: center;
    width: 100%;
    padding: 15px 0;
    background: $orange;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;
  }
}
</style>
