<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal__container">
        <div class="modal__window modal__window--log">
          <div class="modal__log">
            <div class="modal__header">
              <img src="~/assets/images/Icon-login.png" alt="icon" />
              <b>Вхід</b>
            </div>
            <form class="form">
              <div class="form__group">
                <div class="form__input form__input--error">
                  <input type="text" id="email" name="email" placeholder="Ваш email" class="" />
                  <span class="error">Display error message here.</span>
                </div>
              </div>
              <div class="form__group">
                <div class="form__input form__input--success">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class=""
                    placeholder="Ваш пароль"
                  />
                  <span class="error">Display error message here.</span>
                </div>
              </div>
              <div class="form__btn">
                <BaseButton class="btn icon-false md" color="primary">
                  <span slot="default">Війти</span>
                </BaseButton>
              </div>
            </form>
            <div class="modal__close" @click="$emit('close-modal')">
              <img src="~/assets/images/close.png" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/variables.scss';

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: rgb(53, 57, 69, 0.9);
}

.modal {
  &__window {
    background: $gray700;
    opacity: 0.95;
    border-radius: 25px;
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);

    height: max-content;
    margin: 0 auto;

    &--log {
      max-width: 355px !important;
      width: 100%;
      padding: 25px 0px;
    }

    @media (min-width: 992px) {
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
    }
  }

  &__log {
    width: 355px;
    width: 100%;
    padding: 25px 0px;

    @media (min-width: 992px) {
      // max-width: 355px;
    }
  }

  &__header {
    margin-left: 30px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;

    b {
      margin-left: 10px;
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 25px;
      color: #ffffff;
    }
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: $gray600;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    cursor: pointer;

    &:hover {
      background: $gray200;
    }
  }
}

.form {
  max-width: 295px;
  width: 100%;
  margin: 0 auto;

  &__group {
  }

  &__input {
    margin-bottom: 10px;

    input {
      border: 2px solid $gray600;
      border-radius: 70px;
      padding: 16px;
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: $gray500;
      width: 260px;
      background: $gray700;
    }

    .error {
      display: none;
    }

    &--success {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        top: 20px;
        right: 20px;
        background-image: url('~/assets/images/check.png');
        background-repeat: no-repeat;
        width: 12px;
        height: 10px;
      }

      input {
        border: 2px solid $primaryGreen !important;
        color: $gray300 !important;

        &::placeholder {
          color: $gray300;
        }
      }
    }

    &--error {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        top: 15px;
        right: 15px;
        background-image: url('~/assets/images/close-input.png');
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      input {
        border: 2px solid $primaryOrange !important;
        color: $primaryOrange !important;

        &::placeholder {
          color: $primaryOrange !important;
        }
      }

      .error {
        display: block;
        color: $primaryOrange;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        margin-top: 5px;
        margin-left: 20px;
      }
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
  }
}
</style>

<script>
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

// const v$ = useVuelidate(rules, formData);

// const rules = computed(() => {
//   return {
//     email: {
//       required: helpers.withMessage('The email field is required', required),
//       email: helpers.withMessage('Invalid email format', email),
//     },
//     password: {
//       required: helpers.withMessage('The password field is required', required),
//       minLength: minLength(6),
//     },
//   };
// });
const formData = reactive({
  email: '',
  password: '',
});
</script>
