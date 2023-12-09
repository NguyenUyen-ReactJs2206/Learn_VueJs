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
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>Loading Transactions.....</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  // data() {
  //   return {
  //     transactions: [],
  //   };
  // },
  // async created() {
  //   fetch("http://localhost:3000/transactions")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => (this.transactions = data));
  // },
  setup() {
    const transactions = ref([]);
    const error = ref(null);
    console.log(transactions, error);
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/transactions");

        if (!response.ok) throw new Error("Something went wrong");
        transactions.value = await response.json();
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };

    fetchData();

    return { transactions, error };
  },
};
</script>

<style scoped>
.transaction {
  margin-top: 4rem;
}
</style>
