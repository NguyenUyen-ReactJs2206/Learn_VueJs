<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Modal
      v-if="isShowModal"
      title="This is the Title"
      v-on:close="onToggleModal"
    />
    <button @click="onToggleModal">Toggle Modal</button>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
  name: "AboutView",
  components: {
    Modal,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    onToggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<style>
.about {
  position: relative;
}
</style>
