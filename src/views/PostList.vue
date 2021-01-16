<template>
    <div>
        <h1>Les dernières actualités</h1>
        <div v-for="i in [0, 1, 2, 3, 4]" v-bind:key="i">
            <PostItem v-bind:post="i" />
        </div>
    </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
name: "PostList",
    components: {PostItem}
}
</script>

<style scoped>

</style>
