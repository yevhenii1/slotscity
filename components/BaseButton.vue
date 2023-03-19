<template>
  <component
    :class="[
      { btn: btn },
      { 'primary-btn': primary },
      { 'light-btn': light },
      { 'darck-btn': darck },
      { sm: sm },
      { md: md },
      { disabled: disabled },
      { 'icon-false': iconFalse },
    ]"
    @click="$emit('click')"
  >
    <slot name="prepend"></slot>
    <slot name="default"></slot>
    <slot name="append"></slot>
  </component>
</template>

<style lang="scss">
@import '@/assets/style/variables.scss';

.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // gap: 12px;
  border-radius: 90px;
  cursor: pointer;
  width: max-content;

  span {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
  }

  &.sm {
    padding: 12px 16px;

    span {
      font-size: 14px;
      line-height: 16px;
    }
  }
  &.md {
    padding: 16px 24px;

    span {
      font-size: 16px;
      line-height: 16px;
    }
  }

  &.icon {
    svg {
      width: 20px;
      height: 20px;
    }
    &.sm {
      padding: 0px;
      width: 40px;
      height: 40px;
      border-radius: 40px;
    }
    &.md {
      padding: 0px;
      width: 48px;
      height: 48px;
      border-radius: 48px;
    }
  }

  &.icon-left {
    span {
      margin-left: 13px;
    }
  }

  &.icon-right {
    span {
      margin-right: 13px;
    }
  }
}
.primary-btn {
  background: $primaryYellow;
  color: #000;

  span {
    color: $gray800;
  }

  &.disabled {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #ffc737;
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #ffc737;
  }
}

.light-btn {
  // background: $gray800;

  span {
    color: $gray100;
  }

  svg {
    width: 20px;
    height: 20px;

    path {
      fill: $gray500;
    }
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background: $gray700;

    svg {
      path {
        fill: $gray100;
      }
    }
  }
}

.darck-btn {
  // background: $gray800;
  border: 2px solid $gray500;
  span {
    color: $gray100;
  }

  svg {
    width: 20px;
    height: 20px;

    path {
      fill: $gray100;
    }
  }

  &.disabled {
    background: $gray100;
    opacity: 0.5;
    cursor: not-allowed;

    span {
      color: $gray700;
    }

    svg {
      path {
        fill: $gray700;
      }
    }
  }

  &:hover {
    background: $gray100;

    span {
      color: $gray700;
    }

    svg {
      path {
        fill: $gray700;
      }
    }
  }
}
</style>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },

  computed: {
    primary() {
      return this.color === 'primary';
    },
    light() {
      return this.color === 'light';
    },
    darck() {
      return this.color === 'darck';
    },
  },
};
</script>
