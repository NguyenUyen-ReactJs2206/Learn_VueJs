<template>
  <div class="home">
    <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" />
    <button @click="onChange">Change</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    onChange() {
      this.$refs.hello.onChangeCSL();
    },
  },
};
</script>

<style scoped>
.home {
  margin-top: 4rem;
}
</style>
