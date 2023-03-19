<template>
  <div>
    <Header
      @show-modal-login="showModalLogin = true"
      @show-modal-register="showModalRegister = true"
    />
    <Main />
    <LoginModal v-show="showModalLogin" @close-modal="showModalLogin = false" />
    <RegisterModal v-show="showModalRegister" @close-modal="showModalRegister = false" />
  </div>
</template>

<style lang="scss">
@import '@/assets/style/variables.scss';
</style>

<script>
// import LoginModal from '~/components/LoginModal.vue';

export default {
  // components: { LoginModal },
  data() {
    return {
      showModalLogin: false,
      showModalRegister: false,
    };
  },
};
</script>
