<template>
  <!-- Nội dung của template -->
  <!-- Sử dụng các directives và các thành phần UI ở đây -->
  <div>
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Hello World',
      message: 'This is my Vue component'
    }
  },
  // Phần khác của logic và lifecycle hooks
  methods: {
    // Các phương thức của component
  },
  computed: {
    // Các tính toán dựa trên data của component
  },
  // Các hooks và lifecycle methods
  mounted() {
    // Được gọi khi component được render và kết nối với DOM
  }
  // Các phần khác của component
}
</script>

<style scoped></style>
