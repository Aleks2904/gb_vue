<template lang="pug">
  section.mailing
    .container.mailing__container
      .mailing__spam-block
        p.mailing__spam-description “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
      .mailing__mailing-block
        h2.mailing__title SUBSCRIBE
        p.mailing__description FOR OUR NEWLETTER AND PROMOTION
        form.mailing__form
          input.mailing__input(placeholder="Enter Your Email")
          button.mailing__btn-submit(type='submit') Subscribe
</template>

<script>
export default {
  name: 'Mailing'

}
</script>

<style scoped lang="scss">
.mailing{
  position: relative;
  height: 450px;
  background: url("../../static/indexPage/bg-index-last-section.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @include px1023{
    height: 100%;
    padding: 50px 0 140px;
  }

  &:after{
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(244, 244, 244, 0.7);
  }

  &__container{
    position: relative;
    z-index: 1;

    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(2, 30%);
    padding: 0 5%;
    height: 100%;

    @include px1023{
      grid-template-columns: 1fr;
      justify-content: center;
      grid-row-gap: 50px;
    }
  }

  &__spam-block{
    display: flex;
    justify-content: center;

    position: relative;
    padding-top: 130px;

    &:after{
      content: '';
      display: block;

      width: 100px;
      height: 100px;

      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);

      background: url("../../static/indexPage/mailing-spam.png");
      background-size: cover;
      background-position: center;
    }
  }

  &__spam-description{
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }

  &__mailing-block{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__title{
    text-align: center;

    font-size: 24px;
    line-height: 29px;
    font-weight: 700;
  }

  &__description{
    text-align: center;

    font-size: 24px;
    line-height: 29px;
    margin-bottom: 27px;
  }

  &__form{
    display: flex;
    justify-content: center;
  }

  &__input{
    background: #E1E1E1;
    padding: 12px 22px;
    border-radius: 16px 0 0 16px;
    border: none;

    &::placeholder{
      color: $black;
    }
  }

  &__btn-submit{
    background: $orange;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 18px 0 12px;
    border-radius: 0 16px 16px 0;
  }
}
</style>
