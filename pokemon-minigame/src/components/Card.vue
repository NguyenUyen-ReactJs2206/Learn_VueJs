<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card" :class="{ disabled: isDisabled }">
    <div
      class="card__inner"
      :class="{ 'card-is-flipped': isFlipped }"
      @click="onToggleFlipCard"
    >
      <div class="card__face card__face--front">
        <div class="card__content"></div>
      </div>
      <div class="card__face card__face--back">
        <div
          class="card__content"
          :style="{
            backgroundImage: `url('${require('../assets/' + imgBackFaceUrl)}')`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: [String, Number, Array, Object],
    },
    imgBackFaceUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFlipped: false,
      isDisabled: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      if (this.isDisabled) return false;
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) this.$emit("onFlip", this.card);
    },

    onFlipBackCard() {
      this.isFlipped = false;
    },
    onEnabledDisableMode() {
      this.isDisabled = true;
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 90px;
  height: 120px;

  &__inner {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    //quay dang 3d
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
  }
  .disable &__inner {
    cursor: default;
  }

  &-is-flipped {
    transform: rotateY(-180deg);
  }

  &__face {
    position: absolute;
    width: 100%;
    height: 100%;
    //quay tro thanh mat truoc va mac sau
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);

    &--back {
      background-color: var(--light);
      transform: rotateY(-180deg);
    }
  }
  &__face--front &__content {
    background: url("../assets//images/icon_back.png") no-repeat center center;
    background-size: 40px 40px;
    height: 100%;
    width: 100%;
  }
  &__face--back &__content {
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }
}
</style>
