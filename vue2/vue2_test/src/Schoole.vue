<template>
  <div class="school">
    <h1 @click="handle">学校名称:{{ name }}</h1>

    <hr />
    <button @click="test">测试</button>
  </div>
</template>

<script>
import mixin from "./mixin";
export default {
  name: "Schoole",
  mixins: [mixin],
  data() {
    return {
      name: "方山中心学校",
    };
  },
  methods: {
    test() {
      console.log(this.abc());
    },
  },
};
</script>

<style lang="less" scoped>
  .school{
    background-color: pink;
    h1{
      color: red;
    }
  }
</style>

