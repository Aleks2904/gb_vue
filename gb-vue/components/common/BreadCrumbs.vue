<template lang="pug">
  ul.breadCrumbs
    li.breadCrumbs__breadCrumbs-item(v-for="(item,index) in arr" :key="index" )
      nuxt-link.breadCrumbs__breadCrumbs-link(
        :to="item.link"
        :class="{'breadCrumbs__breadCrumbs-link_active': item.link.includes(idPage) }"
      ) {{item.name}}
</template>

<script>
export default {
  name: 'breadCrumbs',
  props: {
    arr:{
      type: Array,
      require: true
    },
    idPage:{
      type: String,
      require: true,
    }
  }
}
</script>

<style scoped lang="scss">
.breadCrumbs{
  display: flex;
  align-items: center;
  gap: 15px;

  &__breadCrumbs-item{
    position: relative;
    &:not(:last-child){
      padding-right: 15px;

      &:after{
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        right: 0;

        width: 1px;
        height: 100%;

        transform: translateY(-50%) rotate(15deg);
        background: #636363;
      }
    }
  }

  &__breadCrumbs-link{
    text-transform: uppercase;
    font-size: 14px;
    line-height: 17px;
    color: #636363;

    &_active{
      color: $orange;
    }
  }
}
</style>
