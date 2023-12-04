<template>
  <MainScreen
    v-if="statusMatch === 'default'"
    @onStart="onHandleBeforeStart($event)"
  />
  <InteractScreen v-if="statusMatch === 'match'" />
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";

export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
  },
  data() {
    return {
      statusMatch: "default",
    };
  },
  methods: {
    //Truoc khi bat dau
    onHandleBeforeStart(config) {
      console.log("running handle before start", config);
      this.statusMatch = "match";
    },
  },
};
</script>
