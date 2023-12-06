<template>
  <div class="copyright">
    <p>This is Mini Game Pokemon - <a href="#">view here</a></p>
  </div>
</template>

<script>
export default {
  name: "CopyRight",
  components: {},
};
</script>

<style lang="scss" scoped>
.copyright {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.5rem;
  color: var(--light);
  z-index: 3;
  font-size: 1.5rem;

  & a {
    color: #f4dc26;
  }
}
</style>
