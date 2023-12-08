<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="screen">
    <h1>Composition page</h1>
    <p>{{ firstName }}</p>
    <p>{{ secondName }}</p>
    <p>{{ car }}</p>
    <button @click="onChangeSomething">Click me</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const firstName = ref("Uyen");
    const secondName = ref({
      name: "Ha",
      lastName: "Nguyen",
    });
    const car = reactive({
      price: 100000,
      name: "Mec",
    });

    function onChangeSomething() {
      console.log(car);

      firstName.value = "Ren";
      //thay doi
      secondName.value = {
        name: "Nhi",
        lastName: "Tran",
      };
      //ko thay doi
      // car = {
      //   price: 200000,
      //   name: "Ferari",
      // };

      car.price = 30000;
      car.name = "aaaa";
    }

    return { firstName, secondName, car, onChangeSomething };
  },
};
</script>

<style scop>
.screen {
  margin-top: 4rem;
}
</style>
