<template>
  <h1>Transaction detail : {{ $route.params.id }}</h1>
  <div v-if="transaction">
    <h1>Name: {{ transaction.name }}</h1>
    <p>Price: {{ transaction.price }}</p>
  </div>
  <div v-else>Loading Transaction {{ $route.params.id }}</div>
</template>

<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data))
      .then(() => console.log(this.transaction));
  },
};
</script>
