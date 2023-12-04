<template>
  <div class="about">
    <h1>This is an about page</h1>

    <teleport to="body">
      <Modal
        v-if="isShowModal"
        title="This is the Title"
        v-on:close="onToggleModal"
      >
        <template v-slot:header> <h2>This is a Header</h2></template>

        <template v-slot:footer>
          <button @click="onToggleModal">Cancel</button></template
        ></Modal
      >
    </teleport>
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
