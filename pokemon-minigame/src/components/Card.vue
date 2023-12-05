<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <div
      class="card__inner"
      :class="{ 'card-is-flipped': isFlipped }"
      @click="onToggleFlipCard"
    >
      <div class="card__face card__face--front">
        <div class="card__content">Front</div>
      </div>
      <div class="card__face card__face--back">
        <div class="card__content">Back</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      this.isFlipped = !this.isFlipped;
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
}
</style>
