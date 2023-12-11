import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 100,
      transaction: null,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTransaction(state, transactionPayload) {
      state.transaction = transactionPayload;
    },
  },
  actions: {
    //2param
    async fetchTransaction({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/transactions/" + id);
      const data = await res.json();

      commit("setTransaction", data);
    },
  },
});
