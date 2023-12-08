<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/form">Form</router-link> |
    <router-link to="/transaction">Transaction</router-link> |
    <router-link to="/composition">Composition</router-link>
  </nav>
  <router-view />
</template>

<script setup></script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
