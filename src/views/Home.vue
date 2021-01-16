<template>
  <div class="container">
      <PostList />
  </div>
</template>

<script>
import PostList from "@/views/PostList";

export default {
  name: 'Home',
  components: {
      PostList,
  }
}
</script>
