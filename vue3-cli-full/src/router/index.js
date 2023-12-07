import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BindingForm from "../views/BindingForm.vue";
import Transaction from "../views/Transaction.vue";
import TransactionDetail from "../views/TransactionDetail.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: BindingForm,
  },
  {
    path: "/transaction",
    name: "transaction",
    component: Transaction,
  },
  {
    path: "/transactions/:id",
    name: "transactionDetail",
    component: TransactionDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
