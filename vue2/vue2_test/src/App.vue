<template>
  <div id="app">
    <!-- <Schoole />
    <Student /> -->
    <OneBoxVue />
  </div>
</template>

<script>
import OneBoxVue from "./EventBus/OneBox.vue";
import Schoole from "./Schoole.vue";
import Student from "./Student.vue";
export default {
  name: "App",
  components: {
    Student,
    Schoole,
    OneBoxVue,
  },
};
</script>

<style>
</style>
