<template lang="pug">
  footer.footer
    .container.footer__container
      p.footer__copywriter © 2021  Brand  All Rights Reserved.
      ul.footer__social-list
        li.footer__social-item
          a.font-awesome.footer__social-link.footer__social-link_fs(href='http://yandex.ry')
        li.footer__social-item
          a.font-awesome.footer__social-link.footer__social-link_in(href='http://yandex.ry')
        li.footer__social-item
          a.font-awesome.footer__social-link.footer__social-link_vk(href='http://yandex.ry')
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
.footer{
  background: $black;
  padding: 18px;

  &__container{
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include px759{
      flex-direction: column;
      justify-content: center;
      gap: 15px;
    }
  }

  &__copywriter{
    color: $lightGray;
  }

  &__social-list{
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__social-link{
    display: flex;
    justify-content: center;

    width: 30px;
    height: 30px;

    &_fs{
      &:after{
        content: '\f16d';
      }
    }

    &_in{
      &:after{
        content: '\f09a';
      }
    }

    &_vk{
      &:after{
        content: '\f189';
      }
    }
  }
}
</style>
