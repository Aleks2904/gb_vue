<template lang="pug">
  .app
    Header
    .main
      nuxt
    Footer
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {Footer, Header}
}
</script>

<style scoped lang="scss">
.app{
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.main{
  height: 100%;
}

</style>
