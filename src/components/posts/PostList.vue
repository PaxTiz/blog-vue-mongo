<template>
    <div>
        <h1>Les dernières actualités</h1>
        <h2 v-if="loading">Chargement des données...</h2>
        <div class="posts-list">
            <div v-for="post in posts" v-bind:key="post._id">
                <PostItem v-bind:post="post"/>
            </div>
        </div>
    </div>
</template>

<script>
import PostItem from "@/components/posts/PostItem";

export default {
    name: "PostList",
    components: {PostItem},
    data: function () {
        return {
            posts: [],
            loading: true,
            error: ""
        }
    },
    async mounted() {
        fetch("http://localhost:8000/")
            .then(res => res.json().then(json => this.posts = json.posts))
            .catch(err => this.error = err)
            .finally(() => this.loading = false)
    }
}
</script>

<style scoped>
    .posts-list {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
</style>
