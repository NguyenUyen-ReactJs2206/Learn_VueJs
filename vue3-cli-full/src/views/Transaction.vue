<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="transaction">
    <h1>Transaction Page</h1>
    <div v-if="transactions.length">
      <div v-for="transaction in transactions" :key="transaction.id">
        <router-link :to="`/transactions/${transaction.id}`">{{
          transaction.name
        }}</router-link>
        <p>{{ transaction.price }}</p>
      </div>
    </div>
    <div v-else>Loading Transactions.....</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  async created() {
    fetch("http://localhost:3000/transactions")
      .then((response) => {
        return response.json();
      })
      .then((data) => (this.transactions = data));
  },
};
</script>

<style scoped>
.transaction {
  margin-top: 4rem;
}
</style>
