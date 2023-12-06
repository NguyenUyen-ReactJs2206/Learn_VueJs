<template>
  <div class="screen">
    <h1>✨Congratulations✨</h1>
    <p>{{ Math.round(timer / 1000) }} senconds</p>
    <button @click="onStartAgain">Start Again</button>
  </div>
</template>

<script>
export default {
  name: "ResultScreen",
  components: {},
  props: {
    timer: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onStartAgain() {
      this.$emit("onStartAgain");
    },
  },
};
</script>
