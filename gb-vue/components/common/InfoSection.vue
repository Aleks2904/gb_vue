<template lang="pug">
  section.info-block
    .container
      ul.info-block__list
        li.info-block__item
          span.font-awesome.info-block__icon_first
          p.info-block__title Free Delivery
          p.info-block__description Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
        li.info-block__item
          span.font-awesome.info-block__icon_second
          p.info-block__title Sales & discounts
          p.info-block__description Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
        li.info-block__item
          span.font-awesome.info-block__icon_third
          p.info-block__title Quality assurance
          p.info-block__description Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
</template>

<script>
export default {
  name: 'InfoSection'

}
</script>

<style scoped lang="scss">
.info-block{
  padding: 100px 0;
  background: $black;

  &__list{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 5%;

    @include px1023{
      grid-template-columns: 1fr;
      grid-row-gap: 48px;
    }
  }

  &__item{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
  }

  &__icon{

    &_first{
      display: flex;
      align-items: center;
      justify-content: center;

      &:after{
        content: '\f0d1';
        font-size: 44px;
        color: $orange;
      }
    }

    &_second{
      display: flex;
      align-items: center;
      justify-content: center;

      &:after{
        content: '\f295';
        font-size: 44px;
        color: $orange;
      }
    }

    &_third{
      display: flex;
      align-items: center;
      justify-content: center;

      &:after{
        content: '\f19d';
        font-size: 44px;
        color: $orange;
      }
    }
  }

  &__title{
    text-align: center;
    color: $lightGray;
    font-size: 19.96px;
    line-height: 24px;
  }

  &__description{
    text-align: center;
    color: $lightGray;

    font-weight: 300;
    font-size: 13.972px;
    line-height: 17px;
  }
}
</style>
