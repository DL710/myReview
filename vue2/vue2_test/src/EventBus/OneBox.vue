<template>
  <div>
    <p>我是第1个盒子,我拿到第三个盒子的名字:{{ youName }}</p>
    <TwoBoxVue />
  </div>
</template>

<script>
import TwoBoxVue from "./TwoBox.vue";
export default {
  components: { TwoBoxVue },
  data() {
    return {
      youName: "",
    };
  },

  mounted() {
    this.$bus.$on("getName", (name) => {
      this.youName = name;
    });
  },
};
</script>

<style>
</style>