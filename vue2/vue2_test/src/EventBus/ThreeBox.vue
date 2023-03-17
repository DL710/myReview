<template>
  <div>
    <p>我是第3个盒子,我的名字是:{{ name }}</p>
    <button @click="songName">给第一个盒子名字</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "贪吃蛇",
    };
  },
  methods: {
    songName() {
      this.$bus.$emit("getName", this.name);
    },
    beforeDestroy() {
      this.$bus.$off("getName");
    },
  },
};
</script>

<style>
</style>