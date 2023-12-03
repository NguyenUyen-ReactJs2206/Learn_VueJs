<!-- <script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Home Page',
      message: 'This is my Home'
    };
  }
};
</script>

<template>

  <div>
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  color: red;
}
</style> -->

<script setup lang="ts">
import { defineProps, ref } from 'vue';

// Định nghĩa kiểu cho props
interface HelloWorldProps {
  msg: string;
}

// Sử dụng defineProps để nhận props và ánh xạ kiểu của chúng từ interface
const props = defineProps<HelloWorldProps>();

// Sử dụng ref để tạo reactive variable
const count = ref(0);
</script>

<template>
  <div>
    <h1>{{ props.msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
      starter
    </p>
    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
