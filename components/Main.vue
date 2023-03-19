<template>
  <div class="main">
    <div class="main__container">
      <div class="benefits">
        <h4>Тим, хто нагоняє Траф</h4>
        <div class="benefits__items">
          <div class="benefits__item">
            <div class="benefits__icon">
              <img src="~/assets/images/Icon.png" alt="" />
            </div>
            <div class="benefits__desc">
              <div class="benefits__title">Круті акції, призи та прибуткова бонусна програма</div>
              <p class="benefits__text">
                Ми постійно працюємо над тим, щоб вам було цікаво та вигідно!
              </p>
            </div>
          </div>
          <div class="benefits__item">
            <div class="benefits__icon">
              <img src="~/assets/images/Icon-2.png" alt="" />
            </div>
            <div class="benefits__desc">
              <div class="benefits__title benefits__title--170">
                Особлива підтримка для кожного 24/7
              </div>
              <p class="benefits__text">У вас буде свій персональний менеджер</p>
            </div>
          </div>
          <div class="benefits__item">
            <div class="benefits__icon">
              <img src="~/assets/images/Icon-3.png" alt="" />
            </div>
            <div class="benefits__desc">
              <div class="benefits__title benefits__title--150">Детальна статистика</div>
              <p class="benefits__text">
                Миттєве оновлення, зрозуміла система відображення статистики
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="main__about">
        <h3>Володарі Трафіку</h3>
        <p>
          SC Partners – нова партнерська мережа з величезним досвідом та експертизою. Кожен наш
          партнер отримує очікувану вигоду на абсолютно прозорих умовах та бездоганний супровід. Ми
          будемо поряд з вами: на відстані одного повідомлення в месенджері або дзвінка, адже ми
          працюємо поряд з вами.
        </p>
        <div class="stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.main {
  &__container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding-bottom: 50px;

    @media (min-width: 992px) {
      display: flex;
      flex-direction: column-reverse;
      padding-bottom: 100px;
    }

    &:before {
      content: '';
      position: absolute;
      top: 270px;
      left: 0;
      background-image: url('~/assets/images/Centauri-mob-l.png');
      background-repeat: no-repeat;
      width: 218px;
      height: 343px;
      z-index: -1;

      @media (min-width: 992px) {
        background-image: url('~/assets/images/Centauri-l.png');
        width: 417px;
        height: 431px;
        top: inherit;
        bottom: 0;
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: -135px;
      right: 0;
      background-image: url('~/assets/images/Centauri-mob-r.png');
      background-repeat: no-repeat;
      width: 237px;
      height: 543px;
      z-index: -1;

      @media (min-width: 992px) {
        background-image: url('~/assets/images/Centauri-r.png');
        width: 334px;
        height: 855px;
        top: -100px;
      }
    }
  }

  &__about {
    background: rgba(35, 38, 47, 0.5);
    border-radius: 24px;
    max-width: 295px;
    width: 100%;
    margin: 0 auto;
    padding: 25px;
    isolation: isolate;
    margin-top: 50px;
    position: relative;

    @media (min-width: 992px) {
      max-width: 820px;
      margin-top: 100px;
      padding: 39px 40px;
    }

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-image: url('~/assets/images/graph-mob.png');
      background-repeat: no-repeat;
      width: 100%;
      height: 182px;
      z-index: -1;

      @media (min-width: 992px) {
        background-image: url('~/assets/images/graph.png');
        height: 200px;
      }
    }

    h3 {
      font-size: 25px;
      line-height: 25px;
      color: $gray200;
      text-align: center;
      position: relative;
      display: block;
      width: 100%;

      @media (min-width: 992px) {
        font-size: 40px;
        line-height: 48px;
        max-width: 334px;
        width: 100%;
        margin: 0 auto;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0px;
        left: 15px;
        background-image: url('~/assets/images/Sign-of-the-Horns-mob.png');
        background-repeat: no-repeat;
        width: 20px;
        height: 25px;

        @media (min-width: 992px) {
          background-image: url('~/assets/images/Sign-of-the-Horns.png');
          width: 36px;
          height: 45px;
          left: -60px;
        }
      }

      &:after {
        content: '';
        position: absolute;
        top: 0px;
        right: 15px;
        background-image: url('~/assets/images/Sign-of-the-Horns-2-mob.png');
        background-repeat: no-repeat;
        width: 20px;
        height: 25px;

        @media (min-width: 992px) {
          background-image: url('~/assets/images/Sign-of-the-Horns-2.png');
          width: 36px;
          height: 45px;
          right: -60px;
        }
      }
    }

    p {
      margin-top: 25px;
      font-size: 14px;
      line-height: 24px;
      color: $gray500;
      text-align: center;
    }

    .stars {
      max-width: 175px;
      height: 15px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 25px;

      span {
        background-image: url('~/assets/images/Shape.png');
        width: 13px;
        height: 12px;
      }
    }
  }

  .benefits {
    margin-top: 50px;

    @media (min-width: 992px) {
      margin-top: 125px;
    }

    h4 {
      font-size: 25px;
      line-height: 25px;
      color: $gray200;
      text-align: center;

      @media (min-width: 992px) {
        font-size: 32px;
        line-height: 40px;
      }
    }

    &__items {
      margin-top: 35px;
      max-width: 335px;
      width: 100%;
      margin: 0 auto;

      @media (min-width: 992px) {
        margin-top: 75px;
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
      }
    }

    &__item {
      margin-top: 35px;
      margin-bottom: 25px;
      display: flex;
      align-items: center;

      @media (min-width: 992px) {
        flex-direction: column;
        max-width: 345px;
        width: 100%;
        text-align: center;
      }

      &:last-child {
        margin-bottom: 0;
      }
      @media (min-width: 992px) {
        margin-bottom: 0;
      }
    }

    &__icon {
      margin-right: 25px;

      @media (min-width: 992px) {
        margin-right: 0;
      }

      img {
        width: 45px;
        height: 45px;

        @media (min-width: 992px) {
          width: 65px;
          height: 65px;
        }
      }
    }

    &__desc {
      @media (min-width: 992px) {
        margin-top: 25px;
      }
    }

    &__title {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: $gray400;

      @media (min-width: 992px) {
        margin-top: 25px;
        max-width: 250px;
        width: 100%;
        margin: 0 auto;
      }

      &--170 {
        @media (min-width: 992px) {
          max-width: 170px;
        }
      }

      &--150 {
        @media (min-width: 992px) {
          max-width: 150px;
        }
      }
    }

    &__text {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: $gray500;
      margin-top: 5px;

      @media (min-width: 992px) {
        margin-top: 25px;
      }
    }
  }
}
</style>
