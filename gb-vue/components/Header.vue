<template lang="pug">
  header.header
    .container.header__container
      .logo-block
        nuxt-link.logo-block__logo(to="/")
        .logo-block__search-block
          button.font-awesome.logo-block__search-btn
          input.logo-block__search-input
      .nav-block
        button.font-awesome.nav-block__burger
        button.font-awesome.nav-block__personal-area
        nuxt-link.font-awesome.nav-block__basket(to="/basket")
          span.nav-block__basket_count {{getBasketLength}}
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Header',
  async fetch(){
    await this.basketLengthRequest();
  },
  methods:{
    ...mapActions('basket', ['basketLengthRequest']),
  },
  computed:{
    ...mapGetters('basket', ['getBasketLength'])
  }
}
</script>

<style scoped lang="scss">
.header{
  background: $black;
  padding: 18px;

  &__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.logo-block{
  display: flex;
  align-items: center;
  gap: 40px;

  &__search-block{
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &__logo{
    width: 44px;
    height: 38px;
    background: url("@/static/logo.svg");
  }

  &__search-block{
    position: relative;
    min-width: 26px;
    min-height: 26px;
  }

  &__search-input{
    background: transparent;
    border: 1px solid transparent;
    border-radius: 8px;
    color: $lightGray;

    width: 0px;
    padding: 0;

    opacity: 0;

    transition: width 0.3s, border-color 0.3s, opacity 0.3s;

    &:focus,
    &:hover{
      width: 300px;
      padding: 8px 35px 8px 10px;
      border-color: $lightGray;
      opacity: 1;

      transition: width 0.3s, border-color 0.3s, opacity 0.3s;
    }
  }

  &__search-btn{
    position: absolute;
    right: 5px;

    &:focus + .logo-block__search-input,
    &:hover + .logo-block__search-input{
      width: 300px;
      padding: 8px 35px 8px 10px;
      border-color: $lightGray;
      opacity: 1;

      transition: width 0.3s, border-color 0.3s, opacity 0.3s;
    }

    &:after{
      content: "\f002";
    }
  }
}

.nav-block{
  display: flex;
  align-items: center;
  gap: 33px;

  &__burger{
    &:after{
      content: '\f0c9';
    }
  }

  &__personal-area{
    &:after{
      content: '\f183';
    }
  }

  &__basket{
    position: relative;
    &:after{
      content: '\f291';
      z-index: 1;
    }
    &_count{
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;

      transform: translate(50%, -50%);

      font-family: 'Arial';
      display: inline-block;
      padding: 0.35em 0.65em;
      font-size: 0.6em;
      font-weight: 700;
      line-height: 1;
      color: $lightGray;
      background: $orange;
      text-align: center;
      white-space: nowrap;
      border-radius: 1.2rem;
    }
  }
}

</style>
