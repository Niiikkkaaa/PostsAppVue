<template>
  <PostsPage />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostsPage from "./pages/PostsPage.vue";

export default defineComponent({
  name: "App",
  components: {
    PostsPage,
  },
});
</script>

<style lang="scss">
@import "./styles/palette.css";
</style>
