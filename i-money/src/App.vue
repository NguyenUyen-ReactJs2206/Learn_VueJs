<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div>
    <h1>Transaction List</h1>
    <ul>
      <li v-for="transaction in transactions" :key="transaction.id">
        {{ transaction.total }} - {{ transaction.node }}
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { collection, doc, getDocs } from "firebase/firestore";
import { fireStoreCore } from "./configs/firebase";
import { ref } from "vue";

export default {
  setup() {
    const transactions = ref([]);

    async function getTransactions() {
      const response = await getDocs(collection(fireStoreCore, "transactions"));
      console.log(response.docs);
    }
    getTransactions();

    // onMounted(async () => {
    //   try {
    //     // Lấy dữ liệu từ collection "transactions"
    //     const querySnapshot = await getDocs(
    //       collection(fireStoreCore, "transactions")
    //     );
    //     console.log(querySnapshot);
    //     querySnapshot.forEach((doc) => {
    //       // Đọc dữ liệu từ mỗi document và thêm vào mảng transactions
    //       transactions.value.push(doc.data());
    //     });
    //   } catch (error) {
    //     console.error("Error getting documents: ", error);
    //   }
    // });

    return {
      transactions,
    };
  },
};
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
./configs/firebase
