<template>
  <div class="form">
    <h1>BindingForm</h1>
    <QuizForm />
  </div>
</template>

<script>
import QuizForm from "@/components/QuizForm.vue";

export default {
  name: "BindingForm",
  methods: {},
  components: { QuizForm },
};
</script>

<style scoped>
.from {
  margin-top: 4rem;
}
</style>
