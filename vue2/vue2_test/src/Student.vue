<template>
  <div>
    <h1 @click="handle">学生名字:{{ name }}</h1>

    <hr>
    <input type="text" v-focus="name">

    <hr>
    <p>{{haha}}</p>
  </div>
</template>

<script>
import mixin from "./mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "赵大侠",
    };
  },
  mixins: [mixin],
};
</script>

<style>
</style>