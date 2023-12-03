<script>
export default {
  name: 'About',
  data() {
    return {
      title: 'About Page',
      message: 'This is my About'
    };
  }
};
</script>

<template>
  <!-- Nội dung của template -->
  <!-- Sử dụng các directives và các thành phần UI ở đây -->
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
</style>
