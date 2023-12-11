<template>
  <div class="transaction-detail">
    <h1>Transaction detail : {{ $route.params.id }}</h1>
    <div v-if="transaction">
      <h1>Name: {{ transaction.name }}</h1>
      <p>Price: {{ transaction.price }}</p>
    </div>
    <div v-else>Loading Transaction {{ $route.params.id }}</div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     transaction: null,
  //   };
  // },
  computed: {
    transaction() {
      return this.$store.state.transaction;
    },
  },
  created() {
    // fetch("http://localhost:3000/transactions/" + this.$route.params.id)
    //   .then((response) => response.json())
    //   .then((data) => (this.transaction = data))
    //   .then(() => console.log(this.transaction));
    //gui len id
    this.$store.dispatch("fetchTransaction", { id: this.$route.params.id });
  },
};
</script>

<style scoped>
.transaction-detail {
  margin-top: 4rem;
}
</style>
