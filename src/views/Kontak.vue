<template>
  <div class="kontak">
    <h1>Ini halaman Kontak {{$route.params.username}}</h1>
    <Footer />          
  </div>
</template>


<script>

// @ is an alias to /scr
import Footer from "@/components/Footer.vue";

export default {
  name: "footer",
  components: {
    Footer
  }
};
</script>