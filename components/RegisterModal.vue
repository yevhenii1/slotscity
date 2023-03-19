<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal__container">
        <div class="modal__window">
          <div class="banner">
            <div class="banner__title">Зможеш обрати свій варіант</div>

            <div class="banner__slider">
              <swiper :modules="modules" :pagination="{ clickable: true }" navigation>
                <swiper-slide>
                  <div class="banner__items">
                    <div class="banner__item">
                      <div class="banner__img">
                        <img src="~/assets/images/check-w.png" alt="icon" />
                      </div>
                      <div class="banner__desc">
                        <b>CPA</b>
                        <p>$25 і вище</p>
                      </div>
                    </div>
                    <div class="banner__item">
                      <div class="banner__img">
                        <img src="~/assets/images/check-w.png" alt="icon" />
                      </div>
                      <div class="banner__desc">
                        <b>REVSHARE</b>
                        <p>Піднімай до 60%</p>
                      </div>
                    </div>
                    <div class="banner__item">
                      <div class="banner__img">
                        <img src="~/assets/images/check-w.png" alt="icon" />
                      </div>
                      <div class="banner__desc">
                        <b>Гібрід</b>
                        <p>Зробимо як скажеш</p>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="banner__items">
                    <div class="banner__item">
                      <div class="banner__img">
                        <img src="~/assets/images/check-w.png" alt="icon" />
                      </div>
                      <div class="banner__desc">
                        <b>CPA</b>
                        <p>$25 і вище</p>
                      </div>
                    </div>
                    <div class="banner__item">
                      <div class="banner__img">
                        <img src="~/assets/images/check-w.png" alt="icon" />
                      </div>
                      <div class="banner__desc">
                        <b>REVSHARE</b>
                        <p>Піднімай до 60%</p>
                      </div>
                    </div>
                    <div class="banner__item">
                      <div class="banner__img">
                        <img src="~/assets/images/check-w.png" alt="icon" />
                      </div>
                      <div class="banner__desc">
                        <b>Гібрід</b>
                        <p>Зробимо як скажеш</p>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="banner__items">
                    <div class="banner__item">
                      <div class="banner__img">
                        <img src="~/assets/images/check-w.png" alt="icon" />
                      </div>
                      <div class="banner__desc">
                        <b>CPA</b>
                        <p>$25 і вище</p>
                      </div>
                    </div>
                    <div class="banner__item">
                      <div class="banner__img">
                        <img src="~/assets/images/check-w.png" alt="icon" />
                      </div>
                      <div class="banner__desc">
                        <b>REVSHARE</b>
                        <p>Піднімай до 60%</p>
                      </div>
                    </div>
                    <div class="banner__item">
                      <div class="banner__img">
                        <img src="~/assets/images/check-w.png" alt="icon" />
                      </div>
                      <div class="banner__desc">
                        <b>Гібрід</b>
                        <p>Зробимо як скажеш</p>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="modal__wrapper">
            <div class="modal__header modal__header--register">
              <img src="~/assets/images/Icon-register.png" alt="icon" />
              <b>Реєстрація</b>
            </div>
            <form class="form">
              <div class="form__group">
                <div class="form__input">
                  <input type="text" id="name" name="name" placeholder="Ваше імʼя" class="" />
                  <span class="error">Display error message here.</span>
                </div>
              </div>
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
              <div class="form__group">
                <div class="form__input form__input--password">
                  <input
                    type="password"
                    id="repit-password"
                    name="password"
                    class=""
                    placeholder="Повторіть пароль"
                  />
                  <span class="error">Display error message here.</span>
                </div>
              </div>
              <div class="form__group form__group--connection">
                <span>Оберіть спосіб звязку</span>
                <div class="form__wrapper">
                  <div class="form__connection active">
                    <img src="~/assets/images/telegram.png" alt="" />
                  </div>
                  <div class="form__connection">
                    <img src="~/assets/images/skype.png" alt="" />
                  </div>
                  <div class="form__input">
                    <input type="text" class="" placeholder="@телеграм_адреса" />
                  </div>
                </div>
              </div>
              <div class="form__btn">
                <BaseButton class="btn icon-false md" color="primary">
                  <span slot="default">Реєстрація</span>
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

    @media (min-width: 992px) {
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      max-width: 770px;
      width: 100%;
    }
  }

  &__wrapper {
    width: 355px;
    padding: 25px 0px;

    @media (min-width: 992px) {
      max-width: 385px;
    }
  }

  .banner {
    display: none;
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-image: url('~/assets/images/graph-register.png');
      background-repeat: no-repeat;
      width: 385px;
      height: 182px;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      background-image: url('~/assets/images/Lines.png');
      background-repeat: no-repeat;
      width: 385px;
      height: 161px;
    }

    @media (min-width: 992px) {
      display: flex;
      flex-direction: column;
      background-color: $primaryGreen;
      max-width: 385px;
      width: 100%;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }

    &__title {
      margin-top: 75px;
      margin-left: 55px;
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 40px;
      width: 188px;
      color: $gray100;
    }

    &__slider {
      width: 300px;
      margin-top: 65px;
      margin-left: 55px;

      .swiper {
        height: 300px;
      }

      .swiper-button-next {
        position: absolute;
        top: inherit;
        bottom: 0;
        height: 20px;
        width: 20px;
        right: 90px;
        z-index: 100;
        cursor: pointer;

        &:after {
          content: '';
          font-size: 0;
          background-image: url('~/assets/images/arrow-right.png');
          width: 10px;
          height: 6px;
          position: absolute;
          top: 8px;
        }

        &.swiper-button-disabled {
          opacity: 0.7;
          cursor: default;
        }
      }
      .swiper-button-prev {
        position: absolute;
        top: inherit;
        bottom: 0;
        height: 20px;
        width: 20px;
        left: 90px;
        z-index: 100;
        cursor: pointer;

        &:after {
          content: '';
          font-size: 0;
          background-image: url('~/assets/images/arrow-left.png');
          width: 10px;
          height: 6px;
          position: absolute;
          top: 8px;
        }

        &.swiper-button-disabled {
          opacity: 0.7;
          cursor: default;
        }
      }

      .swiper-pagination {
        bottom: 0px;

        .swiper-pagination-bullet {
          background: $gray300;

          &.swiper-pagination-bullet-active {
            background: $secondaryYellow;
          }
        }
      }
    }

    &__item {
      display: flex;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      b {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: $gray100;
      }

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: $gray100;
      }
    }

    &__img {
      margin-right: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 45px;
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

    &--register {
      margin-top: 60px;
      margin-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      b {
        margin-left: 0;
        margin-top: 10px;
      }
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
    &--connection {
      margin-top: 5px;
      text-align: center;

      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 12px;
        color: $gray400;
        text-transform: uppercase;
      }
    }
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

      &:hover {
        border: 2px solid $gray500;
        color: $gray500;

        &::placeholder {
          color: $gray500;
        }
      }

      &:focus-visible {
        color: $gray300;
        border: 2px solid $primaryYellow;
        outline: unset;

        &::placeholder {
          color: $gray300;
        }
      }
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

    &--password {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        top: 15px;
        right: 15px;
        background-image: url('~/assets/images/Line.png');
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        cursor: pointer;
      }

      &.active {
        input {
          border: 2px solid $gray600;
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

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding-bottom: 18px;

    input {
      width: 150px;
    }

    .form__input {
      margin-bottom: 0;
    }
  }
  &__connection {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background: $gray600;
      border: 1px solid $gray600;
      border-radius: 25px;
      width: 45px;
      height: 45px;
      opacity: 0;
    }

    &:hover {
      &:before {
        opacity: 1;
      }
    }

    &.active {
      &:before {
        opacity: 1;
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
import SwiperClass, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

// import swiper module styles
import 'swiper/css';
import 'swiper/css/pagination';
// more module style...

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
