<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg ="Welcome to Your.js App" />
  </div>
</template>

<script>
// @ is an alias to /scr
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>


