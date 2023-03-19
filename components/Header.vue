<template>
  <div class="header">
    <div class="header__container">
      <div class="header__space"></div>
      <div class="header__logo">
        <img src="~/assets/images/LogoHorisontal.png" alt="img" />
      </div>
      <div class="header__btnGroup">
        <BaseButton class="btn icon-false sm" color="darck" @click="$emit('show-modal-login')">
          <span slot="default">Вхід </span>
        </BaseButton>
        <BaseButton class="btn icon-false sm" color="primary" @click="$emit('show-modal-register')">
          <span slot="default">Реєстрація</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/variables.scss';

.header {
  border-bottom: 1px solid #23262f;
  background: rgba(20, 20, 22, 0.9);
  backdrop-filter: blur(7.5px);
  padding: 10px;

  @media (min-width: 768px) {
    padding: 24px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
  }

  &__space {
    display: none;

    @media (min-width: 768px) {
      display: block;
      width: 181px;
    }
  }

  &__logo {
    img {
      width: 148px;
      height: 30px;

      @media (min-width: 768px) {
        width: 222px;
        height: 45px;
      }
    }
  }

  &__btnGroup {
    display: flex;
    max-width: 180px;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
