<template>
  <div id="">
    <p>
      Hiiiiii Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate nihil dolore est, vel unde
      minus amet ipsa. Ullam, aliquam ut obcaecati adipisci quibusdam beatae placeat odit reprehenderit hic vero? Lorem
      ipsum dolor sit amet consectetur, adipisicing elit. Cumque in excepturi modi delectus itaque quo, impedit unde
      voluptas quae recusandae voluptate molestias incidunt. Eius quibusdam iste ab excepturi velit minus.
    </p>
    <Home />
    <div class="router-link-class">
      <router-link to="/" class="aaa">Go to Home</router-link>
      <hr />
      <router-link to="/about">Go to About</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import './SASS/index.scss';
export default {
  name: 'App',
  components: {
    Home
  }
};
</script>
<style scoped>
.aaa {
  color: black;
  text-decoration: none;
}
</style>
