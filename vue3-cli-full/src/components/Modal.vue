<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="modal" @click.self="onCloseModal">
    <div class="modal-box" :class="{ 'modal-bgpurple': theme === 'contact' }">
      <button @click="onCloseModal" class="modal-close">x</button>
      <div
        class="modal-content"
        :class="{ 'modal-color': theme === 'contact' }"
      >
        {{ title }}
        <div class="modal-header">
          <slot name="header" />
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      // ko truyen pro thi mac dinh la contact
      default: "contact",
      //Truyen vao 1 trong nhung gia tri phia duoi
      validator(value) {
        return ["example", "sales", "contact"].includes(value);
      },
    },
  },
  methods: {
    onCloseModal() {
      this.$emit("close");
    },
  },
  // data() {
  //   return {
  //     title: "This is title",
  //   };
  // },
};
</script>

<style lang="scss">
.modal {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: rgb(21, 19, 19, 0.1);

  &-box {
    width: 200px;
    height: 100px;
    margin-top: 20vh;
    margin-left: 30%;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-content {
    color: rgb(16, 16, 17);
  }
  &-close {
    cursor: pointer;
    padding: 5px 10px;
    font-size: 18px;
  }
  &-bgpurple {
    background-color: purple;
  }

  &-color {
    color: rgb(255, 255, 255);
  }
}
</style>
