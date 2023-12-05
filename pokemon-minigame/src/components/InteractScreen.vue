<template>
  <div class="screen">
    <h1>InteractScreen</h1>
    <CardFlip
      v-for="(card, index) in cardsContext"
      :key="index"
      :ref="`card-${index}`"
      :imgBackFaceUrl="`images/${card}.png`"
      :card="{ index, value: card }"
      @onFlip="checkRule($event)"
    />
  </div>
</template>

<script>
import CardFlip from "./Card.vue";
export default {
  name: "InteractScreen",
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: { CardFlip },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRule(card) {
      //Neu [] = 2 thi dung khong push card vao mang nua
      if (this.rules.length === 2) return false;

      this.rules.push(card);
      console.log(this.rules);
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("Right...");
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        setTimeout(() => {
          const index0 = this.rules[0].index;
          const index1 = this.rules[1].index;
          this.$refs[`card-${index0}`].onFlipBackCard();
          this.$refs[`card-${index1}`].onFlipBackCard();

          this.rules = [];
        }, 800);
        console.log("wrong!");
      } else return false;
    },
  },
};
</script>
