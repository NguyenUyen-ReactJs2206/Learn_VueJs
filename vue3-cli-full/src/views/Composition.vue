<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="screen">
    <h1>Composition page</h1>
    <p>{{ firstName }}</p>
    <p>{{ secondName }}</p>
    <p>{{ car }}</p>
    <button @click="onChangeSomething">Click me</button>
    <div class="test-search">
      <input type="text" v-model="searchText" />
      <ul>
        <li v-for="(text, index) in listTestFilled" :key="index">{{ text }}</li>
      </ul>
    </div>
    <div>
      <p class="fetch-data">Data: {{ fetchDataResult }}</p>
      <button @click="changeData">Change Data</button>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from "vue";

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

    //Test Search (computed)
    const searchText = ref("");
    const listText = reactive([
      "text-1",
      "tExt-2",
      "Text-3",
      "tEXt-4",
      "TEXT-5",
      "text-6",
    ]);

    //computed=>ham tra ra du lieu
    // const listTestFilled = computed(() =>
    //   listText
    //     .map((text) => {
    //       text = text.toLowerCase();
    //       return text;
    //     })
    //     .filter((text) => text.includes(searchText.value))
    // );
    const listTestFilled = computed(() =>
      listText.filter((text) =>
        text.toLowerCase().includes(searchText.value.toLowerCase())
      )
    );

    //quan sát các thay đổi trên các biến dữ liệu và thực hiện các hành động phụ thuộc vào sự thay đổi đó
    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    //giong computed - tao ra su thay doi khi ben trong thay doi
    //khac computed: tra ra gia tri, watchEffect thi khong tra ra gia tri
    watchEffect(() => {
      if (searchText.value) {
        console.log("running");
      }
    });
    function onChangeSomething() {
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

    return {
      firstName,
      secondName,
      car,
      onChangeSomething,
      searchText,
      listTestFilled,
    };
  },
};
</script>

<style scop>
.screen {
  margin-top: 4rem;
}
.test-search {
  margin-top: 2rem;
}
.fetch-data {
  margin-top: 2rem;
}
</style>
