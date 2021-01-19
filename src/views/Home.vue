<template>
  <div class="container">
      <PostList />
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";

export default {
  name: 'Home',
  components: {
      PostList,
  }
}
</script>
