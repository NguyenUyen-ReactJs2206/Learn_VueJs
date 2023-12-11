<template>
  <div class="learn-vuex">
    <h1>Learn VueX</h1>
    <p>{{ count }}</p>
    <button @click="increment">Click Count++</button>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  // created() {
  //   console.log(this.$store.state.count);
  //   this.count = this.$store.state.count;
  // },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: 900;
}

.learn-vuex {
  margin-top: 4rem;
}
</style>
